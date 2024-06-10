import { useContext, useState } from "react";
import { GrLogout } from "react-icons/gr";
import { AiOutlineBars } from "react-icons/ai";
import { Link } from "react-router-dom";
import useRole from "../../hooks/useRole";
import UserMenu from "./Menus/UserMenu";
import AdminMenu from "./Menus/AdminMenu";
import { AuthContext } from "../../providers/AuthProvider";

const Sidebar = () => {
  const { logOut } = useContext(AuthContext);
  const [isActive, setActive] = useState(false);
  const { role } = useRole();
  console.log(role);

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Link to="/">
              <p>Talk Threads</p>
            </Link>
          </div>
        </div>

        <button onClick={handleToggle} className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200">
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-primary w-64 space-y-6 px-3 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0 transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <Link
              to="/"
              className="w-full hidden md:flex px-4 py-2 rounded justify-center items-center bg-white text-primary font-bold mx-auto"
            >
              <p>Talk Threads</p>
            </Link>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
              {role === "user" && <UserMenu></UserMenu>}
              {role === "admin" && <AdminMenu></AdminMenu>}
            </nav>
          </div>
        </div>

        <div>
          <hr />

          {/* Logout Button */}
          <button
            onClick={logOut}
            className="flex w-full items-center px-4 py-2 rounded mt-5 text-white hover:bg-gray-100   hover:text-gray-700 transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
