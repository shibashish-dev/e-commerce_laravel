import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    loading: false,
    error: null,
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts(state) {
            state.loading = true;
            state.error = null;
        },
        clearProducts(state) {
            state.products = [];
            state.loading = false;
            state.error = null;
        }
    },
});

export const {
    setProducts,
    clearProducts,
} = productSlice.actions;

export default productSlice.reducer;
