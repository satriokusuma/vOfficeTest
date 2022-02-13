import axios from 'axios';

import {
  ROOM_LIST_REQUEST,
  ROOM_LIST_SUCCESS,
  ROOM_LIST_FAIL,
  ROOM_DETAILS_SUCCESS,
  ROOM_DETAILS_FAIL,
  ROOM_DETAILS_REQUEST,
} from '../constants/roomConstants';

export const listRooms = () => async (dispatch) => {
  try {
    dispatch({
      type: ROOM_LIST_REQUEST,
    });
    const res = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}rooms`);
    const { data } = res.data;
    dispatch({
      type: ROOM_LIST_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: ROOM_LIST_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const listRoomDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: ROOM_DETAILS_REQUEST,
    });
    const res = await axios.get(`http://localhost:5000/api/v1/rooms/${id}`);
    const { data } = res.data;
    dispatch({
      type: ROOM_DETAILS_SUCCESS,
      payload: data[0]
    });
  } catch (error) {
    dispatch({
      type: ROOM_DETAILS_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};