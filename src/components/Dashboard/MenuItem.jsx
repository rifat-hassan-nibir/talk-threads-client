/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const MenuItem = ({ to, label, icon: Icon }) => {
  return (
    <div>
      <NavLink
        to={to}
        end
        className={({ isActive }) =>
          `flex items-center px-4 py-2 my-5 transition-colors rounded duration-300 transform  hover:bg-gray-100 hover:text-gray-700 ${
            isActive ? "bg-white  text-gray-700" : "text-white"
          }`
        }
      >
        <Icon className="w-5 h-5" />

        <span className="mx-4 font-medium">{label}</span>
      </NavLink>
    </div>
  );
};

export default MenuItem;
