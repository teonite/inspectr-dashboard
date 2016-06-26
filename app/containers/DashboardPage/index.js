import React from 'react';
import { subscribe } from 'horizon-react';
import ReportBlock from 'containers/ReportBlock';


class DashboardPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div className="row">
        {this.props.projects.map((project, index) => <ReportBlock key={index} project={project}/>)}
      </div>
    );
  }
}

DashboardPage.propTypes = {
  projects: React.PropTypes.array.isRequired,
};

const mapDataToProps = {
  projects: (hz) => hz('reports'),
};

export default subscribe({
  mapDataToProps,
})(DashboardPage);
