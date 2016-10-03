import React from 'react';


function AllProjects({projectsCount}) {
  return (
    <div className="header">
      <span className="rank">{projectsCount}</span>
      <span className="rect"></span>
      <h3>All projects</h3>
    </div>
  );
}

AllProjects.propTypes = {
  projectsCount: React.PropTypes.number.isRequired,
};

AllProjects.defaultProps = {
  projectsCount: 0,
};

export default AllProjects;
