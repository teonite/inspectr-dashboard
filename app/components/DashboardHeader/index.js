import React from 'react';

import MiniProjectBox from 'components/MiniProjectBox';


function DashboardHeader({projects}) {
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
              {projects.slice(0, 2).map((project, index) =>
                <MiniProjectBox project={project} place={index + 1}></MiniProjectBox>
              )}
            </ul>
          </div>
        </div>
        <div className="col-md-2 p-0">
          <div className="logo">
            <span className="rect"></span>
            <h1>INSPECTR</h1>

            <ul className="pagination pagination-sm">
              <li>
                <a href="#" aria-label="Previous">
                  <span aria-hidden="true">&larr;</span>
                </a>
              </li>
              <li><a href="#">2</a></li>
              <li className="active"><a href="#">3</a></li>
              <li><a href="#">4</a></li>
              <li>
                <a href="#" aria-label="Next">
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </li>
            </ul>

          </div>
        </div>
        <div className="col-md-5 right-col">
          <div className="top-projects stats">
            <ul>
              <li>
                <div className="header">
                  <span className="rank rank-badge-8"></span>
                  <span className="rect"></span>
                  <h3>Inspectr CLI</h3>
                </div>
              </li>
              <li>
                <div className="header">
                  <span className="rank">64</span>
                  <span className="rect"></span>
                  <h3>TEONITE Backend</h3>
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
};

export default DashboardHeader;
