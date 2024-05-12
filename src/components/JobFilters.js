import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { TextField, MenuItem, Box, Typography, Button } from "@mui/material";
import {
  fetchJobs,
  updateFilters,
} from "../features/JobListings/JobListingsSlice";

const JobFilters = () => {
  const dispatch = useDispatch();

  const initialFilters = {
    minExperience: "",
    companyName: "",
    location: "",
    jobRole: "",
    minBasePay: "",
  };

  const [filters, setFilters] = useState(initialFilters);

  useEffect(() => {
    if (Object.values(filters).some((value) => value !== "")) {
      dispatch(updateFilters(filters));
      dispatch(fetchJobs(filters));
    }
  }, [filters, dispatch]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleClearFilters = () => {
    setFilters(initialFilters);
    dispatch(updateFilters(initialFilters));
    dispatch(fetchJobs());
  };

  return (
    <Box
      sx={{
        my: 4,
        mx: 2,
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: { xs: "stretch", sm: "center" },
        gap: 2,
      }}
    >
      <TextField
        select
        label="Minimum Experience"
        name="minExperience"
        value={filters.minExperience}
        onChange={handleChange}
        fullWidth
      >
        <MenuItem value="">Any</MenuItem>
        <MenuItem value="1">1+ Years</MenuItem>
        <MenuItem value="3">3+ Years</MenuItem>
        <MenuItem value="5">5+ Years</MenuItem>
      </TextField>

      <TextField
        select
        label="Company Name"
        name="companyName"
        value={filters.companyName}
        onChange={handleChange}
        fullWidth
      >
        <MenuItem value="">Any</MenuItem>
        <MenuItem value="Google">Google</MenuItem>
        <MenuItem value="Apple">Apple</MenuItem>
        <MenuItem value="Facebook">Facebook</MenuItem>
      </TextField>

      <TextField
        select
        label="Location"
        name="location"
        value={filters.location}
        onChange={handleChange}
        fullWidth
      >
        <MenuItem value="">Any</MenuItem>
        <MenuItem value="Remote">Remote</MenuItem>
        <MenuItem value="On-site">On-site</MenuItem>
      </TextField>

      <TextField
        select
        label="Job Role"
        name="jobRole"
        value={filters.jobRole}
        onChange={handleChange}
        fullWidth
      >
        <MenuItem value="">Any</MenuItem>
        <MenuItem value="Frontend">Frontend Developer</MenuItem>
        <MenuItem value="Backend">Backend Developer</MenuItem>
        <MenuItem value="Full-stack">Full-stack Developer</MenuItem>
      </TextField>

      <TextField
        label="Minimum Base Pay ($)"
        name="minBasePay"
        value={filters.minBasePay}
        onChange={handleChange}
        type="number"
        fullWidth
      />

      <Button variant="contained" color="primary" onClick={handleClearFilters}>
        Clear Filters
      </Button>
    </Box>
  );
};

export default JobFilters;
