const request = require("request");


const fetchBreedDescription = function(breedName, callback) {
let urlLink = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
request(urlLink, (err, response, body) => {
if (!err) {
const data = JSON.parse(body);
if (body.length <= 2 || breedName !== data[0].name) {
callback(breedName, null);
} else {
callback(null, data[0].description);
}
} else {
callback(err);
}
});
};



module.exports = { fetchBreedDescription };
