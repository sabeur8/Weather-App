import { useState } from 'react';
import './App.css';


function App() {
  const [city,setCity] = useState("");
  const [weather,setWeather] = useState("weather");
  const [humidity,setHymidity] = useState("");
  const [temp,setTemp] = useState("");
  const [wind,setWind] = useState("");

  const handleChange = (e) => {
    setCity(e.target.value);
  }

  const apiKey = "ecd160b9905d4ae007f35a7c0015e5e2"
  const apiUrl =" https://api.openweathermap.org/data/2.5/weather?&units=metric"
  
  async function checkWeather(){

    try {
      const response = await  fetch(apiUrl +  `&q=${city}` +`&appid=${apiKey}` );
      let data = await response.json();
      
      setHymidity(data.main.humidity);
      setWeather(data.weather[0].main)
      setTemp(data.main.temp);
      setWind(data.wind.speed);
      return data;
    } catch(error)  {
      console.error('Error:', error);
  };
    
    }
    

  




  
  return (
    <div>
      <div class="card">
      <div class="search">
        <input type="text" onChange={handleChange} placeholder="enter city name " spellCheck="false"/>
        <button onClick={checkWeather}> <img src ="images/search.png "/> </button>
      </div>
      <div class="weather">
        <img src={`images/${weather}.png`} class="weather-icon"/>
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
            <img src='images/wind.png'/>
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
