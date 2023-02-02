import * as React from "react";
import { Paper, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import boba from "../img/boba.jpg";
import storeFront from "../img/storefront.jpg";
import featured from "../img/featured2.jpg";

import { Box } from "@mui/system";

const LandingPage = () => {
  return (
    <div>
      <Box
        style={{
          backgroundImage: `url(${storeFront})`,
          backgroundSize: "100% 100vh",
          backgroundRepeat: "no-repeat",
          marginBottom: "0",
        }}
        elevation={0}
        sx={{ height: "100vh", bgcolor: "#a1887f" }}
      ></Box>
      <Box
        sx={{
          height: "auto",
          width: "auto",
          bgcolor: "#a1887f",
          p: 10,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          elevation={12}
          sx={{
            width: "100%",
            borderRadius: "20px",
            mr: 10,
            bgcolor: "#a1887f",
          }}
        >
          <Typography
            variant="h2"
            sx={{ bgcolor: "#a1887f", mb: 8, borderBottomStyle: "double" }}
          >
            Current Promotions
          </Typography>

          <Paper elevation={12} sx={{ borderRadius: "20px" }}>
            <img
              src={featured}
              alt="green matcha latte with heart shaped milkfoam"
              style={{ height: "auto", width: "100%", borderRadius: "20px" }}
            />
          </Paper>
        </Box>
        <Paper
          elevation={12}
          sx={{ borderRadius: "20px", bgcolor: "#725b53", p: "20px" }}
        >
          <Typography fontFamily="rockwell" variant="h2" color="#d7ccc8">
            What Makes Us Unique?
          </Typography>

          <Typography variant="h6" fontFamily="rockwell" color="#d7ccc8">
            We are a family owned and operated business catering to the local
            community and serving fantastic dishes from around the world. Our
            ingredients are sourced locally when possible to ensure freshness
            and provide support for our local farmers. We take pride in the
            abundance of love and care that go into every meal we prepare for
            our customers. Aside from our deliouious multi-cultural food
            selection, our talented baristas also serve a variety of hand
            crafted beverages such as milk teas, espressos and smoothies as well
            as decadent cake desserts. Whether you are looking for Chicken
            Biryani or a Shrimp Pesto Pasta, Aywaa'h Cafe will have something to
            satisfy your cravings!
          </Typography>
          <Typography variant="h4" fontFamily="rockwell" color="#d7ccc8">
            Click here to see our menu
          </Typography>
          <Box sx={{ my: "10px" }}>
            <Button variant="contained" color="success" size="large">
              <Typography variant="h6">
                <Link
                  to="/menu"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  Menu
                </Link>
              </Typography>
            </Button>
          </Box>
        </Paper>
      </Box>
    </div>
  );
};

export default LandingPage;
