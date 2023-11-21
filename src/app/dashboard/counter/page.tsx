import { Metadata } from "next";
import { CartCounter } from "@/shopping-cart/components/CartCounter";

export const metadata: Metadata = {
  title: "Shopping Cart",
  description: "Página del carrito de compras",
};

export default function CounterPage() {
  return (
    <>
      <CartCounter value={5} />
    </>
  );
}
