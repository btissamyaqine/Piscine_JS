
import fetch from 'cross-fetch';
const api_url = 'https://jsonplaceholder.typicode.com/comments';
async function fetch_post(url) {
  const response = await fetch(url)

  var data = await response.json()
  console.log(data)
}
fetch_post(api_url)




// function getPosts(event) {
//     fetch(`https://jsonplaceholder.typicode.com/posts?userId${event.target.id}`)
//         .then(response => response.json())
//         .then(response => {
//          console.log(response)
//       //loop through response and  render  data 
//     })
        
// }
