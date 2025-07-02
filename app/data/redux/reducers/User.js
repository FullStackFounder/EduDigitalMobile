import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  user: null,
  accessToken: '',
  sessionToken: '',
};

export const User = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    logOut: () => {
      return initialState;
    },
    logIn: (state, action) => {
      return {...state, ...action.payload};
    },
    verifyOTP: (state, action) => {
      const {user, accessToken, sessionToken} = action.payload;
      return {
        ...{isLoggedIn: true, user, accessToken, sessionToken},
        ...action.payload,
      };
    },
    refreshAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
  },
});

export const {logOut, logIn, verifyOTP, refreshAccessToken} = User.actions;

export default User.reducer;
