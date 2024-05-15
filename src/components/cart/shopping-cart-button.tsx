import Link from "next/link";
import React from "react";
import { TiShoppingCart } from "react-icons/ti";

const ShoppingCartButton = () => {
  return (
    <Link href={"/cart"} className="flex items-center gap-1">
      <TiShoppingCart size={20} />
      <p className="mt-3">0</p>
    </Link>
  );
};

export default ShoppingCartButton;
