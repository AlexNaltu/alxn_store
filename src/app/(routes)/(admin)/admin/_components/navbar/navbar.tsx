import Link from "next/link";
import React from "react";

const AdminNavbar = () => {
  return (
    <nav className="font-center flex justify-end gap-4 px-7 py-3 text-lg font-bold">
      <Link href="/">Home</Link>
      <Link href="/admin">Dashboard</Link>
      <Link href="/admin/products">Products</Link>
    </nav>
  );
};

export default AdminNavbar;
