import React from 'react';

import DashboardHeader from 'components/DashboardHeader';
import DashboardBody from 'components/DashboardBody';


function Dashboard({projects}) {
  return (
    <div>
      <DashboardHeader projects={projects} />
      <DashboardBody projects={projects} />
    </div>
  );
}

Dashboard.propTypes = {
  projects: React.PropTypes.array.isRequired,
};

export default Dashboard;
