// eslint-disable-next-line import/named
import { Action, action, Thunk, thunk, ThunkOn, thunkOn } from 'easy-peasy';

import { post, remove } from './requests';
import { Circle } from '../interfaces';

export interface CirclesModel {
  items: Circle[];
  setItems: Action<CirclesModel, Circle[]>;
  loadCircles: Thunk<CirclesModel>;
  saveCircle: Thunk<CirclesModel, Circle>;
  deleteCircle: Thunk<CirclesModel, number>;
  onRequest: ThunkOn<CirclesModel, number>;
}

const circles: CirclesModel = {
  items: [],

  setItems: action((state, payload) => {
    state.items = payload;
  }),

  loadCircles: thunk(async (actions) => {
    return fetch('/api/circles')
      .then((res) => res.json())
      .then((res) => actions.setItems(res as Circle[]));
  }),

  saveCircle: thunk(async (actions, payload) => {
    return post({ url: '/api/circles', payload });
  }),
  deleteCircle: thunk(async (actions, payload) => {
    return remove({ url: `/api/circles/${payload}` });
  }),

  onRequest: thunkOn(
    (actions) => [actions.saveCircle, actions.deleteCircle],
    async (actions) => {
      await actions.loadCircles();
    },
  ),
};

export default circles;
