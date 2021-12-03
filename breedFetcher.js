const request = require("request");

const fs = require("fs");

const fetchBreedDescription = function(breedName, callback) {
  let url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    if (error || breedName === undefined) {
      if (error) callback(error, null);
      else callback(null, "Error: no name");
    }
    callback(null, JSON.parse(body).desc);
  });
};



module.exports = { fetchBreedDescription };
