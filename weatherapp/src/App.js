import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [temp, setTemp] = useState("");
  const [desc, setDesc] = useState("");
  const [icon, setIcon] = useState("");
  const [isReady, setReady] = useState(false);

  useEffect(() => {
    fetch("https://api.openweathermap.org/data/2.5/weather?lat=14.6937&lon=17.4441&appid=VOTRE_CLE&units=metric")
      .then(result => result.json())
      .then(jsonresult => {
        setTemp(jsonresult.main.temp);
        setDesc(jsonresult.weather[0].main);
        setIcon(jsonresult.weather[0].icon);
        setReady(true);
      })
      .catch(err => console.error(err));
  }, []);

  if (isReady) {
    return (
      <div className="App">
        <p>Température : {temp} °C</p>
        <p>Description : {desc}</p>
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="Icône météo" />
      </div>
    );
  } else {
    return <div>Chargement en cours...</div>;
  }
}

export default App;
