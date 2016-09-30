import React from 'react';
import { Link } from 'react-router';


class DetailsHeader extends React.Component {
  render() {
    return (
      <div className="header-wrapper">
        <div className="row">
          <div className="col-xs-12 col-lg-2 col-lg-push-5 p-0">
            <div className="logo">
              <span className="rect" />
              <h1>INSPECTR</h1>
            </div>
          </div>
          <div className="col-xs-8 col-lg-5 col-lg-pull-2 left-col arrow-wrapper">
            <div className="container-fluid arrow-nav">
              <a className="arrow">
                <h3>Previous</h3>
                <span className="circle"><i className="glyphicon glyphicon-menu-left" /></span>
              </a>
              <Link to='/' className="arrow">
                <h3>Back</h3>
                <span className="circle gray"><i className="glyphicon glyphicon-menu-up" /></span>
              </Link>
            </div>
          </div>
          <div className="col-xs-4 col-lg-5 right-col arrow-wrapper">
            <div className="container-fluid arrow-nav right">
              <a className="arrow">
                <span className="circle"><i className="glyphicon glyphicon-menu-right" /></span>
                <h3>Next</h3>
              </a>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default DetailsHeader;
