import {
  RECERVATION_LIST_REQUEST,
  RECERVATION_LIST_SUCCESS,
  RECERVATION_LIST_FAIL,
} from '../constants/recervationConstants';

export const recervationListReducer = (state = { recervation: [] }, action) => {
  switch (action.type) {
    case RECERVATION_LIST_REQUEST:
      return { loading: true, recervation: [] };
    case RECERVATION_LIST_SUCCESS:
      return { loading: false, recervation: action.payload };
    case RECERVATION_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};