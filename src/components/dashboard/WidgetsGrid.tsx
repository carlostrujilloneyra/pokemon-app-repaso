"use client";

import { IoCartOutline } from "react-icons/io5";
import { SimpleWidget } from "../SimpleWidget";
import { useAppSelector } from "@/store";

export const WidgetsGrid = () => {
  const isCart = useAppSelector((state) => state.counter.count);

  return (
    <div className="flex flex-wrap items-center justify-center p-2">
      <SimpleWidget
        title={isCart}
        subtitle="Productos agregados"
        label="Contador"
        icon={<IoCartOutline size={50} className="text-blue-600" />}
      />
    </div>
  );
};
