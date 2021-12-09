type RequestProps = {
  url: string;
  payload?: object | string | number;
};

type CSRFObject = {
  csrfToken: string;
};

let csrfToken: string | null = null;

async function getCsrfToken(): Promise<string> {
  if (csrfToken === null) {
    const response = await fetch('/csrf/', {
      credentials: 'include',
    });
    const data = (await response.json()) as CSRFObject;
    csrfToken = data.csrfToken;
  }
  return csrfToken;
}

export async function post({ url, payload }: RequestProps) {
  return fetch(url, {
    credentials: 'include',
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-CSRFToken': await getCsrfToken(),
    },
    body: JSON.stringify(payload),
  });
}

export async function remove({ url }: RequestProps) {
  return fetch(url, {
    credentials: 'include',
    method: 'DELETE',
    headers: { 'X-CSRFToken': await getCsrfToken() },
  });
}
