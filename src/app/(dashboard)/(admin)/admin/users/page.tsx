import UserManage from "@/components/modules/user";
import { getAllUsers } from "@/services/UserServices";
import React from "react";

const UsersPage = async () => {
  const { data: allUsers } = await getAllUsers();
  return (
    <div>
      <UserManage allUsers={allUsers} />
    </div>
  );
};

export default UsersPage;
