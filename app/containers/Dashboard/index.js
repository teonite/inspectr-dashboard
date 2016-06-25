import React from 'react';
import { subscribe } from 'horizon-react';
import ReportBlock from 'containers/ReportBlock';


class Dashboard extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div className="row">
        {this.props.reports.map((report, index) => <ReportBlock key={index} report={report}/>)}
      </div>
    );
  }
}

Dashboard.propTypes = {
  reports: React.PropTypes.array.isRequired,
};

const mapDataToProps = {
  reports: (hz) => hz('reports'),
};

export default subscribe({
  mapDataToProps,
})(Dashboard);
