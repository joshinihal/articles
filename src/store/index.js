import { configureStore } from "@reduxjs/toolkit";

import articleReducer from "./article";
// import uiReducer from './ui-slice';

const store = configureStore({
  reducer: { article: articleReducer, 
    // ui: uiReducer
 },
});

export default store;
