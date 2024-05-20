import React from "react";
import Wrapper from "../wrapper/wrapper";
import Link from "next/link";
import Image from "next/image";
import Searchbar from "../searchbar/search-input";
import ShoppingCartButton from "../cart/shopping-cart-button";
import Favorites from "./favorites";
import { FaRegHeart } from "react-icons/fa";
import LogIn from "./sign-in";

const Navbar = () => {
  return (
    <>
      <Wrapper>
        <nav className="flex items-center justify-between">
          <Link href={"/"}>
            <Image src={"/logo.svg"} alt="/" width={170} height={300} />
          </Link>{" "}
          <div className="flex items-center gap-2 md:gap-5">
            <ShoppingCartButton />
            <Favorites />
          </div>
        </nav>
      </Wrapper>
    </>
  );
};

export default Navbar;
