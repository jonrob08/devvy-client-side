import React from "react";
import {
  Dialog as MuiDialog,
  DialogTitle,
  DialogActions,
  DialogContent
} from "@mui/material";

const Dialog = (props) => {
  const { open, title, children, actions } = props;
  return (
    <MuiDialog
      sx={{ "& .MuiDialog-paper": { width: "80%", maxHeight: 435 } }}
      maxWidth="xs"
      open={open}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      {actions && <DialogActions>{actions}</DialogActions>}
    </MuiDialog>
  );
};

export default Dialog;
