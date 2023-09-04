import React from 'react'

function Weather({temperature, conditions}) {
  
  const Weathercolor = temperature > 20 ? 'red' : 'blue';
  return (
    <div>
        <h2>Current Weather</h2>
        <p>
            Temperature: <span style = {{color: Weathercolor}}>{temperature} degrees</span>
        </p>
        <p>Weather Conditions: {conditions}</p>
    </div>
  )
}

export default Weather