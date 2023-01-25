const request = require("request");

const forecast = (lat, long, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=a39f0459b2afb0bdba41ad90359deda7&query=${lat},${long}&units=f`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service...", undefined);
    } else if (body.error) {
      callback("Unable to find location...", undefined);
    } else {
      callback(
        undefined,
        `The weather in ${body.location.name} at ${body.current.observation_time} Zulu time is ${body.current.weather_descriptions}. The temperature is ${body.current.temperature} degrees Fahrenheit. The wind is blowing at ${body.current.wind_speed} mph from the ${body.current.wind_dir}. It feels like ${body.current.feelslike} degrees. `
      );
    }
  });
};

module.exports = forecast;
