import { createBrowserRouter } from "react-router-dom";
import { SignupForm } from "../pages/add";
import Home from "../pages/home";
import Root from "../pages/root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "add",
        element: <SignupForm />,
      },
    ],
  },
]);
