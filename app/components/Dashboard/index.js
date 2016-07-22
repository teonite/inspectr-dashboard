import React from 'react';

import DashboardHeader from 'components/DashboardHeader';
import DashboardBody from 'components/DashboardBody';


function Dashboard({projects, page}) {
  const pageSize = 1;
  
  return (
    <div>
      <DashboardHeader projects={projects} page={page} pageSize={pageSize} />
      <DashboardBody projects={projects} page={page} pageSize={pageSize} />
    </div>
  );
}

Dashboard.propTypes = {
  projects: React.PropTypes.array.isRequired,
  page: React.PropTypes.number.isRequired,
};

export default Dashboard;
