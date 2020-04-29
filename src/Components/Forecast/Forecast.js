import React, { useState } from 'react';
import Conditions from '../Conditions/Conditions';

const Forecast = () => {
   
   let [responseObj, setResponseObj] = useState({});
   let [city, setCity] = useState('seattle');
   let [unit, setUnit] = useState('imperial');

   const uriCity = encodeURIComponent(city);

   function getForecast(e) {
   		e.preventDefault();
      // weather data fetch function will go here        
		fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriCity }`, {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
			"x-rapidapi-key": process.env.REACT_APP_API_KEY
		}
		})		
		.then((response) => response.json())				
		.then((response) => {						
			setResponseObj(response);	
			console.log(response);		
			console.log(`${uriCity}`)
		})
		.catch((err) => {
			console.log(err);
		});   
   }
   return (       
       <div>
           <h2>Current Weather Conditions</h2>          
           <form onSubmit={getForecast}>
				<input
			    type="text"
			    placeholder="Enter City"
			    maxLength="50"
			    value={city}
			    onChange={(e) => setCity(e.target.value)}
			    />
				<label>
				    <input
				        type="radio"
				        name="units"
				        checked={unit === "imperial"}
				        value="imperial"
				        onChange={(e) => setUnit(e.target.value)}
				        />
				    Fahrenheit
				</label>
				<label>
				    <input
				        type="radio"
				        name="units"
				        checked={unit === "metric"}
				        value="metric"
				        onChange={(e) => setUnit(e.target.value)}
				        />
				    Celcius
				</label>
				<button type="submit" >Get Forecast</button>
			</form>
           <Conditions responseObj={responseObj} units ={unit=='imperial'?'kelvin':'degree' }/>
       </div>
   )
}

export default Forecast;