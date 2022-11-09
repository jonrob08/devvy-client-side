import { useContext } from "react";
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup"
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header/Header";
import { createJob } from "../../API/Job";
import { AppContext } from "../../ContextApi/AppContext";

const CreateJob = () => {

    // mui media query
    const isNonMobile = useMediaQuery("(min-width:600px)")
    const { dispatchJob } = useContext(AppContext);

    const handleFormSubmit = async (values) => {
        const newJob = await createJob(values)
        console.log(values)
        dispatchJob({type: "CREATE_JOB", payload: newJob })
    }

    const initialValues = {
        title:"",
        url:"",
        description:"",
        status:"",
        contactEmail:"",
        contactName:""
    }

    // using yup for form validation
    // https://www.npmjs.com/package/yup
    const jobSchema = yup.object().shape({
        title: yup.string().required('required'),
        url: yup.string().required('required'),
        description: yup.string().required('required'),
        status: yup.string().required('required'),
        contactEmail: yup.string().required('required'),
        contactName: yup.string().required('required'),
    })

    return (
        <Box m="20px">
            <Header title="Create A Job" subtitle="Create a New Job" />

            <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={jobSchema}
            >
                {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <Box 
                            display="grid" 
                            gap="30px" 
                            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                            sx={{
                                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" }
                            }}
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
                            <Button type="submit" color="secondary" variant="contained">
                                Create New Job
                            </Button>
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    )
}

export default CreateJob