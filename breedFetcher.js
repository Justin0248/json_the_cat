request = require('request');
const fetchBreedDescription = function(breed, callback) {
  let url = 'https://api.thecatapi.com/v1/breeds/search?q=';
  url += breed;
  request.get(url, (error, response, body) => {
    if (error) {
      callback(error);
      return;
    }
    const data = JSON.parse(body);
    if (!data[0]) {
      callback('Sorry, we cannot find the breed you are looking for please try again.');
    } else {
      callback(null, data[0].description);
    }
  });

};


module.exports = {fetchBreedDescription};