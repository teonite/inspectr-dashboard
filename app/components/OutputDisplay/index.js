import React from 'react';

import { Panel } from 'react-bootstrap';

class OutputDisplay extends React.Component {

  constructor(...args) {
    super(...args);
  }

  render() {
    return (
      <div>
        <Panel bsClass="code-panel" collapsible expanded={this.props.open}>
          <div className="row revealed">
            <div className="code">
              <pre>{this.props.stdout + this.props.stderr}</pre>
            </div>
          </div>
        </Panel>
      </div>
    );
  }

}

OutputDisplay.propTypes = {
  stdout: React.PropTypes.string.isRequired,
  stderr: React.PropTypes.string.isRequired,
  open: React.PropTypes.bool.isRequired
}

export default OutputDisplay;

/*
<Panel bsClass="test" collapsible expanded={this.state.open}>
  <div className="row revealed">
    <div className="code">
      <pre>{report.stdout + report.stderr}</pre>
    </div>
  </div>
</Panel>
*/
