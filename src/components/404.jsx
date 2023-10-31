import { Stack, Typography } from "@mui/material";
import React from "react";

const NotFound = () => {
  return (
    <>
      <Stack
        sx={{
          width: "100vw",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
          boxSizing: "border-box",
        }}
      >
        <Typography variant="h3">
          Upps! No se puedo encontrar la pagina{" "}
        </Typography>
      </Stack>
    </>
  );
};

export default NotFound;
