import React, { useEffect } from "react";

const Weathercard = ({
  temp,
  humidity,
  pressure,
  weathermood,
  name,
  speed,
  country,
  sunset,
  sunrise,
  visibility,
  feels_like,
  deg,
  msg
}) => {
  const [weatherState, setWeatheState] = React.useState("");
 console.log(msg);
  useEffect(() => {
      console.log(weathermood);
    if (weathermood) {
      switch (weathermood) {
        case "Clouds":
          setWeatheState("wi-day-cloudy");
          break;
        case "Haze":
          setWeatheState("wi-fog");
          break;
        case "Clear":
          setWeatheState("wi-day-cloudy-high");
          break;
        case "Mist":
          setWeatheState("wi-dust");
          break;
        case "Smoke":
            setWeatheState("wi-smoke");
            break;
        case "Fog":
            setWeatheState("wi-day-fog");
            break;
        case "Snow":
            setWeatheState("wi-snow");
            break;
        case "Rain":
            setWeatheState("wi-day-rain");
            break;
        default:
          setWeatheState("wi-day-sunny");
          break;
      }
    }
  }, [weathermood]);

  const getCurrentDate = () =>
{
    var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
    var now = new Date();
    var month = months[now.getMonth()];
    var day = now.getDate();
            
    let hours = now.getHours();
    let min = now.getMinutes();
            
    let period = "AM";
    if(hours>11)
    {
        period = "PM";
        if(hours>12)
            hours = hours - 12;
    }
    if(hours<10)
    {
        hours = "0"+hours;
    }
    if(min<10)
    {
        min = "0"+min;
    }
    // console.log(month+"/"+day);
    let temp = " "+day+" "+month.toUpperCase();
    return(temp);
};

  const getCurrentTime = () =>
{
    var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
    var now = new Date();
    var month = months[now.getMonth()];
    var day = now.getDate();
            
    let hours = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
            
    // console.log(hours+":"+min);
    let period = "AM";

    if(hours<10)
    {
        hours = "0"+hours;
    }
    if(min<10)
    {
        min = "0"+min;
    }
    if(sec<10)
    {
        sec = "0"+sec;
    }
    // console.log(month+"/"+day);
    let temp = hours+" : "+min+" : "+sec+"";
    return(temp);
};

setInterval(myTimer, 1000);

function myTimer() {
  document.getElementById('date').innerHTML = getCurrentDate()+"<br/>"+getCurrentTime();
}

  // converting the seconds into time
  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;

  sec = sunrise;
  date = new Date(sec * 1000);
  let timeRise = `${date.getHours()}:${date.getMinutes()}`;
  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
        
          <i className={`wi ${weatherState}`}><p style={{fontSize:"25px",color:"red"}} ><b id='err'>{msg}</b></p></i>
        </div>
        

        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}&nbsp;&deg;C</span>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <div className="description">
            <div className="weatherCondition">{weathermood}</div>
            <div className="place">
            {name}, {country}
            </div>
          </div>
        </div>

        <div className="date" id='date'>  </div>

        {/* our 4column section  */}
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunrise"}></i>
              </p>
              <p className="extra-info-leftside">
                {timeRise} <br />
                Sunrise
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
                {humidity} %<br />
                Humidity
              </p>
            </div>
          </div>

          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
                {pressure} Pa <br />
                Pressure
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className="extra-info-leftside">
                {speed} m/s<br />
                Speed
              </p>
            </div>
          </div>
        
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
                {timeStr} <br />
                Sunset
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-day-light-wind"}></i>
              </p>
              <p className="extra-info-leftside">
                {feels_like}&nbsp; &deg;C<br />
                Feels Like
              </p>
            </div>
          </div>

          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-day-fog"}></i>
              </p>
              <p className="extra-info-leftside">
                {visibility} <br />
                Visibility
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-day-rain-wind"}></i>
              </p>
              <p className="extra-info-leftside">
                {deg}&deg;<br />
                Degree
              </p>
            </div>
          </div>
        </div>

        
      </article>
    </>
  );
};

export default Weathercard;