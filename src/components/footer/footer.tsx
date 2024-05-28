import Image from "next/image";
import Link from "next/link";
import React from "react";
import Wrapper from "../wrapper/wrapper";

const Footer = () => {
  return (
    <>
        <footer className=" mt-10 flex flex-col items-center bg-black py-10 text-white ">
          <div className="flex w-full flex-col items-center gap-3 md:flex-row md:justify-between md:px-10">
            <Image src={"/footerlogo.svg"} alt="/" width={170} height={300} />
            <div className="flex flex-col gap-5 md:flex-row md:gap-10">
              <div className="flex flex-col">
                <h1 className="text-xl">Links:</h1>
                <Link href={"/"}>Home</Link>
                <Link href={"/products"}>Products</Link>
                <Link href={"/cart"}>Cart</Link>
                <Link href={"/favorites"}>Favorites</Link>
              </div>
              <div>
                <h1 className="text-xl">Contact:</h1>
                <p>Phone: 123-456-7890</p>
                <p>Email: alxnstore@gmail.com</p>
                <p>Address: Amsterdam Street Frankfurt</p>
                <Link href={"/contact"}>Contact Form</Link>
              </div>
            </div>
          </div>
          <p className="my-4 lg:my-10">
            © 2024 ALXNSTORE. All rights reserved.
          </p>
        </footer>
    </>
  );
};

export default Footer;
