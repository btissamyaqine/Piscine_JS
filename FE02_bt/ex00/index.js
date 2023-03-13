const {axios} = require('axios');

const options = {
  method: 'GET',
  url: 'https://api.notion.com/v1/users',
  params: {page_size: '100'},
  headers: {accept: 'application/json', 'Notion-Version': '2022-06-28'}
};

axios
  ?.request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });