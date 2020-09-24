const {fetchBreedDescription} = require('./breedFetcher');
const breed = process.argv.slice(2);

fetchBreedDescription(breed, (error, description) => {
  if (error) {
    console.log('Failed to make request', error);
  } else {
    console.log(description);
  }
});

module.exports = breed;

