import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  const apiKey = "ecd160b9905d4ae007f35a7c0015e5e2"
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q={city name}units=metric"
  
  async function checkWeather(){
    const response = fetch(apiUrl + `&appid=${apiKey}`);
    let data = await response.json();
    return data ;
  }
  const [city,setCity] = useState("");
  const handleChange = (e) => {
    setCity(e.target.value);
  }

  const [weather,setWeather] = useState("");
  const [humidity,setHymidity] = useState("");
  const [temp,setTemp] = useState("");
  const [wind,setWind] = useState("");


  
  return (
    <div>
      <div class="card">
      <div class="search">
        <input type="text" onChange={handleChange} placeholder="enter city name " spellcheck="false"/>
        <button onClick={checkWeather}> <img src ="images/search.png "/> </button>
      </div>
      <div class="weather">
        <img src={'images/{weather}.png'} class="weather-icon"/>
        <h1 className='temp'> {temp}°c</h1>
        <h2 className='city'> {city}</h2>
        <div className='details'>
          <div className='col'>
            <img src='images/humidity.png'/>
            <div>
              <p className='humidity'>{humidity} %</p>
              <p>humidity</p>
            </div>
          </div>
          <div className='col'>
            <img src='wind.png'/>
            <div>
              <p className='wind'>{wind} kmh</p>
              <p>wind speed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
