'use client';

import { Caretaker } from '@/utils/Caretaker';
import { Shape } from '@/utils/Shape';
import { useState } from 'react';

export default function Home() {
  const [caretaker, setCaretaker] = useState<Caretaker>(new Caretaker());

  const [shape, setShape] = useState<Shape>(new Shape('gray'));

  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-center pt-12 bg-gray-200 text-black">
      <h1 className="text-xl font-bold">Memento Pattern</h1>
      <div className="flex flex-col items-center border-2 border-black p-4 m-4 rounded-xl w-1/3">
        <label>History</label>
        <div>
          [
          {caretaker.getMementosCopy().map((memento, index) => (
            <span
              key={index}
              className={`text-sm text-${memento.getState()}-500 mx-1`}
            >
              {memento.getState().toUpperCase()}
            </span>
          ))}
          ]
        </div>

        <div
          className={`w-1/2 h-32 bg-${shape?.getColor() ?? 'gray'}-500`}
        ></div>
        <div className="space-x-2">
          <button
            className="p-2 mt-2 bg-red-500 text-white rounded-md"
            onClick={() => {
              caretaker.addMemento(shape.save());
              const newShape = new Shape('red');
              setShape(newShape);
            }}
          >
            Red
          </button>
          <button
            className="p-2 mt-2 bg-green-500 text-white rounded-md"
            onClick={() => {
              caretaker.addMemento(shape.save());
              const newShape = new Shape('green');
              setShape(newShape);
            }}
          >
            Green
          </button>
          <button
            className="p-2 mt-2 bg-blue-500 text-white rounded-md"
            onClick={() => {
              caretaker.addMemento(shape.save());
              const newShape = new Shape('blue');
              setShape(newShape);
            }}
          >
            Blue
          </button>

          <button
            className={`p-2 mt-2 bg-gray-500 text-white rounded-md`}
            disabled={caretaker.getMementosCopy().length === 0}
            onClick={() => {
              const lastMemento = caretaker.getLastMemento();
              if (lastMemento) {
                setShape(new Shape(lastMemento.getState()));
              }
            }}
          >
            Undo
          </button>
        </div>
      </div>
    </main>
  );
}
