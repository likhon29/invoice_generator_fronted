"use client";
import React, { useEffect, useState } from "react";

import { getNyntaxApiUrl } from "@/helpers/config";
import fetchData from "@/utils/fetchData";
const HomePage = () => {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  console.log(getNyntaxApiUrl);
  useEffect(() => {
    const fetchDataAsync = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const fetchedCars = await fetchData(
          `https://exam-server-7c41747804bf.herokuapp.com/carsList`
        );
        setCars(fetchedCars);
      } catch (error) {
        console.error("Error fetching car data:", error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDataAsync();
  }, []);

  console.log(cars);
  return (
    <div>
      <h1>Home Page</h1>
      <p></p>
    </div>
  );
};

export default HomePage;
