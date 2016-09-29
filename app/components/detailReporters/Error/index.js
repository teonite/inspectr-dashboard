import React from 'react';

import OutputDisplay from 'components/OutputDisplay';

class Error extends React.Component  {

  constructor(...args) {
    super(...args);
    this.state = {
      open: false
    };
  }

  render() {
    const {report} = this.props;

    return (
      <div className="section">
        <div className="row">
          <div className="col-xs-6 col-xs-12 title" onClick={ ()=> this.setState({ open: !this.state.open }) }>
            <h3>
              <span className="reveal">
                <i className="glyphicon glyphicon-menu-right" />
              </span>
              { report.type } {this.state.open ? '' : <span className="text-gray">{'{'}...{'}'}</span>}
            </h3>
          </div>
          <div className="col-xs-6 col-xs-12 chart">
            <span className="text-red">REPORTER FAILED</span>
          </div>
        </div>
        <OutputDisplay open={this.state.open} stderr={report.stderr} stdout={report.stdout} />
      </div>
    );
  }
}

Error.propTypes = {
  report: React.PropTypes.object.isRequired,
}

export default Error;
