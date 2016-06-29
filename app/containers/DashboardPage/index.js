import React from 'react';
import { subscribe } from 'horizon-react';
import ReportBlock from 'containers/ReportBlock';
import { rankProject } from 'utils/ranking';

class DashboardPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  projectsSortedByRank() {
    return this.props.projects.sort((p1, p2) => rankProject(p2) - rankProject(p1))
  }

  render() {
    return (
      <div className="row">
        {this.projectsSortedByRank().map((project, index) => <ReportBlock key={index} project={project}/>)}
      </div>
    );
  }
}

DashboardPage.propTypes = {
  projects: React.PropTypes.array.isRequired
};

const mapDataToProps = {
  projects: (hz) => hz('reports')
};

export default subscribe({
  mapDataToProps
})(DashboardPage);
