/* eslint-disable no-console */
import axios from 'axios';
import getEnvVars from '../environment';

const { apiUrl } = getEnvVars();

// initial State
const initialState = {
  userId: null,
  friends: [],
  singlefriend: {},
  singleFriendLoading: true
};

// Action Types
const GOT_FRIENDS = 'GOT_FRIENDS';
const GOT_ONE_FRIEND = 'GOT_ONE_FRIEND';

// Action Creator
const gotFriends = friends => {
  return {
    type: GOT_FRIENDS,
    friends
  };
};

const gotSingleFriend = friend => {
  return {
    type: GOT_ONE_FRIEND,
    friend
  };
};

// Thunk Creator
export const getFriendsThunk = userId => async dispatch => {
  try {
    // for now, i'm making an axios call to my computer's ip address, with
    // the server running on it (npm start within back-end), and I've hardcoded
    // id of 1 since we don't have a user logged in on the state yet.
    const tempUserId = 1;
    const { data } = await axios.get(`${apiUrl}/api/friends/${tempUserId}`);

    // const {data} = await axios.get(`/api/friends/${userId}`);

    dispatch(gotFriends(data));
  } catch (error) {
    console.error(error);
  }
};

export const getSingleFriendThunk = id => async dispatch => {
  try {
    const { data } = await axios.get(`${apiUrl}/api/users/${id}`);

    dispatch(gotSingleFriend(data));
  } catch (error) {
    console.error(error);
  }
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_FRIENDS: {
      return { ...state, friends: action.friends };
    }
    case GOT_ONE_FRIEND: {
      return { ...state, singlefriend: action.friend, singleFriendLoading: false }
    }
    default:
      return state;
  }
};

export default userReducer;
