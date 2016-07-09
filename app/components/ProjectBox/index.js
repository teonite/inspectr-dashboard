import React from 'react';

import { rankProject, MAX_RANK } from 'utils/ranking';
import Report from 'components/Report';


function ProjectBox({project, place}) {

  const projectRank = rankProject(project);
  const rankClassName = `rank rank-badge-${projectRank}`;
  const fullRank = `${projectRank} / ${MAX_RANK}`;

  return (
    <div className="col-md-3 col-xs-6">
      <div className="project-box">
        <div className="header">
        <span title={fullRank} className={rankClassName}>
          <span className="global-rank">{ place }</span>
        </span>
          <h2>{project.project_name}</h2>
          <p>Last update: TODO</p>
        </div>

        {project.reports.map((report, index) => <Report report={report} key={index}/>)}

      </div>
    </div>
  );
}

ProjectBox.propTypes = {
  project: React.PropTypes.object.isRequired,
  place: React.PropTypes.number.isRequired,
};

export default ProjectBox;
