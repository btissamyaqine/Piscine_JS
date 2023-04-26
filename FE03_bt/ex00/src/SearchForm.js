import React, { useState } from "react";

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

export default SearchForm;
