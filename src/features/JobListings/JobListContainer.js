import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchJobs } from "./JobListingsSlice";
import JobCard from "../../components/JobCard";
import useInfiniteScroll from "../../ hooks/useInfiniteScroll"; // Corrected the import path

const JobListContainer = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobListings.jobs);
  const hasMoreJobs = useSelector((state) => state.jobListings.hasMore); // Assuming this selector exists
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchJobs(page));
  }, [dispatch, page]);

  const fetchMoreListItems = useCallback(() => {
    if (hasMoreJobs) {
      // Only fetch more if there are more jobs to load
      setPage((prevPage) => prevPage + 1);
    }
  }, [hasMoreJobs]);

  const [isFetching, setIsFetching] = useInfiniteScroll(
    fetchMoreListItems,
    hasMoreJobs
  ); // Pass `hasMoreJobs` to control the hook

  useEffect(() => {
    if (isFetching && hasMoreJobs) {
      dispatch(fetchJobs(page))
        .then(() => setIsFetching(false))
        .catch((error) => {
          console.error("Failed to fetch jobs:", error);
          setIsFetching(false);
        });
    }
  }, [isFetching, dispatch, page, hasMoreJobs]);

  console.log("jobs", jobs.length);

  if (jobs.length === 0) {
    return <div>No jobs found.....</div>;
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        gap: "20px",
      }}
    >
      {jobs.map((job) => (
        <JobCard key={job.jdUid} job={job} />
      ))}
    </div>
  );
};

export default JobListContainer;
