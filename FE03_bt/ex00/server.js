// // import { Octokit } from 'octokit';
const { Octokit } = require('octokit');
require('dotenv').config();

const octokit = new Octokit({ auth: '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' });

 octokit.request('GET /user/issues', {
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.error(error);
});
