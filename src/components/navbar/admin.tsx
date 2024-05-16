import Link from "next/link";
import React from "react";

const AdminLink = () => {
  if (process.env.NODE_ENV === "development") {
    return (
      <Link href="/admin">
        <h1>Admin</h1>
      </Link>
    );
  } else if (process.env.NODE_ENV === "production") {
    return null;
  }
};

export default AdminLink;
