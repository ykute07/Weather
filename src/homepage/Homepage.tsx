import React, { useState, useEffect } from "react";

export default function Homepage() {
  const [data, setData] = useState([]);
  const [weatherData, setWeatherData] = useState(null);
  const getCordinates =
    "http://api.openweathermap.org/geo/1.0/direct?q=Hinganghat&limit=5&appid=06f9673b97a3138a476f684f0dede3b6";

  const weatherAPI = (latitude: any, longitude: any) =>
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=c0fbb9da044c0eab6065841ab218f734`;

  const fetchOpenWeatherMapData = () => {
    return fetch(getCordinates)
      .then((res) => res.json())
      .then((d) => {
        setData(d);
        if (d.length > 0) {
          const latitude = d[0].lat;
          const longitude = d[0].lon;
          fetchweatherAPI(latitude, longitude);
        }
      });
  };

  const fetchweatherAPI = (latitude: any, longitude: any) => {
    const url = weatherAPI(latitude, longitude);
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setWeatherData(d));
  };

  useEffect(() => {
    fetchOpenWeatherMapData();
  }, []);

  console.log(weatherData);

  return <div></div>;
}
