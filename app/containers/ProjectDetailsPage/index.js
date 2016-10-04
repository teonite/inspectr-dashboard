import React from 'react';
import { subscribe } from 'horizon-react';
import { rankProject } from 'utils/ranking';

import ProjectDetails from 'components/ProjectDetails';


class ProjectDetailsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  getNavigationIds(allProjects) {
    let previousId, nextId;
    allProjects.sort((p1, p2) => rankProject(p2, false) - rankProject(p1, false)).map((project, index) => {
      if (project.id == this.props.params.projectId) {
        previousId = (index < 1) ? undefined : this.props.allProjects[index - 1].id;
        nextId = (index >= this.props.allProjects.length - 1) ? undefined : this.props.allProjects[index + 1].id;
      }
    })
    return {previousId, nextId};
  }

  render() { // eslint-disable-line no-unused-vars
    const {previousId, nextId} = this.getNavigationIds(this.props.allProjects)

    return (
      <div>
        {this.props.projects.map((project, index) => {
          return <ProjectDetails key={index} project={project} previous={previousId} next={nextId} history={this.props.history}/>
        })}
      </div>
    );
  }
}

ProjectDetailsPage.propTypes = {
  allProjects: React.PropTypes.array.isRequired,
  params: React.PropTypes.array.isRequired,
  projects: React.PropTypes.array.isRequired,
  history: React.PropTypes.array.isRequired
};

const mapDataToProps = {
  allProjects: (hz, props) => hz('reports').order("id"),
  projects: (hz, props) => hz('reports').find(props.params.projectId),
  history: (hz, props) => hz('reports_history').findAll({'project_id' : props.params.projectId})
};

export default subscribe({
  mapDataToProps
})(ProjectDetailsPage);
