import { configureStore } from "@reduxjs/toolkit";
import jobListingsReducer from "../features/JobListings/JobListingsSlice";

export default configureStore({
  reducer: {
    jobListings: jobListingsReducer,
  },
});
