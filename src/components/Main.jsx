import React, { useState } from 'react'
import axios from 'axios';
import WeatherSearch from './WeatherSearch';
import WeatherData from './WeatherData';
import Preloader from './Preloader/Preloader';
import { connect } from 'react-redux';
import { ToggleIsFetching } from '../redux/weatherReducer';


function Main(props) {

    const [weather, setWeather] = useState();

    const [city, setCity] = useState();

    const [inf, setInf] = useState();

    const [desc, setDesc] = useState();

    const [con, setCon] = useState();

    const [getWind, setGetwind] = useState();

    const [how, setHow] = useState();

    const [humidity, setHumidity] = useState();

    const api_call = async (event) => {

        event.preventDefault();

        const location = event.target.elements.location.value;

        props.ToggleIsFetching(true);


        const API_KEY = "2276b26b72c2eec1c76727aaea79c4f1";

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;

        axios.get(url).then(response => {

            const allresponse = response.data;
            setWeather(allresponse.main);
            setCity(allresponse.name);
            setInf(allresponse.weather[0].icon);
            setDesc(allresponse.weather[0].description);
            setCon(allresponse.sys.country);
            setGetwind(allresponse.wind.speed);
            setHow(allresponse.main.feels_like);
            setHumidity(allresponse.main.humidity);
            props.ToggleIsFetching(false);
        }).catch((error) => {
            const location = event.target.elements.location.value;
            alert(error + ' ' + location + ' ' + 'not found');
            props.ToggleIsFetching(false);
            

        });







    }

    return (

        <div>
            <WeatherSearch api_call={api_call} />
            {
                props.isFetching ? <Preloader /> : weather
                    &&
                    <WeatherData
                        weather={weather}
                        city={city}
                        inf={inf}
                        desc={desc}
                        con={con}
                        getWind={getWind}
                        how={how}
                        humidity={humidity}

                    />
            }

        </div>

    )

}
const mapStateToProps = (state) => {
    return {
        isFetching: state.Weather.isFetching
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        ToggleIsFetching: (isFetching) => {
            dispatch(ToggleIsFetching(isFetching));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);
