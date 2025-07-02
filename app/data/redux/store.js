import {combineReducers, configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import {logger} from 'redux-logger';

import Theme from './reducers/Theme';
import User from './reducers/User';
import Student from './reducers/Student';
import CreatePayment from './reducers/CreatePayment';

const rootReducer = combineReducers({
  theme: Theme,
  user: User,
  student: Student,
  createPayment: CreatePayment,
});

const configuration = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
};

const persistedReducer = persistReducer(configuration, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
  // middleware: getDefaultMiddleware => {
  //   return getDefaultMiddleware({
  //     serializableCheck: false,
  //   }).concat(logger);
  // },
});

export default store;

export const persistor = persistStore(store);
// persistor.purge();
