import { createSlice } from '@reduxjs/toolkit';

const initialUserState = {
  token: '',
  uid: '',
  isLogIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    logIn(state, action) {
      const previousState = state;
      previousState.token = action.payload.token;
      previousState.uid = action.payload.uid;
      previousState.isLogIn = true;
    },
    logOut(state) {
      let logoutAuth = state;
      logoutAuth = {
        token: '',
        uid: '',
        isLogIn: false,
      };
      return logoutAuth;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
