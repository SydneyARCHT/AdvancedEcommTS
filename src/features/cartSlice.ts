import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], 
  totalItems: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      state.totalItems = state.items.length; 
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
      state.totalItems = state.items.length; 
    },
    clearCart: (state) => {
      state.items = [];
      state.totalItems = 0; 
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

export const loadCartState = () => {
  try {
    const serializedState = localStorage.getItem('cartState');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Failed to load cart state from local storage', err);
    return undefined;
  }
};

