import { useEffect, useState } from 'react';
import { useStoreActions, useStoreState } from './store';

import { Circle } from '../interfaces';

function rndColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function rndNumber() {
  return Math.floor(Math.random() * 5);
}

export default function App() {
  const [isDrawing, setIsDrawing] = useState(false);
  const [deleteTriggered, setDeleteTriggered] = useState(false);
  const [circle, setCircle] = useState<Circle | null>();

  const { loadCircles, saveCircle, deleteCircle } = useStoreActions(
    (actions) => actions.circles,
  );
  const { items } = useStoreState((state) => state.circles);

  useEffect(() => {
    loadCircles();
  }, []);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!isDrawing) {
      return;
    }

    const p2 = { x: e.clientX, y: e.clientY };
    const a = Math.pow((circle as Circle).x - p2.x, 2);
    const b = Math.pow((circle as Circle).y - p2.y, 2);
    const diameter = Math.floor(Math.sqrt(a + b)) * 2;

    setCircle((prev) => {
      return {
        ...prev,
        diameter: diameter < 100 ? 100 : diameter,
      } as Circle;
    });
  }

  async function handleClick(e: React.MouseEvent<HTMLDivElement>) {
    if (deleteTriggered) {
      return;
    }

    setIsDrawing((prev) => !prev);
    if (isDrawing) {
      await saveCircle(circle as Circle);
      setCircle(null);
      return;
    }

    setCircle((prev) => {
      return {
        ...prev,
        x: e.clientX,
        y: e.clientY,
        diameter: 100,
        color: rndColor(),
      } as Circle;
    });
  }

  async function handleDelete(id: number) {
    setDeleteTriggered(true);
    await deleteCircle(id);
    setDeleteTriggered(false);
  }

  return (
    <div className="canvas" onMouseMove={handleMouseMove} onClick={handleClick}>
      {items.concat(circle ? circle : []).map((item) => (
        <div
          key={item.id}
          className="circle"
          style={{
            left: item.x - item.diameter / 2,
            top: item.y - item.diameter / 2,
            width: item.diameter,
            height: item.diameter,
            backgroundColor: item.color,
            animationDelay: `${rndNumber()}s`,
          }}
        >
          <svg viewBox="0 0 100 100" height="50%" width="50%">
            <text
              x="25"
              y="75"
              fontSize="100"
              onMouseDown={() => handleDelete(item.id)}
            >
              x
            </text>
          </svg>
        </div>
      ))}
      <h1 className={items.length > 0 ? 'hidden' : ''}>Click somewhere</h1>
    </div>
  );
}
