import { createSlice } from "@reduxjs/toolkit";

const initialArticleState = { items: [] };

const articleSlice = createSlice({
  name: "article",
  initialState: initialArticleState,
  reducers: {
    addArticles: (state, action) => {
      state.items = action.payload.items;
    },
  },
});

export const articleActions = articleSlice.actions;
export default articleSlice.reducer;
