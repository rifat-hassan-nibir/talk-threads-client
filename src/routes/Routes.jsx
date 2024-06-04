import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import JoinUs from "../pages/JoinUs";
import Membership from "../pages/Membership";
import DashboardLayout from "../layouts/DashboardLayout";
import MyProfile from "../components/Dashboard/Common/MyProfile";
import AddPost from "../components/Dashboard/Common/AddPost";
import MyPosts from "../components/Dashboard/Common/MyPosts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/join-us",
        element: <JoinUs></JoinUs>,
      },
      {
        path: "/membership",
        element: <Membership></Membership>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        index: true,
        element: <MyProfile></MyProfile>,
      },
      {
        path: "add-post",
        element: <AddPost></AddPost>,
      },
      {
        path: "my-posts",
        element: <MyPosts></MyPosts>,
      },
    ],
  },
]);
export default router;
