import {TOGGLE_CAROUSEL} from './actionTypes';


const initialState = {
  carouselActive: false,
};

export function dashboardPageReducer(state = initialState, action){
  switch (action.type){
    case TOGGLE_CAROUSEL:
      return Object.assign({}, state, {carouselActive: !state.carouselActive});
    default:
      return state;
  }
}