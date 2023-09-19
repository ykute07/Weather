import React, { useState, useEffect } from 'react'



export default function Homepage() {
    const [data, setData] = useState([]);
    const url = "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={06f9673b97a3138a476f684f0dede3b6}";
    const fetchApi = () => {
        return fetch(url)
            .then((res) => res.json())
            .then((d) => setData(d))
    }

    useEffect(() => {
        fetchApi();
    },[]);
    console.log(data);
  return (
    <div>

        
    </div>
  )
}
