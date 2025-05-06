import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Home from "./Home";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ErrorPage from "./ErrorPage";
import ContactUs from "./Contact";
import CardsDetails from "../Components/CardsDetails";

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
    ],
  },
  {
    path: "/signin",
    Component: SignIn,
  },
  {
    path: "/company-details/:id",
    hydrateFallbackElement: (
      <span className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></span>
    ),
    Component: CardsDetails,
    loader: () => fetch("/data.json"),
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
