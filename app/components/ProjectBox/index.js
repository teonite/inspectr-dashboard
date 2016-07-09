import React from 'react';

import { rankProject } from 'utils/ranking';
import Report from 'components/Report';


function ProjectBox({project}) {

  const projectRank = rankProject(project);

  return (
    <div className="col-md-3 col-xs-6">
      <div className="project-box">
        <div className="header">
        <span className="rank rank-badge-9">
          <span className="global-rank">{projectRank}</span>
        </span>
          <h2>{project.project_name}</h2>
          <p>Last update: TODO</p>
        </div>

        {project.reports.map(report => <Report report={report}/>)}

      </div>
    </div>
  );
}

ProjectBox.propTypes = {
  project: React.PropTypes.object.isRequired,
};

export default ProjectBox;
