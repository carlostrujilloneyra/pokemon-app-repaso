"use client";

import { useState } from "react";

interface Props {
  value?: number;
}

export const CartCounter = ({ value = 10 }: Props) => {
  const [counter, setCounter] = useState<number>(value);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    counter > 0 && setCounter(counter - 1);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <span>Productos en el carrito</span>
        <span className="text-6xl">{counter}</span>

        <div className="flex mt-5">
          <button
            className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
            onClick={handleIncrement}
          >
            +1
          </button>

          <button
            className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
            onClick={handleDecrement}
          >
            -1
          </button>
        </div>
      </div>
    </>
  );
};
