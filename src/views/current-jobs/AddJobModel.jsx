import React, { useContext } from "react";
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup"
import Dialog from "../../components/Dialog";
import { AppContext } from "../../ContextApi/AppContext";
import { createJob } from "../../API/Job";

const AddJobModel = ({open, onClose}) => {
  const { dispatchJob } = useContext(AppContext);

  const handleFormSubmit = async (values) => {
    const newJob = await createJob(values);
    dispatchJob({ type: "CREATE_JOB", payload: newJob });
    onClose()
  };

  const initialValues = {
    title: "",
    url: "",
    description: "",
    status: "",
    contactEmail: "",
    contactName: "",
  };

  const jobSchema = yup.object().shape({
    title: yup.string().required("required"),
    url: yup.string().required("required"),
    description: yup.string().required("required"),
    status: yup.string().required("required"),
    contactEmail: yup.string().required("required"),
    contactName: yup.string().required("required"),
  });

  return (
    <Dialog
      open={open}
      title="Create A Job"
    >
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={jobSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Title"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.title}
                name="title"
                error={!!touched.title && !!errors.title}
                helperText={touched.title && errors.title}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="URL"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.url}
                name="url"
                error={!!touched.url && !!errors.url}
                helperText={touched.url && errors.url}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Description"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.description}
                name="description"
                error={!!touched.description && !!errors.description}
                helperText={touched.description && errors.description}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Status"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.status}
                name="status"
                error={!!touched.status && !!errors.status}
                helperText={touched.status && errors.status}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Contact Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contactEmail}
                name="contactEmail"
                error={!!touched.contactEmail && !!errors.contactEmail}
                helperText={touched.contactEmail && errors.contactEmail}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Contact Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contactName}
                name="contactName"
                error={!!touched.contactName && !!errors.contactName}
                helperText={touched.contactName && errors.contactName}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="primary" variant="contained">
                Save Job
              </Button>
              <Button color="secondary" variant="contained" onClick={onClose}>
                Close
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Dialog>
  );
};

export default AddJobModel;
