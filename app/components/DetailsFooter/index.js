import React from 'react';


class DetailsFooter extends React.Component {
  render() {
    return (
      <footer>
        <div className="footer-wrapper">
          <div className="row">
            <div className="col-sm-4 col-xs-12 text-left"><span className="subtext">Inspectr ver. 0.3 / build G384H843F</span></div>
            <div className="col-sm-offset-4 col-sm-4 col-xs-12 text-right">
              <a href="www.teonite.com" target="_self" className="tnt-logo">TEONITE</a>
            </div>
          </div>
        </div>
      </footer>

    );
  }
}

export default DetailsFooter;
