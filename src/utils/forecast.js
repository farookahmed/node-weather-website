const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=bc9af5e96d54fb6bc57a4efa478be25f&query=" +
    latitude +
    "," +
    longitude +
    "&units=m";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("unable to connect weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          ". it is currently " +
          body.current.temperature +
          " degress celsius.  It feels like " +
          body.current.feelslike +
          " degress celsius."
      );
    }
  });
};

module.exports = forecast;
