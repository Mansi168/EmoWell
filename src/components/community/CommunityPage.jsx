import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { css } from '@emotion/react';
import { ClipLoader } from 'react-spinners';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './CommunityPage.css';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const CommunityPage = () => {
  const [repoData, setRepoData] = useState({});
  const [loading, setLoading] = useState(true);
  const [contributors, setContributors] = useState([]);

  const owner = 'Mansi168';
  const repo = 'EmoWell';
  const token = import.meta.env.token; 

  const headers = token ? { Authorization: `token ${token}` } : {};

  useEffect(() => {
    const fetchData = async () => {
      try {
        const repoResponse = await axios.get(`https://api.github.com/repos/${owner}/${repo}`, { headers });
        const prsResponse = await axios.get(`https://api.github.com/repos/${owner}/${repo}/pulls?state=all`, { headers });
        const commitsResponse = await axios.get(`https://api.github.com/repos/${owner}/${repo}/commits`, { headers });
        const issuesResponse = await axios.get(`https://api.github.com/repos/${owner}/${repo}/issues?state=all`, { headers });
        const contributorsResponse = await axios.get(`https://api.github.com/repos/${owner}/${repo}/contributors`, { headers });

        setRepoData({
          stars: repoResponse.data.stargazers_count,
          forks: repoResponse.data.forks_count,
          openIssues: repoResponse.data.open_issues_count,
          closedIssues: issuesResponse.data.filter(issue => issue.state === 'closed').length,
          openPRs: prsResponse.data.filter(pr => pr.state === 'open').length,
          closedPRs: prsResponse.data.filter(pr => pr.state === 'closed').length,
          commits: commitsResponse.data.length,
          contributors: contributorsResponse.data.length,
        });
        const topContributorsResponse = await axios.get(`https://api.github.com/repos/${owner}/${repo}/contributors?per_page=5`, { headers });
        setContributors(topContributorsResponse.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching repo data:', error);
        setLoading(false); 
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  const viewAllContributors = () => {
    window.location.href = `https://github.com/${owner}/${repo}/contributors`;
  };

  const contributeOnGitHub = () => {
    window.location.href = `https://github.com/${owner}/${repo}`;
  };

  return (
    <div>
      <Navbar />
      <div className="community-page">
        {loading ? (
          <div className="loading-spinner">
            <ClipLoader color="#318f5f" loading={loading} css={override} size={150} />
          </div>
        ) : (
          <div className="community-container">
            <h1 className="title">EmoWell's Community</h1>
            <div className="grid">
              <div className="card">
                <h2>Stars</h2>
                <p>{repoData.stars}</p>
              </div>
              <div className="card">
                <h2>Forks</h2>
                <p>{repoData.forks}</p>
              </div>
              <div className="card">
                <h2>Commits</h2>
                <p>{repoData.commits}</p>
              </div>
              <div className="card">
                <h2>Open Issues</h2>
                <p>{repoData.openIssues}</p>
              </div>
              <div className="card">
                <h2>Closed Issues</h2>
                <p>{repoData.closedIssues}</p>
              </div>
              <div className="card">
                <h2>Open PRs</h2>
                <p>{repoData.openPRs}</p>
              </div>
              <div className="card">
                <h2>Closed PRs</h2>
                <p>{repoData.closedPRs}</p>
              </div>
              <div className="card">
                <h2>Contributors</h2>
                <p>{repoData.contributors}</p>
              </div>
            </div>
            <div className="button-container">
               <button className="contribute-btn" onClick={contributeOnGitHub}>
                Contribute on GitHub
              </button>
            </div>
            {/* Contributor's Section*/ }
            <div className="contributors-container">
              <h1 className="contributors-title">Top Contributors</h1>
              <div className="contributors-grid">
                {contributors.map((contributor) => (
                  <div key={contributor.id} className="contributor-card">
                    <a
                      href={contributor.html_url}
                      className="contributor-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={contributor.avatar_url}
                        alt={contributor.login}
                        className="contributor-avatar"
                      />
                    </a>
                    <h2 className="contributor-name">{contributor.login}</h2>
                    <p className="contributor-contributions">
                      Contributions: {contributor.contributions}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <button className="view-contributors-btn" onClick={viewAllContributors}>
              View All Contributors
            </button>
          </div>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default CommunityPage;










