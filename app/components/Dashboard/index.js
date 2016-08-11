import React from "react";
import DashboardHeader from "components/DashboardHeader";
import DashboardBody from "components/DashboardBody";
import DashboardFooter from "components/DashboardFooter";



function Dashboard(props) {
  const {projects, topProjects, lastUpdatedProject, maxPage, page, projectsCount, carouselActive,
    carouselToggleOnClick} = props;

  return (
    <div>
      {carouselActive}
      <DashboardHeader page={page}
                       maxPage={maxPage}
                       topProjects={topProjects}
                       lastUpdatedProject={lastUpdatedProject}
                       projectsCount={projectsCount} />
      <DashboardBody projects={projects} />
      <DashboardFooter page={page}
                       maxPage={maxPage}
                       carouselActive={carouselActive}
                       carouselToggleOnClick={carouselToggleOnClick} />
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
