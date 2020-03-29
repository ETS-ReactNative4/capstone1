/* eslint-disable no-console */
import axios from 'axios';
import getEnvVars from '../environment';

const { apiUrl } = getEnvVars();

// initial State
const user = {};

// Action Types
const GOT_USER = 'GOT_USER';
const SIGN_UP = 'SIGN_UP';
const LOG_OUT = 'LOG_OUT';
const UPDATE_USER = 'UPDATE_USER'

// Action Creator
const gotUser = userData => {
  return {
    type: GOT_USER,
    userData
  };
};
const gotSignUp = userData => {
  return {
    type: SIGN_UP,
    userData
  };
};
const gotLogOut = () => {
  return {
    type: LOG_OUT
  };
};

const updateUser = (userData) => {
  return {
    type: UPDATE_USER,
    userData
  }
}

// Thunk Creator
export const getUserThunk = authData => async dispatch => {
  try {
    const { data } = await axios.put(`${apiUrl}/auth/login`, authData);
    dispatch(gotUser(data));
  } catch (error) {
    console.error(error);
  }
};
export const signUp = userData => async dispatch => {
  try {
    const { data } = await axios.post(`${apiUrl}/auth/signup`, userData);
    dispatch(gotSignUp(data));
  } catch (error) {
    console.error(error);
  }
};
export const logOut = () => async dispatch => {
  try {
    await axios.put(`${apiUrl}/auth/logout`);
    dispatch(gotLogOut());
  } catch (error) {
    console.error(error);
  }
};

export const updateUserThunk = (id, info) => async dispatch => {
  try {
    const {data} = await axios.put(`${apiUrl}/api/users/${id}`, info);
    dispatch(updateUser(data))
  } catch(err) {
    console.error(err)
  }
}

const userReducer = (state = user, action) => {
  switch (action.type) {
    case UPDATE_USER: {
      return { ...action.userData };
    }
    case SIGN_UP: {
      return { ...action.userData };
    }
    case GOT_USER: {
      return { ...action.userData };
    }
    case LOG_OUT: {
      return user;
    }
    default:
      return state;
  }
};

export default userReducer;
