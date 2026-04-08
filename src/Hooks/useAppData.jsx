import React, { useEffect, useState } from "react";

const useAppData = () => {
  const [fetchData, setFetchData] = useState([]);

  useEffect(() => {
    const fetchDataFromPublic = async () => {
      const res = await fetch("data.json");
      const data = await res.json();
      setFetchData(data);
    };
    fetchDataFromPublic();
  }, []);

  return [fetchData];
};

export default useAppData;
