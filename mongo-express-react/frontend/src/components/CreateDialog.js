import React from "react";
import { Dialog, Typography } from "@material-ui/core";
import Form from "./Form";

const CreateDialog = ({ createDialogOpen, setCreateDialogOpen }) => {
  return (
    <Dialog
      open={createDialogOpen}
      onClose={() => {
        setCreateDialogOpen(false);
      }}
    >
      <Typography variant="h4">Create Recipe</Typography>
      <Form />
    </Dialog>
  );
};

export default CreateDialog;
