import React, { useEffect, useState } from 'react';
import '../../styles/Github.css';

const JenOSUpdates = ({ isNight }) => {
  const [repos, setRepos] = useState([]);
  const username = 'luvjen11';

  useEffect(() => {
    fetch(`https://gh-pinned-repos.egoist.dev/?username=${username}`)
      .then((res) => res.json())
      .then((data) => setRepos(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={`github-window ${isNight ? "night-mode" : ""}`}>
      <h3 className="github-title">My Pinned Projects</h3>
      <p className="github-desc">
        A peek at some of my latest work and side projects.
      </p>

      <div className="github-list">
        {repos.length > 0 ? (
          repos.map((repo) => (
            <a
              key={repo.repo}
              href={`https://github.com/${username}/${repo.repo}`}
              target="_blank"
              rel="noopener noreferrer"
              className="repo-card"
            >
              <div className="repo-header">
                <h4>{repo.name}</h4>
                <span className="repo-lang">{repo.language}</span>
              </div>
              <p>{repo.description || "No description available."}</p>
              <div className="repo-footer">
              </div>
            </a>
          ))
        ) : (
          <p>Loading pinned repositories...</p>
        )}
      </div>
    
      <button>
        <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="github-btn"
        >
            Visit Full GitHub Profile
        </a>
      </button>
    </div>
  );
};

export default JenOSUpdates;
