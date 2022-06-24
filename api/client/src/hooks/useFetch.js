import { axiosInstance } from "../config";
import { useEffect } from "react";
import { useState } from "react";

const useFetch = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const { balance, equity, currency, marketwatchTime } = data;

  // query server for data function
  const getData = async () => {
    setLoading(true);
    const response = await axiosInstance.get("/api");
    const result = response.data;
    setData(result[0]);
    setLoading(false);
    console.log(data);
  };

  useEffect(() => {
    getData(); // fetch api and get data on initial render
    // fetch api every 5mins
    const interval = setInterval(() => {
      console.log("interval starts");
      getData();
    }, 300000);
    return () => clearInterval(interval); // cleanup function
  }, []);
  return { loading, balance, equity, currency, marketwatchTime };
};

export default useFetch;
