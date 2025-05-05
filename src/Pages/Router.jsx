import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Home from "./Home";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ErrorPage from "./ErrorPage";
import ContactUs from "./Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        Component: Home,
      },
    ],
  },
  {
    path: "/signin",
    Component: SignIn,
  },
  {
    path: "/signup",
    Component: SignUp,
  },
  {
    path: "/contact",
    Component: ContactUs,
  },
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
