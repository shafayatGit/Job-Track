import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Home from "./Home";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ErrorPage from "./ErrorPage";
import ContactUs from "./Contact";
import CardsDetails from "../Components/CardsDetails";
import PrivateRoute from "../Provider/PrivateRoute";
import Profile from "../Components/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        Component: Home,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/signup",
        Component: SignUp,
      },
      {
        path: "/signin",
        Component: SignIn,
      },
      {
        path: "/contact",
        Component: ContactUs,
      },

      {
        path: "/*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
  {
    path: "/company-details/:id",
    hydrateFallbackElement: (
      <span className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></span>
    ),
    element: (
      <PrivateRoute>
        <CardsDetails></CardsDetails>
      </PrivateRoute>
    ),
    loader: () => fetch("/data.json"),
  },
  {
    path: "/profile",
    element: (
      <PrivateRoute>
        <Profile></Profile>
      </PrivateRoute>
    ),
  },
]);

export default router;
