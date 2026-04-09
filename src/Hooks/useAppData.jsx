import { useEffect, useState } from "react";

const useAppData = () => {
  const [fetchData, setFetchData] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const fetchDataFromPublic = async () => {
      try {
      
        const res = await fetch("/data.json");

        if (!res.ok) throw new Error("Failed to fetch data");

        const data = await res.json();

     
        setTimeout(() => {
          setFetchData(data);
          setLoader(false);
        }, 500);
      } catch (err) {
        console.error("Error fetching data:", err);
        setLoader(false);
      }
    };

    fetchDataFromPublic();
  }, []);

  return [fetchData, loader];
};

export default useAppData;
