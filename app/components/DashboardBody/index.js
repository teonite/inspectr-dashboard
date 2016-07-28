import React from 'react';

import ProjectBox from 'components/ProjectBox';


function DashboardBody({projects}) {

  return (
    <div className="dashboard-wrapper">
      <div className="row">
        {projects.map((project, index) => <ProjectBox project={project} place={index + 1} key={index} />)}
      </div>
    </div>
  );
}

DashboardBody.propTypes = {
  projects: React.PropTypes.array.isRequired,
};

export default DashboardBody;
