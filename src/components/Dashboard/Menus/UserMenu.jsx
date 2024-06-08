import { AiFillProfile } from "react-icons/ai";
import MenuItem from "../MenuItem";
import { FaPen } from "react-icons/fa";
import { FaUserPen } from "react-icons/fa6";

const UserMenu = () => {
  return (
    <div>
      {/* My Profile */}
      <MenuItem label={"My Profile"} to={""} icon={AiFillProfile} end></MenuItem>

      {/* Add Posts */}
      <MenuItem label={"Add Post"} to={"add-post"} icon={FaPen}></MenuItem>

      {/* My Posts */}
      <MenuItem label={"My Posts"} to={"my-posts"} icon={FaUserPen}></MenuItem>
    </div>
  );
};

export default UserMenu;
