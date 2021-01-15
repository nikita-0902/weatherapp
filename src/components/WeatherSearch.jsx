import React from 'react'

import ws from './Weather.module.css';


function WeatherSearch(props) {
    return (
        <div className={ws.search__data}>

            <h1>WeatherApp</h1>

            <form onSubmit={props.api_call}>
                <input type="text" name="location" required />
                <button >Search</button>
            </form>
        </div>
    )
}

export default WeatherSearch;
