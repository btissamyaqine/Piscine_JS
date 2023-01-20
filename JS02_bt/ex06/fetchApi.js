
// import axios from 'axios'
import fetch from 'cross-fetch';
Promise.all([
	fetch('https://jsonplaceholder.typicode.com/comments?postId=9'),
	fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
]).then(function (responses) {
	// Get a JSON object from each of the responses
	return Promise.all(responses.map(function (response) {
		return response.json();
	}));
}).then(function (data) {
   data;
	// Log the data to the console
	// You would do something with both sets of data here
	console.log(data)
  // i try to have just names but show indefined
	// console.log(data.name);

}).catch(function (error) {
	// if there's an error, log it
	console.log(error);
});
