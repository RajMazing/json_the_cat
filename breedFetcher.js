const request = require("request");
const args = process.argv.slice(2);

const fs = require("fs");

request(
  `https://api.thecatapi.com/v1/breeds/search?q=${args}`,
  (error, response, body) => {
    if (error) {
      console.log("Request Failed");
    } else {
      console.log(response && response.statusCode);
    }
    const data = JSON.parse(body);
    // console.log(data);
    // console.log(typeof data);
    //console.log(data[0].description)

    if (data.length === 0) {
      console.log("The Breed doesn't exist");
    } else {
      console.log(data[0].description);
    }
  }
);

// console.log('error:', error); // Print the error if occurs
// console.log('statusCode:', response && response.statusCode); // Print the response's status code

// fs.writeFile('./index.html', body, (err) => {
//     //writes the data
//     if (err) {
//         console.error(err)
//         //returns error
//         return
//      }
//         console.log(`Downloaded andsaved ${body.length} bytes to ./index.html.`);
//       //file written successfully
//  });
