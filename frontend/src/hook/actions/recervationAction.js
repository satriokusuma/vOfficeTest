import axios from 'axios';

import {
  RECERVATION_LIST_REQUEST,
  RECERVATION_LIST_SUCCESS,
  RECERVATION_LIST_FAIL,
} from '../constants/recervationConstants';

export const listRecervation = () => async (dispatch) => {
  try {
    dispatch({
      type: RECERVATION_LIST_REQUEST,
    });
    const res = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}roomusage`);
    const { data } = res.data;
    dispatch({
      type: RECERVATION_LIST_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: RECERVATION_LIST_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};