import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

const PopUpModel = ({
  open,
  handleClose,
  formData,
  handleChange,
  errors,
  handleSubmit,
}) => {
  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className="text-2xl !font-bold text-center text-blue-600">
          Refer a Friend
        </DialogTitle>
        <DialogContent className="p-6 bg-gradient-to-tl from-blue-500/50 to-white text-blue-600">
          <form className="md:w-96 flex flex-col gap-4 mt-2">
            <TextField
              label="Friend's Name"
              name="refereeName"
              value={formData.refereeName}
              onChange={handleChange}
              error={!!errors.refereeName}
              helperText={errors.refereeName}
              fullWidth
              className="mb-4 !mt-4"
            />
            <TextField
              label="Friend's Email"
              name="refereeEmail"
              value={formData.refereeEmail}
              onChange={handleChange}
              error={!!errors.refereeEmail}
              helperText={errors.refereeEmail}
              fullWidth
              className="mb-4"
            />
            <TextField
              label="Course Name"
              name="course"
              value={formData.course}
              onChange={handleChange}
              error={!!errors.course}
              helperText={errors.course}
              fullWidth
              className="mb-4"
            />
          </form>
        </DialogContent>
        <DialogActions className="p-4 bg-gradient-to-l from-blue-500/50 to-blue-200">
          <Button
            onClick={handleClose}
            color="error"
            className="bg-red-500 hover:bg-red-600 hover:text-white py-2 px-4 rounded"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            color="primary"
            className="bg-blue-500 hover:bg-blue-600 hover:text-white py-2 px-4 rounded"
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default PopUpModel;
