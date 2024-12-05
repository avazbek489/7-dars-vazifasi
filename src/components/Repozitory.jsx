import React, { useState } from "react";
import { github } from "../axios";

function Repozitory() {
  const [username, setUsername] = useState("");
  const [repos, setRepos] = useState([]);

  function handleSearch() {
    github.get(`users/${username}/repos`).then((response) => {
      setRepos(
        response.data
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 10)
      );
    });
  }

  return (
    <div className="p-4">
      <div className="flex flex-col space-y-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="GitHub username"
          className="border p-2"
        />
        <button onClick={handleSearch} className="bg-green-500 text-white p-2">
          search
        </button>

        <ul>
          {/* Card chiqarish joyi */}
          {repos.map((value) => (
            <li key={value.id} className="border p-2">
              <a
                href={value.html_url}
                target="_blank"
                className="text-blue-500"
              >
                {value.name}
              </a>
              {value.stargazers_count}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Repozitory;
