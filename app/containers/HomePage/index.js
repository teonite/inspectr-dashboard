import React from 'react';
import { subscribe } from 'horizon-react';

class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <ul>
        {this.props.reports.map(report => <li>{report.msg}</li>)}
      </ul>
    );
  }
}

HomePage.propTypes = {
  reports: React.PropTypes.array.isRequired,
};

const mapDataToProps = {
  reports: (hz) => hz('reports'),
};

export default subscribe({
  mapDataToProps,
})(HomePage);
