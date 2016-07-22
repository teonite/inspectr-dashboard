import React from 'react';
import { subscribe } from 'horizon-react';
import Dashboard from 'components/Dashboard';
import { rankProject } from 'utils/ranking';

class DashboardPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  projectsSortedByRank() {
    return this.props.projects.sort((p1, p2) => rankProject(p2, false) - rankProject(p1, false))
  }

  render() {
    const page = this.props.page ? parseInt(this.props.page) : 1;

    return (
      <Dashboard projects={this.projectsSortedByRank()} page={page} />
    );
  }
}

DashboardPage.propTypes = {
  projects: React.PropTypes.array.isRequired,
  page: React.PropTypes.string,
};

const mapDataToProps = {
  projects: (hz) => hz('reports')
};

const mapStateToProps = (state, props) => ({
  page: props.location.query.page
});

export default subscribe({
  mapDataToProps,
  mapStateToProps
})(DashboardPage);
