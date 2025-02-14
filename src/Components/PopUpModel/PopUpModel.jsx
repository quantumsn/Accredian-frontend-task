import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";

const PopUpModel = ({
  open,
  handleClose,
  formData,
  handleChange,
  errors,
  handleSubmit,
  courses,
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
            <FormControl fullWidth className="mb-4" error={!!errors.course}>
              <InputLabel>Course Name</InputLabel>
              <Select
                label="Course Name"
                name="course"
                value={formData.course}
                onChange={handleChange}
              >
                {courses.map((course, idx) => (
                  <MenuItem key={idx} value={course.name}>
                    {course.name}
                  </MenuItem>
                ))}
              </Select>
              {errors.course && (
                <span className="text-red-500 text-sm">{errors.course}</span>
              )}
            </FormControl>
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
