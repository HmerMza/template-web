import { Stack, TextField, Typography } from "@mui/material";
import React from "react";

const InputwhitLabel = ({ label, type = "text", placeholder }) => {
  return (
    <>
      <Stack>
        <Typography fontSize={32} fontWeight={300}>
          {label}
        </Typography>
        <TextField placeholder={placeholder} type={type} />
      </Stack>
    </>
  );
};

export default InputwhitLabel;
