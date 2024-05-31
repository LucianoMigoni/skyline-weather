import { useState, useEffect } from 'react'
import './App.css'

import { ProvideLocation } from './providers/ProvideLocation.jsx'
import LocationSelector from './components/LocationSelector.jsx'

import WeatherApp from './components/WeatherApp.jsx'

import Navbar from './components/Navbar'


function App() {

  const [locationCountry, setLocationCountry] = useState(null);
  const [locationCity, setLocationCity] = useState(null);

  return (
    <ProvideLocation>
      <Navbar />
      <div className='body-container'>
        <div className='body'>
          <LocationSelector setLocationCountry={setLocationCountry} setLocationCity={setLocationCity} />
          <WeatherApp locationCountry={locationCountry} locationCity={locationCity} />
        </div>
      </div>
    </ProvideLocation>
  )
}

export default App
