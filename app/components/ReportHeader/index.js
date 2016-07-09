import React from 'react';
import { Link } from 'react-router';

import RankVis from 'components/RankVis';

function ReportHeader({project}) {
  return (
    <h1>
      <RankVis project={project} /> <Link to={`/details/${project.id}`}>{project.project_name}</Link>
    </h1>
  );
}

ReportHeader.propTypes = {
  project: React.PropTypes.object.isRequired,
};


export default ReportHeader;
