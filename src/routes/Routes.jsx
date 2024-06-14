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
import AddPost from "../pages/Dashboard/User/AddPost";
import MyPosts from "../pages/Dashboard/User/MyPosts";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import ReportedComments from "../pages/Dashboard/Admin/ReportedComments";
import MyProfile from "../pages/Dashboard/MyProfile";
import MakeAnnouncement from "../pages/Dashboard/Admin/MakeAnnouncement";
import AllCommentsPage from "../pages/AllCommentsPage";

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
        element: (
          <PrivateRoute>
            <Membership />
          </PrivateRoute>
        ),
      },
      {
        path: "/post/:id",
        element: (
          <PrivateRoute>
            <SinglePost />
          </PrivateRoute>
        ),
      },
      {
        path: "/comments/:id",
        element: (
          <PrivateRoute>
            <AllCommentsPage />
          </PrivateRoute>
        ),
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
      {
        path: "manage-users",
        element: <ManageUsers />,
      },
      {
        path: "reported-comments",
        element: <ReportedComments />,
      },
      {
        path: "make-annoucement",
        element: <MakeAnnouncement />,
      },
    ],
  },
]);
export default router;
