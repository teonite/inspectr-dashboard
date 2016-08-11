import React from 'react';


function CarouselToggle({onClick}) {
  return (
    <button type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false" autoComplete="off"
            onClick={onClick}>
      Single toggle
    </button>
  );
}

CarouselToggle.propTypes = {
  active: React.PropTypes.bool,
  onClick: React.PropTypes.func.isRequired,
};


export default CarouselToggle;
