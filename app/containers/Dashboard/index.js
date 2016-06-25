import React from 'react';
import { subscribe } from 'horizon-react';
import Report from 'components/Report';


class Dashboard extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div class="row">
        {this.props.reports.map((report, index) => <Report key={index} data={report}/>)}
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
