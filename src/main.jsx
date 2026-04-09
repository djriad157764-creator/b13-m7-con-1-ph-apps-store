import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Root from "./Root/Root";
import { router } from "./Routes/Routes";
import { RouterProvider } from "react-router/dom";
import { InstallAppsDataProvider } from "./InstalledApp/installedApp";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <InstallAppsDataProvider>
      <RouterProvider router={router}></RouterProvider>
    </InstallAppsDataProvider>
  </StrictMode>,
);
