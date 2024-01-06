import './App.css';
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { fetchWeatherInfo } from './redux/slices/weatherSlice';
import { useState, useEffect } from 'react';
import WeatherCard from './WeatherCard';

function App() {

  const dispatch = useDispatch()

  const [location, setLocation] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log("position ", position);
      dispatch(fetchWeatherInfo(`${position.coords.latitude},${position.coords.longitude}`))
    }, () => {
      console.log("Error while getting the position");
    });
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        Weather Application
      </header>
      <section className="App-section">
        <div className='App-input'>
          <TextField id="outlined-basic" label="Location" variant="outlined" value={location} onChange={(e) => setLocation(e.target.value)} sx={{ padding: '0px', margin: '5px', height: '50px' }} />
          <Button size="large" variant="contained" onClick={() => dispatch(fetchWeatherInfo(location))} sx={{  margin: '5px', height: '50px' }} >Search</Button>
        </div>
        <WeatherCard />
      </section>
    </div>
  );
}

export default App;
