import React from 'react';
import ReactTooltip from 'react-tooltip'
import OutputDisplay from 'components/OutputDisplay';


class ReportHeader extends React.Component  {
  constructor(...args) {
    super(...args);
    this.state = {
      open: false
    };
  }

  render() {
    const {tip, name, stdout, stderr, children} = this.props;
    return (
      <div className="section">
        <div className="row">
          <div className="col-xs-6 col-xs-12 title" onClick={ ()=> this.setState({ open: !this.state.open }) }>
            <h3 data-tip={tip}>
              <span className="reveal">
                <i className="glyphicon glyphicon-menu-right" />
              </span>
              {name}
              {open ? '' : <span className="text-gray">{'{'}...{'}'}</span>}
              <ReactTooltip place="right" type="dark" effect="solid"/>
            </h3>
          </div>
          <div className="col-xs-6 col-xs-12 chart">
            <p className="test-result">
              {children}
            </p>
          </div>
        </div>
        <OutputDisplay open={this.state.open} stderr={stderr} stdout={stdout} />
      </div>
      );
    }
}

ReportHeader.propTypes = {
  tip: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  stdout: React.PropTypes.string.isRequired,
  stderr: React.PropTypes.string.isRequired,
  children: React.PropTypes.element.isRequired
}

export default ReportHeader;
