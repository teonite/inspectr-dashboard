import React from 'react';
import {rankProject} from 'utils/ranking';


function LastUpdatedProject({project}) {
  if (Object.keys(project).length == 0)
    return (<div className="header"></div>);

  const projectRank = rankProject(project);
  const rankClassName = `rank rank-badge-${projectRank}`;

  const formatDate = (date) => date.toLocaleString('pl-PL');

  return (
    <div className="header">
      <span className={rankClassName}></span>
      <span className="rect"></span>
      <h3>
        <span className="block subtext">{formatDate(project.time_created)}</span>
        <a href="#">{project.project_name}</a>
      </h3>
    </div>
  );
}

LastUpdatedProject.propTypes = {
  project: React.PropTypes.shape({
    project_name: React.PropTypes.string,
    reports: React.PropTypes.array,
  }).isRequired,
};

LastUpdatedProject.defaultProps = {
  project: {},
};

export default LastUpdatedProject;
