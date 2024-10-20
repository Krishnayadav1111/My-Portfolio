import React from "react";
import { CircularProgress, Stack } from "@mui/material";

const Loader = ({ loading }) => {
  if (loading) {
    return (
      <Stack
        sx={{
          height: "100%",
          width: "100%",
          position:"fixed",
          top:0,
          left:0,
          bgcolor: "lightgray",
          opacity: "0.5",
          zIndex: 10000,
          overflow:"hidden",
        }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <CircularProgress style={{ color: "primary" }} size={100} />
      </Stack>
    );
  }
};

export default Loader;
