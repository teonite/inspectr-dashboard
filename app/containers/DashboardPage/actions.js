import {TOGGLE_CAROUSEL, FILTER_PROJECTS} from './actionTypes';
import { browserHistory } from 'react-router';

export function rotatePage(page, maxPage){
  if (maxPage == 1)
    return;

  if (page == maxPage)
    browserHistory.push('?page=1');
  else
    browserHistory.push(`?page=${page + 1}`);
}

function toggleCarouselAction(){
  return {
    type: TOGGLE_CAROUSEL,
  };
}

export function toggleCarousel(){
  return (dispatch) => {
    dispatch(toggleCarouselAction());
  };
}

export function filterProjects(query) {
  return {
    type: FILTER_PROJECTS,
    payload: query
  };
}
