import React from "react";
import { CssBaseline, Container, Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";
import JobListContainer from "./features/JobListings/JobListContainer";
import JobFilters from "./components/JobFilters";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        maxWidth="lg"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <JobFilters />

        <JobListContainer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
