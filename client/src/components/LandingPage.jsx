import * as React from "react";
import { Paper, Typography, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import storeFront from "../img/storefront.jpg";
import featured from "../img/featured2.jpg";
import { Box } from "@mui/system";

const LandingPage = () => {
  return (
    <div>
      {/* top half of page with banner */}
      <Grid container sx={{ bgcolor: "#a1887f" }}>
        <Grid
          item
          xs={12}
          style={{
            backgroundImage: `url(${storeFront})`,
            backgroundSize: "100vw 100vh",
            backgroundRepeat: "no-repeat",
            marginBottom: "0",
          }}
          elevation={0}
          sx={{ height: "100vh", bgcolor: "#a1887f" }}
        ></Grid>
        {/* container for middle section */}
        <Grid xs={12} sx={{ bgcolor: "#a1887f", pb: 5 }}>
          <Typography fontSize="4rem" sx={{ bgcolor: "#a1887f" }}>
            Current Promotions
          </Typography>
          <Grid
            item
            xs={9}
            component={Box}
            sx={{ margin: "auto", bgcolor: "#a1887f", mt: 5 }}
          >
            <img
              src={featured}
              alt="Featured promotion for free coffee upsize"
              style={{
                height: "50vh",
                width: "50wh",
                borderRadius: "20px",
                maxWidth: "100%",
                maxHeight: "100%",
                position: "relative",
              }}
            />
          </Grid>
        </Grid>
        <Grid xs={8} sx={{ bgcolor: "#a1887f", margin: "auto" }}>
          <Grid
            item
            xs={12}
            component={Box}
            sx={{ margin: "auto", bgcolor: "#a1887f", pb: 9 }}
          >
            <Paper
              elevation={12}
              sx={{ borderRadius: "20px", bgcolor: "#725b53", p: "20px" }}
            >
              <Typography fontFamily="rockwell" fontSize="3rem" color="#d7ccc8">
                What Makes Us Unique?
              </Typography>
              <Typography fontSize="1em" fontFamily="rockwell" color="#d7ccc8">
                We are a family owned and operated business catering to the
                local community and serving fantastic dishes from around the
                world. Our ingredients are sourced locally when possible to
                ensure freshness and provide support for our local farmers. We
                take pride in the abundance of love and care that go into every
                meal we prepare for our customers. Aside from our deliouious
                multi-cultural food selection, our talented baristas also serve
                a variety of hand crafted beverages such as milk teas, espressos
                and smoothies as well as decadent cake desserts. Whether you are
                looking for Chicken Biryani or a Shrimp Pesto Pasta, Aywaa'h
                Cafe will have something to satisfy your cravings!
              </Typography>
              <Typography variant="h4" fontFamily="rockwell" color="#d7ccc8">
                Click here to see our menu
              </Typography>
              <Box sx={{ my: "10px" }}>
                <Button variant="contained" color="error" size="large">
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
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default LandingPage;
