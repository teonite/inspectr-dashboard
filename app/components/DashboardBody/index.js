import React from 'react';

import ProjectBox from 'components/ProjectBox';


function DashboardBody({projects}) {
  return (
    <div className="dashboard-wrapper">
      <div className="row">
        {projects.map(project => <ProjectBox project={project} />)}
      </div>
    </div>
  );
}

DashboardBody.propTypes = {
  projects: React.PropTypes.array.isRequired,
};

export default DashboardBody;
