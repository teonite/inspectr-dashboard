import React from 'react';
import DetailsHeader from 'components/DetailsHeader'
import DetailsBody from 'components/DetailsBody'
import DetailsFooter from 'components/DetailsFooter'
import OutputDisplay from 'components/OutputDisplay';

function ProjectDetails({project}) {

  return (
    <div>
      <DetailsHeader/>
      {console.log(project)}
      <DetailsBody project={project}/>
      <DetailsFooter/>
    </div>
  )
}

ProjectDetails.propTypes = {
  project: React.PropTypes.object.isRequired
};

export default ProjectDetails;
