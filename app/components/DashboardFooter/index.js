import React from 'react';
import PaginationNavigation from "components/PaginationNavigation";

function DashboardFooter(props) {
  const {carouselToggleOnClick, carouselActive} = props;

  return (
    <footer>
      <div className="footer-wrapper">
        <div className="row">
          <div className="col-sm-4 col-xs-12 text-left"><span className="subtext">Inspectr ver. 0.3 / build G384H843F</span></div>
          <div className="col-sm-4 col-xs-12">
            <PaginationNavigation startStopButtonOnClick={carouselToggleOnClick}
                                  startStopRunning={carouselActive}
                                  {...props} />
          </div>
          <div className="col-sm-4 col-xs-12 text-right">
            <a href="www.teonite.com" target="_self" className="tnt-logo">TEONITE</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

DashboardFooter.propTypes = {
  page: React.PropTypes.number,
  maxPage: React.PropTypes.number,
  carouselActive: React.PropTypes.bool,
  carouselToggleOnClick: React.PropTypes.func,
};

export default DashboardFooter;
