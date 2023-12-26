"use client";

import { useAppDispatch, useAppSelector } from "@/store";
import { decrement, increment } from "@/store/slices/counter";

interface Props {
  value?: number;
}

export const Cartcounter2 = ({ value = 0 }: Props) => {
  const dispatch = useAppDispatch();

  const counter = useAppSelector((state) => state.counter.count);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
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
