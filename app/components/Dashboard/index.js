import React from 'react';

import DashboardHeader from 'components/DashboardHeader';
import DashboardBody from 'components/DashboardBody';


function Dashboard({projects, topProjects, maxPage, page}) {
  return (
    <div>
      <DashboardHeader page={page} maxPage={maxPage} topProjects={topProjects} />
      <DashboardBody projects={projects} />
    </div>
  );
}

Dashboard.propTypes = {
  projects: React.PropTypes.array.isRequired,
  topProjects: React.PropTypes.array.isRequired,
  maxPage: React.PropTypes.number.isRequired,
  page: React.PropTypes.number.isRequired,
};

export default Dashboard;
