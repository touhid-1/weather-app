import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';

const defaults = {
    icon: 'CLEAR_DAY',
    color: 'white',
    size: 110,
    animate: true
  };
  
function WeatherInfo(props){
    var weatherIcon;
    switch(props.weatherName){
        case "Haze" :
        weatherIcon = 'FOG';
        break;
        case "Clear Night":
        weatherIcon = 'CLEAR_NIGHT';
        break;
        case "Clouds":
        weatherIcon = 'PARTLY_CLOUDY_DAY';
        break;
        case "Cloudy Night":
        weatherIcon = 'PARTLY_CLOUDY_NIGHT';
        break;
        case "Rain":
        weatherIcon = 'Rain';
        break;
        case "Thunderstorm":
        weatherIcon = 'SLEET';
        break;
        case "Snowing":
        weatherIcon = 'SNOW';
        break;
        case "Windy":
        weatherIcon = 'WIND';
        break;
        case "Foggy":
        weatherIcon = 'FOG';
        break;
        default:
        weatherIcon = 'CLEAR_DAY';

    }
    return (
        <React.Fragment>
            <div className="col-3 side-bg text-center py-3">
                <ReactAnimatedWeather
                    icon={weatherIcon}
                    color={defaults.color}
                    size={defaults.size}
                    animate={defaults.animate}
                />
                <h2 className="text-white py-2 pt-3">{props.weatherName}</h2>
                <div className="d-flex flex-wrap mt-4">
                    <div className="d-flex col-12">
                        <div className="text-white py-2 font-big">Humidity</div>
                        <div className="text-white ml-auto font-big">{props.humidity}%</div>
                    </div>
                    <div className="d-flex col-12">
                        <div className="text-white py-2 font-big">Visiblity</div>
                        <div className="text-white ml-auto font-big">{props.visibility} mi</div>
                    </div>
                    <div className="d-flex col-12 py-2">
                        <div className="text-white font-big">Wind Speed</div>
                        <div className="text-white ml-auto font-big">{props.windSpeed} Km/h</div>
                    </div>
                    <div className="d-flex col-12 py-2">
                        <div className="text-white font-big">Feels Like</div>
                        <div className="text-white ml-auto font-big">{props.feelsLike}°C</div>
                    </div>
                    <div className="d-flex col-12 py-2">
                        <div className="text-white font-big">Max Temp</div>
                        <div className="text-white ml-auto font-big">{props. maxTemp}°C</div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default WeatherInfo;


