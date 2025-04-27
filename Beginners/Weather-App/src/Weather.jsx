import React, { useState } from 'react';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const weatherDetail = async () => {
    if (!city) {
      alert('Enter City name');
      return;
    }
    try {
      const apiKey = 'fb51512dba97af9e16650a57a4310c4d';
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=metric`
      );
      const data = await response.json();
      if (data.cod === '404') {
        setError(`City not found`);
        setTimeout(() => {
          setError('');
        }, 1000);

        setCity('');
        setWeather(null);
      } else {
        setWeather(data);
        setCity('');
      }
    } catch (error) {
      setError(`Error Fetching City ${error}`);
    }
  };
  const enterBtn = (event) => {
    if (event.key === 'Enter') {
      weatherDetail();
    }
  };
  return (
    <div>
      <h2 style={{ padding: '1em 1em 0.8em', fontSize: '2.5em' }}>
        Weather Forecast
      </h2>
      <div className="searchBox">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter City Name"
          onKeyDown={enterBtn}
        ></input>
        <button type="submit" onClick={weatherDetail}>
          Search
        </button>
      </div>
      {error && (
        <h3 style={{ padding: '2em', fontSize: '2em' }}>
          {error}. Please try again !!
        </h3>
      )}
      {weather && (
        <div className="weatherBox">
          <h3>{weather.name}</h3>
          <p>{weather.weather[0].description}</p>
          <img
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          />
          <p>
            <strong>City:</strong> {weather.name}
          </p>
          <p>
            <strong>Country: </strong>
            {weather.sys.country}
          </p>
          <p>
            <strong>Temperature:</strong> {weather.main.temp} °C
          </p>
          <p>
            <strong>Feels Like:</strong> {weather.main.feels_like} °C
          </p>
        </div>
      )}
    </div>
  );
};

export default Weather;
