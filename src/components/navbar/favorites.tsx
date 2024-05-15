import Link from "next/link";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
const Favorites = () => {
  return (
    <Link href={"/favorites"}>
      <FaRegHeart size={20} />
    </Link>
  );
};

export default Favorites;
