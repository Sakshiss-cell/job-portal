import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../component/styles/theme";
import JobListContainer from "../component/features/JobListings/JobListContainer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ margin: "auto", maxWidth: 1200 }}>
        <JobListContainer />
      </div>
    </ThemeProvider>
  );
}

export default App;
