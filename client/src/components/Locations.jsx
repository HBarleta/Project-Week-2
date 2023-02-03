import React from "react";
import { Box, Stack } from "@mui/system";
import {
  Paper,
  Typography,
  Grid,
  IconButton,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
const Locations = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ["Gochi Hand"],
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: "#f9e8e6", pb: 18 }}>
        <Typography fontSize="5rem">Location</Typography>
        <Grid container>
          <Grid
            item
            xs={12}
            xl={6}
            sx={{
              p: 5,
              maxWidth: "100vw",
              width: "100%",
              maxHeight: "75vh",
              height: "100vh",
            }}
          >
            <Paper sx={{ width: "100%", height: "100%" }} elevation={10}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242.00029496630665!2d121.32575074735247!3d13.958324561325153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd4150604fffc3%3A0x2894d941271ac123!2zQXl3YWHigJlo!5e0!3m2!1sen!2sus!4v1675379603771!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: "0" }}
                allowfullscreen="true"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="TiaongLocation"
              ></iframe>
            </Paper>
          </Grid>
          <Grid item xs={12} xl={6} sx={{ p: 5 }}>
            <Paper
              component={Stack}
              elevation={10}
              sx={{
                direction: "column",
                justifyContent: "center",
                height: "100%",
                gap: 5,
                bgcolor: "#795548",
              }}
            >
              <Typography variant="h2" color="white">
                Tiaong Quezon Location Details
              </Typography>
              <Typography variant="h5" color="white">
                Address: X85G+976, Tiaong, Quezon, Philippines
              </Typography>
              <Typography variant="h5" color="white">
                Phone: +63 915 408 8292
              </Typography>
              <Typography variant="h5" color="white">
                Hours: M-Sun 11am - 10pm
              </Typography>
              <Typography variant="h5" color="white">
                Accepted Payments: Visa/Mastercard, Cash
              </Typography>
              <Box sx={{}}>
                <Typography variant="h3" color="white">
                  Follow Us!
                </Typography>
                <IconButton href="https://www.facebook.com/AywaahCafe">
                  <FacebookIcon fontSize="large"></FacebookIcon>
                </IconButton>
                {" | "}
                <IconButton>
                  <InstagramIcon
                    href="https://www.instagram.com/"
                    fontSize="large"
                  ></InstagramIcon>
                </IconButton>
                {" | "}
                <IconButton href="https://twitter.com/explore">
                  <TwitterIcon fontSize="large"></TwitterIcon>
                </IconButton>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default Locations;

// google map api key
// AIzaSyC-DcPROZ96kemYZS6UjEwg4HhUrrvW_-E
