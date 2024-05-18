import React from "react";
import CreatePost from "~/components/forms/create-post";
import Wrapper from "~/components/wrapper/wrapper";

const AdminPage = () => {
  return (
    <>
      <Wrapper>
        <div>
          <h1 className="text-center text-2xl font-bold">Admin Dashboard</h1>
          <CreatePost />
        </div>
      </Wrapper>
    </>
  );
};

export default AdminPage;
