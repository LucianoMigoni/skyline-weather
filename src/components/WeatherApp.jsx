import React, { useEffect, useState } from 'react';
import { createClient } from 'pexels';
import '../styles/weatherapp.scss';

const key = 'b6e12d00924f4dabb8021345243005';

const client = createClient('w0EDPActUOgwgqD3KsRFosdmSrNbJlyeU0OoL4WMoDliN3OkM3gWluh6');

const WeatherApp = ({ locationCountry, locationCity }) => {
    const [weatherConditions, setWeatherConditions] = useState(null);
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${locationCity}&lang=en&units=metric`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setWeatherConditions(data);
            } catch (err) {
                console.error(err);
            }
        };

        const fetchRandomPhoto = async () => {
            try {
                const photos = await client.photos.search({ query: `${locationCountry}`, per_page: 1 });
                const randomPhoto = photos?.photos?.[0];
                if (randomPhoto) {
                    setImageUrl(randomPhoto.src.medium);
                }
            } catch (err) {
                console.error(err);
            }
        };

        if (locationCountry && locationCity) {
            fetchData();
            fetchRandomPhoto();
        }
    }, [locationCountry, locationCity]);

    return (
        <section className='weatherapp-section'>
            {weatherConditions ? (
                <>
                    <div className="pt-1">
                        <h1 className={weatherConditions.location.country.length > 13 ? 'small-text' : ''}>{weatherConditions.location.country}</h1>
                        <h2 className={weatherConditions.location.name.length > 13 ? 'small-text' : ''}>{weatherConditions.location.name}</h2>
                    </div>
                    <div className="pt-2">
                        <h1>{weatherConditions.current.temp_c}°C</h1>
                    </div>
                    <div className="pt-3">
                        <p>{weatherConditions.current.condition.text}</p>
                    </div>
                    <div className="pt-4">
                        <img src={weatherConditions.current.condition.icon} alt="weather condition" />
                    </div>
                    <div className="pt-5" style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', width: '100%' }}>
                    </div>
                    <div className="pt-6">
                        <h2>{weatherConditions.current.windchill_c}°C</h2>
                        <h3>Wind chill</h3>
                    </div>
                    <div className="pt-7">
                        <h3>Humidity</h3>
                        <h1>{weatherConditions.current.humidity}%</h1>
                    </div>
                    <div className="pt-8">
                        <h2>Wind</h2>
                        <h3>{weatherConditions.current.wind_mph} mph</h3>
                    </div>
                </>
            ) : (
                <p></p>
            )}
        </section>
    );
};

export default WeatherApp;
