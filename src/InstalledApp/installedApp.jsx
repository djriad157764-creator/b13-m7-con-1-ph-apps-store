import { createContext, useState } from "react";


export const InstallAppArray = createContext();

export const InstallAppsDataProvider = ({ children }) => {
  const [installAppData, setInstallAppData] = useState([]);
  const data = [installAppData, setInstallAppData];

  return (
    <InstallAppArray.Provider value={data}>{children}</InstallAppArray.Provider>
  );
};
