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

        {project.reports.map(report => <Report report={report} />)}


        <div className="chart">
          <h3>Total tests (62):</h3>
          <img src="img/chart-1.png"/>
          <p className="test-result">
            <span className="text-green">Passed: 53 <span className="text-gray">(87%)</span></span>
            <span className="text-red">Failed: 17 <span className="text-gray">(13%)</span></span>
          </p>
        </div>

      </div>
    </div>
  );
}

ProjectBox.propTypes = {
  project: React.PropTypes.object.isRequired,
};

export default ProjectBox;
