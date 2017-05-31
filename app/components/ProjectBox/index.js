import React from 'react';
import { Link } from 'react-router';

import { rankProject, MAX_RANK } from 'utils/ranking';
import Report from 'components/Report';


function ProjectBox({project}) {

  const projectRank = rankProject(project);
  const rankClassName = `rank rank-badge-${projectRank}`;
  const formatDate = (date) => date.toLocaleString('pl-PL');
  const fullRank = `${projectRank} / ${MAX_RANK}`;

  return (
    <div className="col-lg-3 col-md-6 col-xs-12">
      <div className="project-box">
        <div className="header">
          <span title={fullRank} className={rankClassName}>
            <span className="global-rank">{ project.rankPlace }</span>
          </span>
          <h2><Link to={`/details/${project.id}`}>{project.project_name}</Link></h2>
          <p className="subtext">Last update: {formatDate(project.time_created)}</p>
        </div>

        {project.reports.map((report, index) => <Report report={report} key={index}/>)}

      </div>
    </div>
  );
}

ProjectBox.propTypes = {
  project: React.PropTypes.object.isRequired,
};

export default ProjectBox;
