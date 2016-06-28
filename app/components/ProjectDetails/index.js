import React from 'react';

import styles from './styles.css';
import OutputDisplay from 'components/OutputDisplay';
import ReportHeader from 'components/ReportHeader';

function ProjectDetails({project}) {
  return (
    <div className="col-xs-12">
      <ReportHeader project={project} />
      {project.reports.map((report, index) => (
        <div key={index}>
          <h2>{report.type}</h2>
          <OutputDisplay stdout={report.stdout} stderr={report.stderr} />
        </div>
      ))}
    </div>
  );
}

export default ProjectDetails;
