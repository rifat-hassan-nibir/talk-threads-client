import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Membership from "../pages/Membership";
import DashboardLayout from "../layouts/DashboardLayout";
import JoinUs from "../pages/Authentication/JoinUs";
import Register from "../pages/Authentication/Register";
import PrivateRoute from "./PrivateRoute";
import SinglePost from "../pages/SinglePost";
import Error404 from "../pages/Error404";
import MyProfile from "../pages/Dashboard/User/MyProfile";
import AddPost from "../pages/Dashboard/User/AddPost";
import MyPosts from "../pages/Dashboard/User/MyPosts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/join-us",
        element: <JoinUs />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/membership",
        element: <Membership />,
      },
      {
        path: "/post/:id",
        element: <SinglePost />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <MyProfile />,
      },
      {
        path: "add-post",
        element: <AddPost />,
      },
      {
        path: "my-posts",
        element: <MyPosts />,
      },
    ],
  },
]);
export default router;
