import React, { useState } from "react";
// import SearchForm from "./SearchForm";
import { Octokit } from "@octokit/rest";

function App() {
  const [repos, setRepos] = useState([]);

  const octokit = new Octokit({auth: process.env.ACCESS_TOKEN});

  async function searchRepos(repoName) {
    const response = await octokit.request('GET /search/issues',{
      q: repoName,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    });
    console.log(response.data.items) ;

    return response.data.items;
  }

  const handleSearch = async (repoName) => {
    const results = await searchRepos(repoName);
    setRepos(results);
  };
  function SearchForm({ Submit }) {
    const [repoName, setRepoName] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      Submit(repoName);
    };
  
    const handleChange = (e) => {
      setRepoName(e.target.value);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="repoName">Enter Repository Name: </label>
        <input
          type="text"
          id="repoName"
          value={repoName}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
  
  return (
    <div>
      <h1>GitHub Repository Search</h1>
      <SearchForm Submit={handleSearch} />
          <ul>             
              {repos?.map((repo) => (
                <li key={repo.id}>{repo.title}</li>
              ))}
          </ul>
    </div>
  );
}

export default App;
