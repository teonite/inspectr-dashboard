import React from 'react';

import ProjectBox from 'components/ProjectBox';


function DashboardBody({projects, page, pageSize}) {
  const offset = (page - 1) * pageSize;
  const projectsSliced = projects.slice(offset, offset + pageSize);

  return (
    <div className="dashboard-wrapper">
      <div className="row">
        {projectsSliced.map((project, index) => <ProjectBox project={project} place={index + 1} key={index}/>)}
      </div>
    </div>
  );
}

DashboardBody.propTypes = {
  projects: React.PropTypes.array.isRequired,
  page: React.PropTypes.number.isRequired,
  pageSize: React.PropTypes.number.isRequired,
};

export default DashboardBody;
