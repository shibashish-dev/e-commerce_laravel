import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categories: [],
    loading: false,
    error: null,
};

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setCategories(state,action) {
            state.category = action.payload;
            state.loading = true;
            state.error = null;
        },
        clearCategories(state) {
            state.categories = [];
            state.loading = false;
            state.error = null;
        }
    },
});

export const {
    setCategories,
    clearCategories,
} = categorySlice.actions;

export default categorySlice.reducer;
