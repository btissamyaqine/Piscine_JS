
// import axios from 'axios'
import fetch from 'cross-fetch';
// Promise.all([
// 	fetch('https://jsonplaceholder.typicode.com/comments?postId=9'),
// 	fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
// ]).then(function (responses) {
// 	// Get a JSON object from each of the responses
// 	return Promise.all(responses.map(function (response) {
// 		return response.json();
// 	}));
// }).then(function (data) {
//    data;
// 	// Log the data to the console
// 	// You would do something with both sets of data here
// 	console.log(data[0].name)
//   // i try to have just names but show indefined
// 	// console.log(data.name);

// }).catch(function (error) {
// 	// if there's an error, log it
// 	console.log(error);
// });
const findAnyName = async() => {
	const urls = ['https://randomuser.me/api/', 'https://randomuser.me/api/'];
		try{
			let res = await Promise.all(urls.map(e => fetch(e)))
			let resJson = await Promise.all(res.map(e => e.json()))
			resJson = resJson.map(e => e.results[0].name.first)
			console.log(resJson)
		}catch(err) {
			console.log(err)
		}
	}
	findAnyName()