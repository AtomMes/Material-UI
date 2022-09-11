import { Box } from "@mui/material";

import React, { useState } from "react";

export const MuiLayout = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          height: "100px",
          width: "100px",
          padding: "16px",
          "&:hover": {
            backgroundColor: "primary.light",
          },
        }}
      >
        MuiLayout
      </Box>
      <Box
        display="flex"
        height="100px"
        width="100px"
        bgcolor="secondary.light"
        p={2}//paddingna, inch grum enq bazmapatkac 8ov a cuyc talis, aysinqn es pahin 16px a paddingy
      ></Box>
    </>
  );
};
