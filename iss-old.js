// /**
//  * Makes a single API request to retrieve the user's IP address.
//  * Input:
//  *   - A callback (to pass back an error or the IP string)
//  * Returns (via Callback):
//  *   - An error, if any (nullable)
//  *   - The IP address as a string (null if error). Example: "162.245.144.188"
//  */

// const request = require('request');

// const fetchMyIP = function(callback) {
//   // use request to fetch IP address from JSON API
//   const url = 'https://api.ipify.org?format=json';

//   request(url, (error, response, body) => {
//     if (error) {
//       callback(error, null);
//       return;
//     }

//     if (response.statusCode !== 200) {
//       const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
//       callback(Error(msg), null);
//       return;
//     }

//     const data = JSON.parse(body);
//     const ip = data.ip;
//     callback(null, ip);
//   });
// };


// const fetchCoordsByIP = function(ip, callback) {
//   const url = `http://ipwho.is/${ip}`;

//   request(url, (error, response, body) => {
//     if (error) {
//       callback(error, null);
//       return;
//     }

//     if (response.statusCode !== 200) {
//       const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
//       callback(Error(msg), null);
//       return;
//     }

//     const data = JSON.parse(body);

//     if (!data.success) {
//       const message = `Success status was ${data.success}. Server message says: ${data.message} when fetching for IP ${data.ip}`;
//       callback(Error(message), null);
//       return;
//     }

//     const latitude = data.latitude;
//     const longitude = data.longitude;
//     const coords = {latitude, longitude};

//     callback(null, coords);
//   });
// };


// const fetchISSFlyOverTimes = function(coords, callback) {
//   const url = `https://iss-flyover.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`;

//   request(url, (error, response, body) => {
//     if (error) {
//       callback(error, null);
//       return;
//     }

//     if (response.statusCode !== 200) {
//       callback(Error(`Status Code ${response.statusCode} when fetching ISS pass times: ${body}`), null);
//       return;
//     }

//     const data = JSON.parse(body);
//     const flyOver = data.response;

//     callback(null, flyOver);
//   });


// };

// module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes };