import React, { useState } from "react";
import {
  TextField,
  Button,
  Snackbar,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import Link from "next/link";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to backend

    // Clear form fields
    setFormData({ name: "", email: "", message: "" });
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Grid
      sx={{
        background: `url('/static/images/dots.png')`,
      }}
    >
      <Grid
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        py={5}
      >
        <Grid container spacing={2} maxWidth={"lg"} alignItems="center">
          <Grid
            item
            md={7}
            xs={12}
            display={"flex"}
            justifyContent={"center"}
            flexDirection={"column"}
            //   alignItems={"center"}
            gap={2}
          >
            <Box
              component={"img"}
              src={"/static/images/header.png"}
              alt="Contact"
              maxWidth={500}
            />
            <Grid display={"flex"} flexDirection={"column"} gap={3}>
              <Typography variant="h4" color={"primary"} fontWeight={"bold"}>
                Your Dream House is Waiting For You
              </Typography>
              <Typography>Are You Ready to Buy Dream Flat.</Typography>
              <Link href={"tel:+971xxxxxxx"}>
                <Button
                  onClick={handleSubmit}
                  variant="contained"
                  color="primary"
                >
                  Call Now
                </Button>
              </Link>
            </Grid>
          </Grid>
          <Grid
            item
            md={5}
            xs={12}
            display={"flex"}
            gap={3}
            flexDirection={"column"}
          >
            <Grid>
              <Typography variant="h4" color={"primary"} fontWeight={"bold"}>
                Contact Form
              </Typography>
            </Grid>
            <Grid>
              <TextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                required
              />
            </Grid>
            <Grid>
              <TextField
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                type="email"
                required
              />
            </Grid>
            <Grid>
              <TextField
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                multiline
                rows={4}
                required
              />
            </Grid>
            <Grid>
              <Button
                onClick={handleSubmit}
                variant="contained"
                color="primary"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          message="Message sent successfully!"
        />
      </Grid>
    </Grid>
  );
};

export default ContactForm;
