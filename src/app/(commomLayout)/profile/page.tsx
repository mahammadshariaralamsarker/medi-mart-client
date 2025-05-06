import ManageProfile from '@/components/modules/profile'
import { getLoggedInUserInfo } from "@/services/AuthServices";
import React from "react";

const ProfilePage = async () => {
  const { data: loggedInUserData } = await getLoggedInUserInfo();
  return (
    <div>
      <ManageProfile userInfo={loggedInUserData} />
    </div>
  );
};

export default ProfilePage
