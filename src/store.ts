import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cartSlice'; 
import { loadCartState } from './features/cartSlice';

const localStorageMiddleware = store => next => action => {
  const result = next(action);
  localStorage.setItem('cartState', JSON.stringify(store.getState().cart));
  return result;
};

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    localStorageMiddleware,
  ],
  preloadedState: {
    cart: loadCartState(), 
  },
});