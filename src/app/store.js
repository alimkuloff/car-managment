import { configureStore } from '@reduxjs/toolkit';
import { carsApi } from '../services/carsApi';

const store = configureStore({
  reducer: {
    [carsApi.reducerPath]: carsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(carsApi.middleware),
});

export default store;
