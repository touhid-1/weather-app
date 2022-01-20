import React, { Component } from 'react'
import './App.css';
import Clock from 'react-live-clock';
import WeatherInfo from './weatherInfo';

class App extends React.Component {
  state = {
    latitude: "NA",
    longitude: "NA",
    temp: "NA",
    locationName:"NA",
    country: "NA",
    weatherName:"NA",
    humidity: "NA",
    visibility:"NA",
    windSpeed: "NA",
    feelsLike:"NA",
    maxTemp:"NA"
  }
  
  componentDidMount(){
    if(navigator.geolocation){
      this.getPositions()
    .then((position) => {
      console.log(position.coords.latitude);
      // this.setState({latitude: position.coords.latitude})
      this.getWeather(position.coords.latitude,position.coords.longitude)
    })
    }
  };
  getPositions = () => {
    return new Promise(function(resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };
  getWeather = async (latitude, longitude) => {
    const api = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=2603551d65750c98bc815b7d2a7955f1`
    );
    const data = await api.json();
    console.log(data);
    this.setState(
      {
        temp:Math.round(data.main.temp),
        locationName:data.name,
        country:data.sys.country,
        weatherName: data.weather[0].main,
        humidity:data.main.humidity,
        visibility:data.visibility,
        windSpeed: data.wind.speed,
        feelsLike:data.main.feels_like,
        maxTemp:data.main.temp_max
      }
    )
    
  }
  render(){
    return (
      <React.Fragment>
        <div className=" d-flex justify-content-center py-5 mt-5">
          <div className="colo-6 app-bg d-flex flex-wrap py-3">
            <div className= "col-12">
              <h2 className="text-white m-0 location">{this.state.locationName}</h2>
              <p className="text-white">{(this.state.country)}</p>
            </div>
            <div className="col-12 mt-auto d-flex">
              <div className="my-auto">
                <h2 className="text-white m-0">
                <Clock format={'HH:mm:ss'} ticking={true}/> 
                </h2>
                <p className="text-white m-0">
                <Clock format={'dddd, MMMM DD, YYYY'} date={''} /> 
                </p>
              </div>
              <div className="ml-auto">
                <h1 className="text-white temp">{(this.state.temp)}°C</h1>
              </div>
            </div>
          </div>
          <WeatherInfo weatherName={this.state.weatherName} humidity={this.state.humidity} visibility={this.state.visibility} windSpeed={this.state.windSpeed} feelsLike={this.state.feelsLike} maxTemp={this.state.maxTemp} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
