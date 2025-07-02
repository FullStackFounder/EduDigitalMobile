import {createSlice} from '@reduxjs/toolkit';
import theme from '../../../components/theme/theme';

const initialState = {
  defaultTheme: 'light',
  theme: theme.light,
};
export const Theme = createSlice({
  name: 'theme',
  initialState: initialState,
  reducers: {
    resetTheme: () => {
      return initialState;
    },
    updateTheme: (state, action) => {
      state.defaultTheme = action.payload;
      state.theme = action.payload === 'light' ? theme.light : theme.dark;
    },
  },
});

export const {resetCategories, updateTheme} = Theme.actions;

export default Theme.reducer;
