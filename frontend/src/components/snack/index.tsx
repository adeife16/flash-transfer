import React from "react";
import { useAuth } from "../../Context/globaltContext";
import { Button, IconButton, Snackbar } from "@mui/material";

const snack = () => {
  const { handleClose, action, open, setOpen, error, setError }: any = useAuth;
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      message={error}
      action={action}
    />
  );
};
export default snack;
