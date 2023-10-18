async function getUserInfo() {
  const username = document.getElementById("username").value;
  const url = `https://api.github.com/users/${username}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (response.ok) {
      const resultsDiv = document.getElementById("results");
      resultsDiv.innerHTML = `
          <h2>${data.login}</h2>
          <p>Public Repositories: ${data.public_repos}</p>
        `;
    } else {
      throw new Error("User not found");
    }
  } catch (error) {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "User not found";
  }
}
