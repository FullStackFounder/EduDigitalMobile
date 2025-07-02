import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  selectedStudentId: null,
};

export const Student = createSlice({
  name: 'student',
  initialState: initialState,
  reducers: {
    resetInitialState: () => {
      return initialState;
    },
    selectStudentId: (state, action) => {
      state.selectedStudentId = action.payload;
    },
  },
});

export const {resetInitialState, selectStudentId} = Student.actions;

export default Student.reducer;
