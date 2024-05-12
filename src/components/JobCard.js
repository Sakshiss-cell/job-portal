import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
} from "@mui/material";

const JobCard = ({ job }) => {
  const [showFullDetails, setShowFullDetails] = useState(false);

  const handleToggleDetails = () => {
    setShowFullDetails(!showFullDetails);
  };

  return (
    <Card
      style={{
        maxWidth: 340,
        backgroundColor: "white",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      <CardContent
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          padding: "16px",
        }}
      >
        <Typography
          variant="body2"
          style={{ color: "#aaa", marginBottom: "12px" }}
        >
          Posted 10 days ago
        </Typography>
        <CardMedia
          component="img"
          image={job.logoUrl}
          alt={job.companyName}
          style={{ width: 48, height: 48, marginBottom: "8px" }}
        />
        <Typography
          variant="subtitle1"
          style={{ fontWeight: "bold", color: "#333" }}
        >
          {job.jobRole} at {job.companyName}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          style={{ fontSize: "0.875rem" }}
        >
          Location: {job.location}
        </Typography>
        <Typography
          variant="body2"
          style={{ fontSize: "0.875rem", color: "green", marginTop: "4px" }}
        >
          Salary: {job.minJdSalary ? `$${job.minJdSalary}` : "N/A"} - $
          {job.maxJdSalary} {job.salaryCurrencyCode}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          style={{ fontSize: "0.875rem", marginTop: "4px" }}
        >
          Experience Required: {job.minExp} - {job.maxExp} years
        </Typography>
        <Typography
          variant="body2"
          style={{ marginTop: "8px", marginBottom: "8px" }}
        >
          {showFullDetails
            ? job.jobDetailsFromCompany
            : job.jobDetailsFromCompany.length > 100
            ? `${job.jobDetailsFromCompany.substring(0, 100)}...`
            : job.jobDetailsFromCompany}
        </Typography>
        {job.jobDetailsFromCompany.length > 100 && (
          <Button onClick={handleToggleDetails}>
            {showFullDetails ? "Show Less" : "View More"}
          </Button>
        )}
        <Button
          variant="contained"
          color="primary"
          href={job.jdLink}
          target="_blank"
          style={{ alignSelf: "start", marginTop: "auto" }}
        >
          Apply Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default JobCard;
