import React from 'react';
import DetailsHeader from 'components/DetailsHeader'
import DetailsBody from 'components/DetailsBody'
import DetailsFooter from 'components/DetailsFooter'

function ProjectDetails({project, next, previous}) {

  return (
    <div>
      <DetailsHeader next={next} previous={previous}/>
      <DetailsBody project={project}/>
      <DetailsFooter/>
    </div>
  )
}

ProjectDetails.propTypes = {
  project: React.PropTypes.object.isRequired,
  next: React.PropTypes.string.isRequired,
  previous: React.PropTypes.string.isRequired
};

export default ProjectDetails;
