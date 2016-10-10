import {TOGGLE_CAROUSEL, FILTER_PROJECTS} from './actionTypes';


const initialState = {
  carouselActive: false,
};

export function dashboardPageReducer(state = initialState, action){
  switch (action.type){
    case TOGGLE_CAROUSEL:
      return Object.assign({}, state, {carouselActive: !state.carouselActive});
    case FILTER_PROJECTS:
      return Object.assign({}, state, {projectFilter: action.payload});
    default:
      return state;
  }
}
