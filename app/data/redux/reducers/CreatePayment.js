import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: [],
  total: 0,
  paymentMethod: null,
  detail: null,
};

export const CreatePayment = createSlice({
  name: 'createPayment',
  initialState: initialState,
  reducers: {
    resetCreatePayment: () => {
      return initialState;
    },
    addPayment: (state, action) => {
      const newPayment = [...state.data, ...action.payload];
      state.data = newPayment;

      let total = 0;
      newPayment.forEach(e => {
        total += e.paid;
      });

      state.total = total;
    },
    removePayment: (state, action) => {
      const currentPayment = state.data;
      console.log('>> removePayment: ', action.payload);
      const newPayment = currentPayment.filter(e => e.id !== action.payload);
      state.data = newPayment;

      let total = 0;
      newPayment.forEach(e => {
        total += e.paid;
      });

      state.total = total;
    },
    selectPaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
    },
  },
});

export const {
  resetCreatePayment,
  addPayment,
  removePayment,
  selectPaymentMethod,
} = CreatePayment.actions;

export default CreatePayment.reducer;
