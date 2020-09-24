const args = process.argv.slice(2);
const request = require('request');
const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + args[0];
request(url, (error, response, body) => {
  if (error) {
    console.log('Failed to make request');
    process.exit;
  }
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log('Breed request not found');
  } else
    console.log(data[0].description);
});
