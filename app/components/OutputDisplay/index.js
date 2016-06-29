import React from 'react';

import { Button, Panel } from 'react-bootstrap';
import styles from './styles.css';

class OutputDisplay extends React.Component {

  constructor(...args) {
    super(...args);
    this.state = {
      open: false
    };
  }

  render() {
    return (
      <div className={styles.outputDisplay}>
        <Button onClick={ ()=> this.setState({ open: !this.state.open })}>
          output
        </Button>
        <Panel collapsible expanded={this.state.open}>
          <pre>{this.props.stdout + this.props.stderr}</pre>
        </Panel>
      </div>
    );
  }

}

OutputDisplay.propTypes = {
  stdout: React.PropTypes.string.isRequired,
  stderr: React.PropTypes.string.isRequired
}

export default OutputDisplay;
