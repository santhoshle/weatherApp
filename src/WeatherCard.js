import { CardContent, CardMedia } from '@mui/material';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';

function WeatherCard() {

    const weatherInfo = useSelector((state) => state.weatherInfo)

    if(!weatherInfo.location)
        return (
            <Card sx={{ minWidth: 275 }}>
                <CardContent style={{ display: 'flex', flexDirection: 'column'}}>
                    <Typography variant="h4" component="div">
                        Data not available
                    </Typography>
                </CardContent>
            </Card>
        )

    return (
        <Card style={{ display: 'flex'}}>
            <CardContent style={{ display: 'flex', flexWrap: 'wrap'}}>
                <div className='App-content-side'>
                    <CardMedia
                        component="img"
                        image={weatherInfo.weatherImg}
                        alt="Paella dish"
                    />
                    <Typography variant="h4" component="div">
                        {weatherInfo.weatherText}
                    </Typography>
                    <Typography variant="h3" component="div">
                        {weatherInfo.temperature}&#176;C
                    </Typography>
                
                </div>
                <div className='App-content-side'>
                    <Typography variant="h5" component="div">
                        Wind Gusts : {weatherInfo.wind} km/h
                    </Typography>
                    <Typography variant="h5" component="div">
                        Humidity : {weatherInfo.humidity}%
                    </Typography>
                    <Typography variant="h5" component="div">
                        Visibility : {weatherInfo.visibility} km
                    </Typography>
                    
                    <Typography variant="h4" component="div" style={{ flexGrow: 1, display:'flex', alignItems: 'flex-end', justifyContent: 'end' }}>
                        {weatherInfo.location}
                    </Typography>
                </div>
            </CardContent>
        </Card>
    )
}

export default WeatherCard;