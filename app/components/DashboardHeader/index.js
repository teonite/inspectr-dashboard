import React from 'react';

import MiniProjectBox from 'components/MiniProjectBox';
import PaginationNavigation from 'components/PaginationNavigation';


function DashboardHeader({projects, page, pageSize}) {
  const maxPage = Math.ceil(projects.length / pageSize);

  return (
    <div className="header-wrapper">
      <div className="row">
        <div className="col-md-5 left-col">
          <div className="top-projects">
            <ul>
              <li>
                <div className="header-title">
                  <h2>Top projects:</h2>
                  <span className="rect top"></span>
                  <span className="rect bottom"></span>
                  <span className="rect-vertical"></span>
                </div>
              </li>
              {projects.slice(0, 3).map((project, index) =>
                <MiniProjectBox project={project} place={index + 1} key={index}></MiniProjectBox>
              )}
            </ul>
          </div>
        </div>
        <div className="col-md-2 p-0">
          <div className="logo">
            <span className="rect"></span>
            <h1>INSPECTR</h1>
            <PaginationNavigation page={page} maxPage={maxPage} />
          </div>
        </div>
        <div className="col-md-5 right-col">
          <div className="top-projects stats">
            <ul>
              <li>
                <div className="header">
                  <span className="rank rank-badge-8"></span>
                  <span className="rect"></span>
                  <h3>AVERAGE PROJECT RANK</h3>
                </div>
              </li>
              <li>
                <div className="header">
                  <span className="rank">64</span>
                  <span className="rect"></span>
                  <h3>ALL PROJECTS</h3>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

DashboardHeader.propTypes = {
  projects: React.PropTypes.array.isRequired,
  page: React.PropTypes.number.isRequired,
  pageSize: React.PropTypes.number.isRequired,
};

export default DashboardHeader;
