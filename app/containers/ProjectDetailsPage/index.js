import React from 'react';
import { subscribe } from 'horizon-react';

import ProjectDetails from 'components/ProjectDetails';


class ProjectDetailsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    /*
      I didn't find a way to do it with horizon. Query in ReQL that does the job:
      r.db('inspectr').table("reports").innerJoin(r.db('inspectr').table("reports_history"), function(reportRow, historyRow) {
      	return reportRow('id').eq([PROJECT_ID])
      }).zip()
    */
    let history = []
    this.props.history.forEach((entry) => {
      if(entry.project_name == this.props.projects[0].project_name) history.push(entry)
    })

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
  history: (hz, props) => hz('reports_history')
};

export default subscribe({
  mapDataToProps
})(ProjectDetailsPage);
