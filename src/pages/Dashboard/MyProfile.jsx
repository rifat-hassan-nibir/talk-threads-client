/* eslint-disable react/prop-types */
import Gap from "../../components/Common/Gap";
import UserInfo from "../../components/Dashboard/UserInfo";
import useRole from "../../hooks/useRole";
import AdminProfile from "./Admin/AdminProfile";
import UserProfile from "./User/UserProfile";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const { role } = useRole();

  return (
    <div className="lg:my-10 my-6">
      <UserInfo role={role} userName={user.displayName} email={user.email} photoURL={user.photoURL}></UserInfo>
      <Gap bigGap></Gap>
      {role === "admin" && <AdminProfile></AdminProfile>}
      {role === "user" && <UserProfile></UserProfile>}
    </div>
  );
};

export default MyProfile;
