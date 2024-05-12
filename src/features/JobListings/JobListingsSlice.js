import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSampleJdJSON } from "../../api/jobsApi";

// Thunk modified to accept filters
export const fetchJobs = createAsyncThunk(
  "jobListings/fetchJobs",
  async (filters, { getState }) => {
    const response = await getSampleJdJSON(filters); // Modify getSampleJdJSON to accept and use filters
    return response;
  }
);

const jobListingsSlice = createSlice({
  name: "jobListings",
  initialState: {
    jobs: [],
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
    filters: {}, // Initial state for filters
  },
  reducers: {
    updateFilters: (state, action) => {
      state.filters = action.payload; // Update filters based on action
      // Optionally reset jobs or other parts of the state if necessary
      console.log("Updated filters:", state.filters);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Here we concatenate new jobs to the list, you might want to replace them depending on your pagination logic
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { updateFilters } = jobListingsSlice.actions;
export default jobListingsSlice.reducer;
