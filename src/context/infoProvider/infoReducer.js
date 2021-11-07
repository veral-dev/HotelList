import {FETCH_HOTELS, SHOW_LOADING, HIDE_LOADING} from '../types/info-types';

export default (state, action) => {
  switch (action.type) {
    case FETCH_HOTELS:
      return {
        ...state,
        hotels: action.payload,
      };

    case SHOW_LOADING:
      return {
        ...state,
        loading: true,
      };
    case HIDE_LOADING:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
