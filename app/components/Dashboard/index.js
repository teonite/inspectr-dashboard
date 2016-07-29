import React from "react";
import DashboardHeader from "components/DashboardHeader";
import DashboardBody from "components/DashboardBody";
import PaginationNavigation from "components/PaginationNavigation";


function Dashboard(props) {
  const {projects, topProjects, lastUpdatedProject, maxPage, page, projectsCount, carouselActive,
    carouselToggleOnClick} = props;

  return (
    <div>
      <DashboardHeader page={page}
                       maxPage={maxPage}
                       topProjects={topProjects}
                       lastUpdatedProject={lastUpdatedProject}
                       projectsCount={projectsCount}
                       carouselActive={carouselActive}
                       carouselToggleOnClick={carouselToggleOnClick}  />
      <DashboardBody projects={projects} />
      <footer>
        <div className="footer-wrapper">
          <div className="row">
            <div className="col-sm-4 col-xs-12 text-left"><span className="subtext">Inspectr ver. 0.3 / build G384H843F</span></div>
            <div className="col-sm-4 col-xs-12">
              <PaginationNavigation page={page} maxPage={maxPage} />
            </div>
            <div className="col-sm-4 col-xs-12 text-right">
              <a href="www.teonite.com" target="_self" className="tnt-logo">TEONITE</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

Dashboard.propTypes = {
  projects: React.PropTypes.array.isRequired,
  topProjects: React.PropTypes.array.isRequired,
  maxPage: React.PropTypes.number.isRequired,
  page: React.PropTypes.number.isRequired,
  lastUpdatedProject: React.PropTypes.object,
  projectsCount: React.PropTypes.number,
  carouselActive: React.PropTypes.bool,
  carouselToggleOnClick: React.PropTypes.func,
};

export default Dashboard;
