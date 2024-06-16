/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import LoadingSpinner from "../components/Common/LoadingSpinner";
import useRole from "../hooks/useRole";

const UserRoute = ({ children }) => {
  const { role, isPending } = useRole();

  if (isPending) return <LoadingSpinner />;
  if (role === "user") return children;

  return <Navigate to="/dashboard" />;
};

export default UserRoute;
