
import Root from "../Root/Root";
import { Children } from "react";
import Installation from "../Page/Installation/Installation";
import Apps from "../Page/Apps/Apps";
import HomePage from "../Page/Home/HomePage/HomePage";
import AppDetails from "../Page/AppDetails/AppDetails";
import NotFound from "../Page/NotFound/NotFound";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "apps", Component: Apps },
      { path: "installation", Component: Installation },
      { path: "apps/:id", Component: AppDetails },
    ],
    errorElement: <NotFound />,
  },
]);
