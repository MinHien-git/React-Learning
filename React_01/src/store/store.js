import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../feature/counterSlice";
export default configureStore({
  reducer: {
    counter: counterReducer, // Add the counter reducer to the store
  },
});
