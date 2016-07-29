import React from 'react';
import MiniProjectBox from 'components/MiniProjectBox';


function TopProjects({topProjects}) {

  return (
    <div className="top-projects">
      <ul>
        <li>
          <div className="header-title">
            <h2>Top projects:</h2>
            <span className="rect top"></span>
            <span className="rect bottom"></span>
            <span className="rect-vertical"></span>
          </div>
        </li>
        {topProjects.map((project, index) =>
          <MiniProjectBox project={project} place={index + 1} key={index}></MiniProjectBox>
        )}
      </ul>
    </div>
  );
}

TopProjects.propTypes = {
  topProjects: React.PropTypes.array.isRequired,
};

export default TopProjects;
