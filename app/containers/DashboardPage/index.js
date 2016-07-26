import React from 'react';
import { subscribe } from 'horizon-react';
import Dashboard from 'components/Dashboard';
import { rankProject } from 'utils/ranking';
import { browserHistory } from 'react-router';

class DashboardPage extends React.Component { // eslint-disable-line react/prefer-stateless-function


  constructor(){
    super();
    this.pageSize = 1;
    this.rotationInterval = 5000;
  }

  componentDidMount(){
    const maxPage = this.getMaxPage(this.props.projects.length);
    const page = this.getPage(this.props.page);

    this.carousel = setTimeout(() => {
      this.rotatePage(page, maxPage);
    }, this.rotationInterval);
  }

  getMaxPage(projectsLength){
    return Math.ceil(projectsLength / this.pageSize);
  }

  getPage(page){
    return page ? parseInt(page) : 1
  }

  rotatePage(page, maxPage){
    if (maxPage == 1)
      return;

    if (page == maxPage)
      browserHistory.push('?page=1');
    else
      browserHistory.push(`?page=${page + 1}`);
  }

  componentWillReceiveProps(nextProps){
    const maxPage = this.getMaxPage(nextProps.projects.length);
    const page = this.getPage(nextProps.page);

    const oldMaxPage = this.getMaxPage(this.props.projects.length);
    const oldPage = this.getPage(this.props.page);

    if (page != oldPage || maxPage != oldMaxPage ){
      clearTimeout(this.carousel);
      this.carousel = setTimeout(() => {
        this.rotatePage(page, maxPage);
      }, this.rotationInterval);
    }
  }

  componentWillUnmount(){
    clearTimeout(this.carousel);
  }

  render() {
    const page = this.getPage(this.props.page);

    return (
      <Dashboard projects={this.projectsSortedByRank()} page={page} pageSize={this.pageSize} />
    );
  }

  projectsSortedByRank(){
    return this.props.projects.sort((p1, p2) => rankProject(p2, false) - rankProject(p1, false))
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
