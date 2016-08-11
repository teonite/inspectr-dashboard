import React from 'react';
import { Link } from 'react-router';

import { rankProject } from 'utils/ranking';


function MiniProjectBox({project, place}) {

  const projectRank = rankProject(project);
  const rankClassName = `rank rank-badge-${projectRank}`;

  return (
    <li>
      <div className="header">
        <span className={rankClassName}>
            <span className="global-rank">{place}</span>
        </span>
        <span className="rect"></span>
        <h3><Link to={`/details/${project.id}`}>{project.project_name}</Link></h3>
      </div>
    </li>
  );
}

MiniProjectBox.propTypes = {
  project: React.PropTypes.object.isRequired,
  place: React.PropTypes.number.isRequired,
};

export default MiniProjectBox;
