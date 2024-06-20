"use client";
import { Box, Button, IconButton, InputBase, Paper, Typography, useTheme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const HeroSection = () => {
  // const theme = useTheme();
  return (
    <div>
      <div className="min-h-screen flex flex-col items-center justify-center pb-10">
        <Typography color="text.secondary" variant="h3" className="mb">
          I Grow By Helping People in Need
        </Typography>
        <div className="flex flex-row justify-center items-center mt-10 rounded-lg">
          <Paper
            className=""
            component="form"
            sx={{ p: "10px 4px", display: "flex", alignItems: "center", width: 400, borderRadius: "10px 0 0 10px" }}
          >
            {/* <IconButton sx={{ p: "0px" }} aria-label="menu"></IconButton> */}
            <InputBase className="shadow-none" sx={{ ml: 0, flex: 1 }} placeholder="Search here...." inputProps={{ "aria-label": "search" }} />
            {/* <IconButton type="button" aria-label="search"></IconButton> */}
          </Paper>
          <Button
            variant="contained"
            color="secondary"
            // aria-label="search"
            sx={{
              padding: "14px 45px",
              borderRadius: "0px 10px 10px 0px",
              // color: "text.secondary",
              // backgroundColor: "info",
            }}
            // color="error"
            className=""
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
