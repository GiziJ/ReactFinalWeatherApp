import React from "react";
import useWeather from "../hooks/useWeather";
import useLocalStorage from "../hooks/useLocalStorage";

export default function Home() {
  const [city, setCity] = useLocalStorage("city", "Tbilisi");
  const { data, loading, error } = useWeather(city);

  return (
    <div className="home">
      <h1>ამინდი ეხლა</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="ქალაქის სახელი"
      />

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {data && (
        <div>
          <h2>{data.name}</h2>
          <p>{data.weather[0].description}</p>
          <p>🌡 {data.main.temp}°C</p>
          <p>💧 ტენიანობა: {data.main.humidity}%</p>
        </div>
      )}
    </div>
  );
}
