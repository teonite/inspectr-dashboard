import React from 'react';

import TopProjects from 'components/TopProjects';
import LastUpdatedProject from 'components/LastUpdatedProject';
import AllProjects from 'components/AllProjects';


function DashboardHeader(props) {
  const {topProjects, lastUpdatedProject, projectsCount} = props;

  return (
    <div className="header-wrapper">
      <div className="row">
        <div className="col-md-12 col-lg-2 col-lg-push-5 p-0">
            <div className="logo">
                <span className="rect"></span>
                <h1>INSPECTR</h1>
            </div>
        </div>
        <div className="col-md-12 col-lg-5 col-lg-pull-2 left-col">
          <TopProjects topProjects={topProjects} />
        </div>
        <div className="col-md-12 col-lg-5 right-col">
          <div className="top-projects stats">
            <ul>
              <li>
                <LastUpdatedProject project={lastUpdatedProject} />
              </li>
              <li>
                <AllProjects projectsCount={projectsCount} />
              </li>
              <li>
                <div className="header search">
                  <a href="#" className="rank"><i className="glyphicon glyphicon-search"></i></a>
                  <span className="rect"></span>
                  <h3>Search</h3>
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
  topProjects: React.PropTypes.array,
  page: React.PropTypes.number,
  maxPage: React.PropTypes.number,
  lastUpdatedProject: React.PropTypes.object,
  projectsCount: React.PropTypes.number,
  carouselActive: React.PropTypes.bool,
  carouselToggleOnClick: React.PropTypes.func,
};

export default DashboardHeader;
