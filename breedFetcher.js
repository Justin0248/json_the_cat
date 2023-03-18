request = require('request');
let search = process.argv.slice(2);
search = search.toString();
let url = 'https://api.thecatapi.com/v1/breeds/search?q=';
url += search;

request.get(url, (error, response, body) => {
  if (error) {
    console.log('error', error);
    return;
  }
  const data = JSON.parse(body);
  if (!data[0]) {
    console.log('Sorry, we cannot find the breed you are looking for please try again.');
  } else {
    console.log(data[0].description);
  }
});