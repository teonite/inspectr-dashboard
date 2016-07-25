import React from 'react';
import { Link } from 'react-router';


function PaginationNavigation({page, maxPage}) {

  const previousLink = page != 1 ?
      <li>
        <Link to={`/?page=${page - 1}`} aria-label="Previous">
          <span aria-hidden="true">&larr;</span>
        </Link>
      </li> : <li><span>&larr;</span></li>;

  const previousLinkNumber = page != 1 ?
      <li><Link to={`/?page=${page - 1}`}>{page - 1}</Link></li> : '';

  const nextLinkNumber = page != maxPage ?
      <li><Link to={`/?page=${page + 1}`}>{page + 1}</Link></li> : '';

  const nextLink = page != maxPage ?
      <li>
        <Link to={`/?page=${page + 1}`} aria-label="Next">
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </li> : <li><span>&rarr;</span></li>;

  return (
    <ul className="pagination pagination-sm">
      {previousLink}
      {previousLinkNumber}
      <li className="active"><a href="#">{page}</a></li>
      {nextLinkNumber}
      {nextLink}
    </ul>
  );
}

PaginationNavigation.propTypes = {
  page: React.PropTypes.number.isRequired,
  maxPage: React.PropTypes.number.isRequired,
};

export default PaginationNavigation;
