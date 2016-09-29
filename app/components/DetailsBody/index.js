import React from 'react';
import { rankProject } from 'utils/ranking';
import Report from 'components/DetailsReport';

function DetailsBody({project}) {
  const projectRank = rankProject(project);
  const formatDate = (date) => date.toLocaleString('pl-PL');
  
  return (
      <div className="row">
        <div className="col-xs-12">
          <div className="project-box details">
            <div className="header row">
              <span className="rank rank-badge-9"/>
              <div className="col-md-8">
                <h2>{project.project_name}</h2>
                <p className="subtext">Rank: {projectRank} <span className="text-dark-gray">/</span> Last update: {formatDate(project.time_created)}</p>
              </div>
              <div className="col-md-4 mobile-off">
                <div className="stats-box">
                  <h3>Number of tests</h3>
                  <span className="circle">{project.reports.length}</span>
                  <span className="line" />
                </div>
              </div>
            </div>
            {project.reports.map((report, index) => <Report report={report} key={index}/>)}
          </div>
        </div>
      </div>
  )
}

DetailsBody.propTypes = {
  project: React.PropTypes.object.isRequired
};

export default DetailsBody;
