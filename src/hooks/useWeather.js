import { useState, useEffect } from "react";
import axios from "axios";

const useWeather = (city) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric&lang=ge`
        );
        setData(res.data);
      } catch (err) {
        setError(
          "შეცდომა! გადაამოწმე ქალაქის სახელი (გამოიყენე ინგლისური სახელები)."
        );
        setData(null);
      }
      setLoading(false);
    };
    if (city) fetchWeather();
  }, [city]);

  return { data, loading, error };
};

export default useWeather;
