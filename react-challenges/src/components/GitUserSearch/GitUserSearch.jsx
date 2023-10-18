import React, { useState } from "react";
import Task from "../Task/Task";

const GitHubUserSearch = () => {
  const [username, setUsername] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [userInfo, setUserInfo] = useState("");

  const getUserInfo = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      setImageUrl(data.avatar_url);
      setUserInfo(data.bio);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getUserInfo();
  };

  const filteredData = data.filter(
    (item) => item.title === "GitHub User Search"
  );

  return (
    <div>
      <Task filteredData={filteredData} />
      <h1>GitHub User Search</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Enter GitHub username"
        />
        <button type="submit">Search</button>
      </form>

      <img src={imageUrl} alt="User Avatar" />
      <div>{userInfo}</div>
    </div>
  );
};

export default GitHubUserSearch;
