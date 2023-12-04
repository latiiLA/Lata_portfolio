import { Box, Grid, Paper, TextField, Typography } from "@mui/material";
import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { Formik, useFormik } from "formik";
import { FormControl, FormErrorMessage } from "@chakra-ui/react";
import * as yup from "yup";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1c5wkql",
        "template_wzqx2ex",
        form.current,
        "90T_kDHAIzCxvHAJE"
      )
      .then(
        (result) => {
          // console.log(result.text);
          alert("Message successfully sent! Thank you for reaching out to us!");
        },
        (error) => {
          // console.log(error.text);
        }
      );
  };
  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const validationSchema = yup.object({
    name: yup.string().required("Required"),
    email: yup.string().email("Invalid email address").required("Required"),
    subject: yup.string().required("Required"),
    message: yup
      .string()
      .min(20, "Must be 25 characters at minimum")
      .required("Required"),
  });

  const formik = useFormik({
    initialValues: initialValues,

    validationSchema: validationSchema,

    onSubmit: (values) => {
      console.log(values);
      // sendEmail();
    },
  });
  return (
    <Grid>
      <Paper
        elevation={20}
        sx={{
          padding: "30px 20px",
          width: 400,
          margin: "0 auto",
        }}
      >
        <Grid>
          <form
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={formik.handleSubmit && sendEmail}
            ref={form}
          >
            <FormControl
              isInvalid={!!formik.errors.name && formik.touched.name}
            >
              <TextField
                fullWidth
                variant="standard"
                margin="dense"
                label="Name"
                placeholder="Enter Name"
                type="text"
                name="name"
                {...formik.getFieldProps("name")}
              />
              <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
            </FormControl>
            <FormControl
              isInvalid={!!formik.errors.email && formik.touched.email}
            >
              <TextField
                fullWidth
                variant="standard"
                margin="dense"
                label="Email"
                placeholder="Enter Email"
                type="email"
                name="email"
                {...formik.getFieldProps("email")}
              />
              <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
            </FormControl>
            <FormControl
              isInvalid={!!formik.errors.subject && formik.touched.subject}
            >
              <TextField
                fullWidth
                variant="standard"
                margin="dense"
                label="Subject"
                placeholder="Enter Subject"
                type="text"
                name="subject"
                {...formik.getFieldProps("subject")}
              />
              <FormErrorMessage>{formik.errors.subject}</FormErrorMessage>
            </FormControl>
            <FormControl
              isInvalid={!!formik.errors.message && formik.touched.message}
            >
              <TextField
                fullWidth
                variant="standard"
                multiline
                rows={7}
                rowsmax={15}
                margin="dense"
                label="Message"
                placeholder="Enter Message"
                type="text"
                name="message"
                {...formik.getFieldProps("message")}
              />
              <FormErrorMessage>{formik.errors.message}</FormErrorMessage>
            </FormControl>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "1rem 0rem",
              }}
            >
              <Button
                //   variant="contained"
                color="primary"
                type="submit"
                disabled={!(formik.isValid && formik.dirty)}
              >
                Submit
              </Button>
            </Box>
          </form>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Contact;
