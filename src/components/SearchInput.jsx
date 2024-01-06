import React from 'react'
// icons
import { PiMapPinLineBold } from "react-icons/pi";
import { RiSearchLine } from "react-icons/ri";
// Context
import { useWeatherContext } from '../context/WeatherProvider ';


const SearchInput = () => {

    const { city, setCity, fetchWeather } = useWeatherContext();

    const submitHandler = (e) => {
        e.preventDefault();

        fetchWeather();
    }




    return (
        <form className='form-input' onSubmit={(e) => submitHandler(e)}>
            <div className='input-container'>
                <PiMapPinLineBold />
                <input type='text' placeholder='Enter your location..' onChange={(e) => setCity(e.target.value)} value={city} />
            </div>
            <button className='input-button' onClick={(e) => submitHandler(e)}>
                <RiSearchLine />
            </button>
        </form>
    )
}

export default SearchInput