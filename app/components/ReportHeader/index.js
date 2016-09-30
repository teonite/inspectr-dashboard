import React from 'react';
import ReactTooltip from 'react-tooltip'

function ReportHeader({name, tip}) {
  return (
    <div>
      <span data-tip={tip}> {name} </span>
      <ReactTooltip place="right" type="dark" effect="solid"/>
    </div>
  );
}

ReportHeader.propTypes = {
  name: React.PropTypes.string.isRequired,
  tip: React.PropTypes.string.isRequired,
};

export default ReportHeader;
