import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import JoinUs from "../pages/JoinUs";
import Membership from "../pages/Membership";

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
]);
export default router;
