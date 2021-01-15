import React, { Fragment } from 'react'


import wd from './Weather.module.css';


function WeatherData(props) {

    return (
        <div className={(typeof props.weather !== "undefined")
            ? (Math.ceil(props.weather.temp) <= 0)
                ? (Math.ceil(props.weather.temp) > 5)
                    ? (Math.ceil(props.weather.temp) >= 20)
                    : wd.winter
                : wd.summer
            : wd.spring}>
            <p>{props.city}, {props.con} </p>
            <img src={`http://openweathermap.org/img/w/${props.inf}.png`} alt="" />
            <p >
                {Math.ceil(props.weather.temp)} &#8451;
            </p>
            <div>
                <p>{props.desc}</p>

            </div>
            <div /* className={wd.temp} */>
                <span>
                    <p>Feels like:</p>
                    <p>{Math.ceil(props.how)} &#8451;</p>
                </span>
            </div>
        </ div >
    )
}


export default WeatherData;
