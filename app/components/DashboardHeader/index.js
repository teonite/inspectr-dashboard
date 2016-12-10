/* eslint-disable */
import React from 'react';

import TopProjects from 'components/TopProjects';
import LastUpdatedProject from 'components/LastUpdatedProject';
import AllProjects from 'components/AllProjects';




class DashboardHeader extends React.Component  {
  constructor(...args) {
    super(...args);
    this.state = {
      open: false,
      query: ''
    };
  }

  _handleKeyUp(event) {
      this.props.filterProjectsOnKeyUp(event.target.value);
  }

  render() {
    const {topProjects, lastUpdatedProject, projectsCount} = this.props;
    let searchBox;
    if(this.state.open) {
      searchBox = <li><input onKeyUp={this._handleKeyUp} type="text" style={{color: "black"}}/></li>;
    }
    console.log(this.state.open);
    return (
      <div className="header-wrapper">
        <div className="row">
          <div className="col-md-12 col-lg-2 col-lg-push-5 p-0">
              <div className="logo">
                  <span className="rect"></span>
                  <h1>INSPECTR</h1>
              </div>
          </div>
          <div className="col-md-12 col-lg-5 col-lg-pull-2 left-col">
            <TopProjects topProjects={topProjects} />
          </div>
          <div className="col-md-12 col-lg-5 right-col">
            <div className="top-projects stats">
              <ul>
                <li>
                  <LastUpdatedProject project={lastUpdatedProject} />
                </li>
                <li>
                  <AllProjects projectsCount={projectsCount} />
                </li>
                {searchBox}
                <li>
                  <div className="header search">
                    <a href="#" onClick={()=> this.setState({ open: !this.state.open })} className="rank"><i className="glyphicon glyphicon-search"></i></a>
                    <span className="rect"></span>
                    <h3>Search</h3>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

DashboardHeader.propTypes = {
  page: React.PropTypes.number,
  maxPage: React.PropTypes.number,
  topProjects: React.PropTypes.array.isRequired,
  lastUpdatedProject: React.PropTypes.object,
  projectsCount: React.PropTypes.number,
  filterProjectsOnKeyUp: React.PropTypes.func.isRequired
};

export default DashboardHeader;
