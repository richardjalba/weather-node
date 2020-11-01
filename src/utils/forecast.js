const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=8a7da743f6de89646c9c3abbb6855d52&query=${latitude},${longitude}&units=f`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service.', undefined);
    } else if (body.error) {
      callback('Unable to find location.', undefined);
    } else {
      callback(
        undefined,
        `${body.current.weather_descriptions[0]} | It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} out.`
      );
    }
  });
};

module.exports = forecast;
