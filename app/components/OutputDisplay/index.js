import React from 'react';

import { Panel } from 'react-bootstrap';

class OutputDisplay extends React.Component {

  constructor(...args) {
    super(...args);
  }

  render() {
    return (
      <div className="row revealed">
        <Panel bsClass="code-panel" collapsible expanded={this.props.open}>
          <div className="code">
            <pre>{this.props.stdout + this.props.stderr}</pre>
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
