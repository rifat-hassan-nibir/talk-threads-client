import { AiFillProfile } from "react-icons/ai";
import MenuItem from "../MenuItem";
import { FaUsers } from "react-icons/fa";
import { GoReport } from "react-icons/go";

const AdminMenu = () => {
  return (
    <div>
      {/* Admin Profile */}
      <MenuItem label={"Admin Profile"} to={""} icon={AiFillProfile} end></MenuItem>

      {/* Manage Users */}
      <MenuItem label={"Manage Users"} to={"manage-users"} icon={FaUsers} end></MenuItem>

      {/* Reported Comments */}
      <MenuItem label={"Reported Comments"} to={"reported-comments"} icon={GoReport} end></MenuItem>
    </div>
  );
};

export default AdminMenu;
