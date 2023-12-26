import { Cartcounter2 } from "@/shopping-cart/components/CartCounter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopping Cart",
  description: "Página del carrito de compras",
};

export default function CounterPage() {
  return (
    <>
      <Cartcounter2 value={20} />
    </>
  );
}
