
import fetch from 'cross-fetch';

var post;

// Call the API
fetch('https://jsonplaceholder.typicode.com/posts/1').then(function (response) {
	if (response.ok) {
		return response.json();
	} else {
		return Promise.reject(response);
	}
}).then(function (data) {

	// Store the post data to a variable
	post = data;

	// Fetch another API
	return fetch('https://jsonplaceholder.typicode.com/comments/' + data.userId);

}).then(function (response) {
	if (response.ok) {
		return response.json();
	} else {
		return Promise.reject(response);
	}
}).then(function (commentData) {
	console.log("Title: " + post.title);
	console.log("Body " + post.body);
  console.log("--------------")
  console.log("Commented by: " + commentData.name)
  console.log("Email: " + commentData.email)
  console.log("Body Comment: " + commentData.body)
  console.log("--------------")

}).catch(function (error) {
	console.warn(error);
});

