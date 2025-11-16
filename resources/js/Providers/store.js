import { configureStore } from '@reduxjs/toolkit';
import userReducer from './Slices/userSlice';
import categoryReucer from './Slices/categorySlice';
import productReducer from './Slices/productSlice';
export const store = configureStore({
  reducer: {
    user: userReducer,
    category: categoryReucer,
    product: productReducer,
  },
});
