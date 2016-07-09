import React from 'react';
import { Link } from 'react-router';

import OutputDisplay from 'components/OutputDisplay';

function ProjectDetails({project}) {

  return (
    <div className="col-xs-12">
      <br/>
      <Link to='/'>Back to Dashboard</Link>
      <br/>
      {project.reports.map((report, index) => (
        <div key={index}>
          <h2>{report.type}</h2>
          <OutputDisplay stdout={report.stdout} stderr={report.stderr} />
        </div>
      ))}
    </div>
  );
}

ProjectDetails.propTypes = {
  project: React.PropTypes.object.isRequired
};

export default ProjectDetails;
