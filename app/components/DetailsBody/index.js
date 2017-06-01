import React from 'react';
import { rankProject, MAX_RANK } from 'utils/ranking';
import Report from 'components/DetailsReport';

function DetailsBody({project}) {
  const projectRank = rankProject(project);
  const formatDate = (date) => date.toLocaleString('pl-PL');
  const rankClassName = `rank rank-badge-${projectRank}`;
  const fullRank = `${projectRank} / ${MAX_RANK}`;

  return (
      <div className="dashboard-wrapper">
        <div className="row">
          <div className="col-xs-12">
            <div className="project-box details">
              <div className="header row">
                <span title={fullRank} className={rankClassName}/>
                <div className="col-sm-6 col-xs-12">
                  <h2>{project.project_name}</h2>
                  <p className="subtext">Rank: {projectRank} <span className="text-dark-gray">/</span> Last update: {formatDate(project.time_created)}</p>
                </div>
                <div className="col-sm-6 col-xs-12">
                  <div className="options-box dropdown">
                    <button className="btn dropdown-toggle circle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                      <i className="glyphicon glyphicon-cog" />
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="ProjectOptionsMenu">
                      <li>
                        <a href="#"><i className="glyphicon glyphicon-trash" />Delete project</a>
                      </li>
                    </ul>
                  </div>
                  <div className="stats-box mobile-off">
                    <p>Number of tests</p>
                    <span className="circle">{project.reports.length}</span>
                    <span className="line" />
                  </div>
                </div>
              </div>
              {project.reports.map((report, index) => <Report report={report} key={index}/>)}
            </div>
          </div>
        </div>
      </div>
  )
}

DetailsBody.propTypes = {
  project: React.PropTypes.object.isRequired
};

export default DetailsBody;
