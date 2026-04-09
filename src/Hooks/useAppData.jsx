import React, { useEffect, useState } from "react";

const useAppData = () => {
  const [fetchData, setFetchData] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const fetchDataFromPublic = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();
      setTimeout(() => {
        setFetchData(data);
        setLoader(false);
      }, 500);
    };
    fetchDataFromPublic();
  }, []);

  return [fetchData, loader];
};

export default useAppData;
