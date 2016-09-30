import React from 'react';
import ReactTooltip from 'react-tooltip'

function ReportHeader({tip, name, open}) {
  return (
    <h3 data-tip={tip}>
      <span className="reveal">
        <i className="glyphicon glyphicon-menu-right" />
      </span>
      {name}
      {open ? '' : <span className="text-gray">{'{'}...{'}'}</span>}
      <ReactTooltip place="right" type="dark" effect="solid"/>
    </h3>
  );
}

ReportHeader.propTypes = {
  tip: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  open: React.PropTypes.bool.isRequired,
}

export default ReportHeader;
