import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [temp, setTemp] = useState("");
  const [desc, setDesc] = useState("");
  const [icon, setIcon] = useState("");
  const [main, setMain] = useState("");
  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");
  const [name, setName] = useState("");
  const [isReady, setReady] = useState(false);

  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [theme, setTheme] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "latitude") {
      setLatitude(value);
    } else if (name === "longitude") {
      setLongitude(value);
    }
  };

  const handleThemeChange = (temperature) => {
    if (temperature >= 0 && temperature <= 19) {
      setTheme("theme-blue");
    } else if (temperature > 19 && temperature <= 30) {
      setTheme("theme-orange");
    } else if (temperature > 30 && temperature <= 50) {
      setTheme("theme-red");
    } else {
      setTheme("theme-default");
    }
  };

  const updateWeather = () => {
    if (latitude && longitude) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=25867e1ecdb4c8f03b0c903fda34b7c4&units=metric`
      )
        .then((result) => result.json())
        .then((jsonresult) => {
          setTemp(jsonresult.main.temp);
          setDesc(jsonresult.weather[0].main);
          setIcon(jsonresult.weather[0].icon);
          setMain(jsonresult.weather[0].main);
          setSunrise(jsonresult.sys.sunrise);
          setSunset(jsonresult.sys.sunset);
          setName(jsonresult.name);
          setReady(true);
          handleThemeChange(jsonresult.main.temp);
        })
        .catch((err) => {
          console.error(err);
          alert("Erreur lors de la récupération des données météorologiques. Veuillez vérifier la console pour plus de détails.");
        });
    } else {
      alert("Veuillez saisir la latitude et la longitude.");
    }
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.error("Erreur lors de l'obtention de la position :", error);
          alert("Erreur lors de l'obtention de la position. Veuillez autoriser l'accès à la position.");
        }
      );
    } else {
      alert("La géolocalisation n'est pas prise en charge par ce navigateur.");
    }
  };

  useEffect(() => {
    handleThemeChange();
    getLocation();
  }, []);

  useEffect(() => {
    if (latitude && longitude) {
      updateWeather();
    }
  }, [latitude, longitude]);

  return (
    <div className="App">
      <div className="container">
        <div className={`left ${theme}`}>
          <div className="title">
            Mon application météo
          </div>
          {isReady ? (
            <>
              <p>Ville : {name}</p>
              <p>Température : {temp} °C</p>
              <p>Description : {desc}</p>
              <p>Main : {main}</p>
              <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="Icône météo" />
              <p>Lever du soleil : {new Date(sunrise * 1000).toLocaleTimeString()}</p>
              <p>Coucher du soleil : {new Date(sunset * 1000).toLocaleTimeString()}</p>
            </>
          ) : (
            <div>Chargement en cours...</div>
          )}
        </div>
        
        <div className="center">
        </div>
          
        <div className="right">
          <div>
            <label>Latitude :</label>
            <input
              type="text"
              name="latitude"
              value={latitude}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Longitude :</label>
            <input
              type="text"
              name="longitude"
              value={longitude}
              onChange={handleInputChange}
            />
          </div>
          <div className="button-container">
            <button className="button" onClick={updateWeather}>Appliquer</button>
          </div>
        </div>
      </div>
      <div className="signature">
        Réalisé par Diénaba Fily Bodiang
      </div>
    </div>
  );
}

export default App;
