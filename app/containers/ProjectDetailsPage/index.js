import React from 'react';
import { subscribe } from 'horizon-react';

import ProjectDetails from 'components/ProjectDetails';


class ProjectDetailsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        {this.props.projects.map((project, index) => {
          return <ProjectDetails key={index} project={project} history={this.props.history}/>
        })}
      </div>
    );
  }
}

ProjectDetailsPage.propTypes = {
  projects: React.PropTypes.array.isRequired,
  history: React.PropTypes.array.isRequired
};

const mapDataToProps = {
  projects: (hz, props) => hz('reports').find(props.params.projectId),
  history: (hz, props) => hz('reports_history').findAll({'project_id' : props.params.projectId})
};

export default subscribe({
  mapDataToProps
})(ProjectDetailsPage);
