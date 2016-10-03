import React from 'react';
import ReactTooltip from 'react-tooltip'

function ReportHeader({name, tip, children}) {
  return (
    <h3>
      <div>
        <span data-tip={tip}> {name} </span>
        <ReactTooltip place="right" type="dark" effect="solid"/>
        {children}
      </div>
    </h3>
  );
}

ReportHeader.propTypes = {
  name: React.PropTypes.string.isRequired,
  tip: React.PropTypes.string.isRequired,
  children: React.PropTypes.element.isRequired
};

export default ReportHeader;
