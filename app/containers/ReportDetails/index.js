import React from 'react';
import { subscribe } from 'horizon-react';
import { connect } from 'react-redux';


export class ReportDetails extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
      This is ReportDetails container !
      </div>
    );
  }
}

ReportDetails.propTypes = {
  reports: React.PropTypes.array.isRequired,
};

const mapDataToProps = {
  reports: (hz) => hz('reports'),
};

export default subscribe({
  mapDataToProps,
})(ReportDetails);

