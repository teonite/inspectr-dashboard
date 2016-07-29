import React from 'react';
import { subscribe } from 'horizon-react';
import Dashboard from 'components/Dashboard';
import { rankProject } from 'utils/ranking';
import {PAGE_SIZE, ROTATION_INTERVAL} from 'utils/constants';
import {toggleCarousel, rotatePage} from './actions';


function getPage(props){
  return props.location.query.page ? parseInt(props.location.query.page) : 1
}

class DashboardPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount(){
    const {page, projects} = this.props;
    const maxPage = this.getMaxPage(projects.length);

    this.carousel = setTimeout(() => {
      rotatePage(page, maxPage);
    }, ROTATION_INTERVAL);
  }

  componentWillReceiveProps(nextProps){
    const {projects, page} = nextProps;
    const maxPage = this.getMaxPage(projects.length);

    const oldProjects = this.props.projects;
    const oldPage = this.props.page;
    const oldMaxPage = this.getMaxPage(oldProjects.length);

    if (page != oldPage || maxPage != oldMaxPage ){
      clearTimeout(this.carousel);
      this.carousel = setTimeout(() => {
        rotatePage(page, maxPage);
      }, ROTATION_INTERVAL);
    }
  }

  componentWillUnmount(){
    clearTimeout(this.carousel);
  }

  get projects(){
    const sortedProjects = this.props.projects.sort((p1, p2) => rankProject(p2, false) - rankProject(p1, false));
    sortedProjects.forEach( (el, i) => el.rankPlace = i + 1 );
    const offset = (this.props.page - 1) * PAGE_SIZE;
    return sortedProjects.slice(offset, offset + PAGE_SIZE);
  }

  get topProjects(){
    return this.props.projects.slice(0, 3);
  }

  get lastUpdatedProject(){
    return this.props.projects.sort((p1, p2) => p1.time_created < p2.time_created)[0];
  }

  get projectsCount(){
    return this.props.projects.length;
  }

  getMaxPage(projectsLength){
    return Math.ceil(projectsLength / PAGE_SIZE);
  }

  render() {
    const {projects, ...remainingProps} = this.props;

    return (
      <Dashboard projects={this.projects}
                 topProjects={this.topProjects}
                 maxPage={this.getMaxPage(projects.length)}
                 lastUpdatedProject={this.lastUpdatedProject}
                 projectsCount={this.projectsCount}
                 carouselToggleOnClick={() => this.props.toggleCarousel()}
                 {...remainingProps} />
    );
  }
}


DashboardPage.propTypes = {
  projects: React.PropTypes.array.isRequired,
  page: React.PropTypes.number.isRequired,
  toggleCarousel: React.PropTypes.func.isRequired,
};

const mapDataToProps = {
  projects: (hz) => hz('reports')
};

const mapStateToProps = (state, props) => ({
  page: getPage(props),
  carouselActive: state.carouselActive,
});

const mapDispatchToProps = {
  toggleCarousel,
};

export default subscribe({
  mapDataToProps,
  mapStateToProps,
  mapDispatchToProps,
})(DashboardPage);
