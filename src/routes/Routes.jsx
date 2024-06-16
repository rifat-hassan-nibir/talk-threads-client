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
import AdminRoute from "./AdminRoute";
import UserRoute from "./UserRoute";

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
        element: <SinglePost />,
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
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "add-post",
        element: (
          <PrivateRoute>
            <UserRoute>
              <AddPost />
            </UserRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "my-posts",
        element: (
          <PrivateRoute>
            <UserRoute>
              <MyPosts />
            </UserRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "manage-users",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManageUsers />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "reported-comments",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ReportedComments />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "make-annoucement",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <MakeAnnouncement />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default router;
