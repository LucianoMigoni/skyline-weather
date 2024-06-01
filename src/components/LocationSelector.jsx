import React, { useState } from 'react';
import useProvideLocation from '../providers/ProvideLocation';
import { Select, Button } from '@chakra-ui/react';

import '../styles/locationselector.scss'

const LocationSelector = ({ setLocationCountry, setLocationCity }) => {
    const { locations } = useProvideLocation();
    const [selectedLocation, setSelectedLocation] = useState('');

    const handleLocationChange = (event) => {
        setSelectedLocation(event.target.value);
        console.log(selectedLocation)
    };

    const handleSearch = () => {
        const [selectedCountry, selectedCity] = selectedLocation.split(' - ');
        setLocationCountry(selectedCountry);
        setLocationCity(selectedCity)
    };

    return (
        <section className='location-container'>
            <label>Select The Location</label>
            <div className='location-search'>
            {locations && locations.length > 0 ? (
                <Select placeholder='Select option' value={selectedLocation} onChange={handleLocationChange}>
                    {locations.map((location, index) => (
                        <option value={`${location.country} - ${location.city}`} key={index}>{location.country} - {location.city}</option>
                    ))}
                </Select>
            ) : (
                <p>No locations available</p>
            )}
            <Button colorScheme="blue" onClick={handleSearch}>Search</Button>
            </div>
        </section>
    );
};

export default LocationSelector;
