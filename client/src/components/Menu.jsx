import React, { useState, useEffect } from "react";
import axios from "axios";
import { createTheme, Paper, ThemeProvider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import menuBackground from "../img/background2.jpg";
import wings from "../img/hotwings.jpg";
import pasta from "../img/shrimp_pasta.jpg";
import chickenB from "../img/chicken_biryani.jpg";
import boba from "../img/boba.jpg";
import matcha from "../img/matcha_latte.jpg";
const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [starters, setStarters] = useState([]);
  const [pastaNoodles, setPastaNoodles] = useState([]);
  const [lunchDinner, setLunchDinner] = useState([]);
  const [breakfast, setBreakfast] = useState([]);
  const [sandwiches, setSandwiches] = useState([]);
  const [hotBev, setHotBev] = useState([]);
  const [coldBev, setColdBev] = useState([]);
  const [frappes, setFrappes] = useState([]);
  const [smoothies, setSmoothies] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const [milkTea, setMilkTea] = useState([]);
  const [otherBev, setOtherBev] = useState([]);
  const [italianSoda, setItalianSoda] = useState([]);
  useEffect(() => {
    console.log("Use Effect is working!");
    axios
      .get(`http://127.0.0.1:8000/api/cafe/getall`)
      .then((res) => {
        console.log("Data incomming from get all request", res);
        setMenuItems(res.data);
        categorize(res.data);
      })
      .catch((err) =>
        console.log("This is an error from menu component get all request", err)
      );
  }, []);

  // categorizing all incomming data from Axios call for ALL menu items
  // NEEDS TO BE REFACTORED!!
  const categorize = (itemsArr) => {
    let startersArr = [];
    let pastaArr = [];
    let lunchArr = [];
    let bfastArr = [];
    let sandArr = [];
    let hotBArr = [];
    let coldBArr = [];
    let frappeArr = [];
    let smoothArr = [];
    let dessertsArr = [];
    let milkArr = [];
    let otherBArr = [];
    let italianArr = [];

    // this map function on itemsArr will seperate all items by category and push them into their specific arrays
    itemsArr.map((item) => {
      if (item.category === "Starters") {
        return startersArr.push(item);
      } else if (item.category === "Pasta and Noodles") {
        return pastaArr.push(item);
      } else if (item.category === "Lunch/Dinner") {
        return lunchArr.push(item);
      } else if (item.category === "All Day Breakfast") {
        return bfastArr.push(item);
      } else if (item.category === "Sandwhiches/Shawarma") {
        return sandArr.push(item);
      } else if (item.category === "Hot Beverages") {
        return hotBArr.push(item);
      } else if (item.category === "Cold Beverages") {
        return coldBArr.push(item);
      } else if (item.category === "Frappes") {
        return frappeArr.push(item);
      } else if (item.category === "Smoothies") {
        return smoothArr.push(item);
      } else if (item.category === "Desserts") {
        return dessertsArr.push(item);
      } else if (item.category === "Milk Tea") {
        return milkArr.push(item);
      } else if (item.category === "Other Beverages") {
        return otherBArr.push(item);
      } else if (item.category === "Italian Soda") {
        return italianArr.push(item);
      }
    });

    // after all items are categorized, useState is called to add each array to their matching  category
    setStarters(startersArr);
    setPastaNoodles(pastaArr);
    setLunchDinner(lunchArr);
    setBreakfast(bfastArr);
    setSandwiches(sandArr);
    setHotBev(hotBArr);
    setColdBev(coldBArr);
    setFrappes(frappeArr);
    setSmoothies(smoothArr);
    setDesserts(dessertsArr);
    setMilkTea(milkArr);
    setOtherBev(otherBArr);
    setItalianSoda(italianArr);
  };
  // default font set here with themeProvider
  const theme = createTheme({
    typography: {
      fontFamily: ["Gochi Hand"],
    },
  });

  return (
    <ThemeProvider theme={theme}>
      {/* box containing backgound image */}
      <Box
        sx={{
          py: 7,
          bgcolor: "white",
          backgroundImage: `url(${menuBackground})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Paper
          elevation={12}
          sx={{
            margin: "auto",
            width: "90%",
            p: 5,
            bgcolor: "#f9ccbb",
            borderRadius: "60px",
          }}
        >
          <Typography variant="h1">International Dishes</Typography>
          {/* This box holds all of the dishes items */}
          <Box>
            {/* Top row Food menu */}
            <Box
              sx={{
                display: "flex",
                mt: 2,
                justifyContent: "space-evenly",
              }}
            >
              {/* Starters section  */}
              <Box>
                <Typography variant="h2">Starters</Typography>
                <Box sx={{ m: 2, width: "100%" }}>
                  <table className="table">
                    <thead>
                      <th></th>
                      <th></th>
                    </thead>
                    {/* each array holding each category of item is mapped over and displayed here */}
                    {starters.map((one) => {
                      return (
                        <tr>
                          <td>
                            <Typography fontSize="2em">{one.name}</Typography>
                          </td>
                          <td>
                            <Typography fontSize="2em">
                              ₱ {one.price}
                            </Typography>
                          </td>
                        </tr>
                      );
                    })}
                  </table>
                </Box>
              </Box>
              {/* image box for wings */}
              <Box sx={{ width: "300px", pt: 5, mx: 2 }}>
                <img
                  src={wings}
                  alt="hot wings"
                  style={{ width: "100%", borderRadius: "15%" }}
                />
              </Box>
              {/* Pasta and noodles section*/}
              <Box sx={{ alignSelf: "center" }}>
                <Typography variant="h2">Pasta and Noodles</Typography>
                <Box sx={{ m: 2, width: "100%" }}>
                  <table className="table">
                    <thead>
                      <th></th>
                      <th></th>
                    </thead>
                    {/* each array holding each category of item is mapped over and displayed here */}
                    {pastaNoodles.map((one) => {
                      return (
                        <tr>
                          <td>
                            <Typography fontSize="2em">{one.name}</Typography>
                          </td>
                          <td>
                            <Typography fontSize="2em">
                              ₱ {one.price}
                            </Typography>
                          </td>
                        </tr>
                      );
                    })}
                  </table>
                </Box>
              </Box>
              {/* Lunch / Dinner */}
              {/* image for chicken biryani */}
              <Box sx={{ width: "300px", pt: 5, mx: 2 }}>
                <img
                  src={chickenB}
                  alt="chicken biryani"
                  style={{ width: "100%", borderRadius: "15%" }}
                />
              </Box>
              <Box>
                {/* lunch / dinner section */}
                <Typography variant="h2">Lunch / Dinner</Typography>
                <Box sx={{ m: 2, width: "100%" }}>
                  <table className="table">
                    <thead>
                      <th></th>
                      <th></th>
                    </thead>
                    {/* each array holding each category of item is mapped over and displayed here */}
                    {lunchDinner.map((one) => {
                      return (
                        <tr>
                          <td>
                            <Typography fontSize="2em">{one.name}</Typography>
                          </td>
                          <td>
                            <Typography fontSize="2em">
                              ₱ {one.price}
                            </Typography>
                          </td>
                        </tr>
                      );
                    })}
                  </table>
                </Box>
              </Box>
            </Box>
            {/* Bottom part of food menu */}
            <Box
              sx={{ display: "flex", justifyContent: "space-evenly", mt: 2 }}
            >
              {/* Breakfast section */}
              <Box sx={{}}>
                <Typography variant="h2">All Day Breakfast</Typography>
                <Box sx={{ m: 2, width: "100%" }}>
                  <table className="table">
                    <thead>
                      <th></th>
                      <th></th>
                    </thead>
                    {/* each array holding each category of item is mapped over and displayed here */}
                    {breakfast.map((one) => {
                      return (
                        <tr>
                          <td>
                            <Typography fontSize="2em">{one.name}</Typography>
                          </td>
                          <td>
                            <Typography fontSize="2em">
                              ₱ {one.price}
                            </Typography>
                          </td>
                        </tr>
                      );
                    })}
                  </table>
                </Box>
              </Box>
              {/* Pasta picture */}
              <Box sx={{ width: "550px", pb: 5, alignSelf: "center" }}>
                <img
                  src={pasta}
                  alt="English breakfast"
                  style={{ width: "100%", borderRadius: "15%" }}
                />
              </Box>
              <Box>
                {/* sandwiches  section */}
                <Typography variant="h2">Sandwiches / Shawarma</Typography>
                <Box sx={{ m: 2, width: "100%" }}>
                  <table className="table">
                    <thead>
                      <th></th>
                      <th></th>
                    </thead>
                    {/* each array holding each category of item is mapped over and displayed here */}
                    {sandwiches.map((one) => {
                      return (
                        <tr>
                          <td>
                            <Typography fontSize="2em">{one.name}</Typography>
                          </td>
                          <td>
                            <Typography fontSize="2em">
                              ₱ {one.price}
                            </Typography>
                          </td>
                        </tr>
                      );
                    })}
                  </table>
                </Box>
              </Box>
            </Box>
          </Box>
          {/* Drinks menu */}
          <Box sx={{ pb: 3 }}>
            <Typography variant="h1">Hand Crafted Drinks</Typography>
            {/* left side drinks menu  */}
            <Box
              sx={{ display: "flex", my: 2, justifyContent: "space-evenly" }}
            >
              <Box>
                {/* Hot beverages section */}
                <Typography variant="h2">Hot Beverages</Typography>
                {/* This entire box will hold beverage entire hot beverages table */}
                <Box
                  sx={{
                    display: "flex",
                    mb: 1,
                  }}
                >
                  <Box sx={{ flex: 1 }}>
                    <Box sx={{ ml: 7 }}>
                      <table>
                        <thead>
                          {/* empty to align sizes with prices */}
                          <th></th>
                          <th>8oz</th>
                          <th>12oz</th>
                        </thead>
                        <tbody>
                          {hotBev.map((one) => {
                            return (
                              <tr>
                                <td>
                                  <Typography fontSize="2em" sx={{ mr: 1 }}>
                                    {one.name}
                                  </Typography>
                                </td>
                                <td>
                                  <Typography fontSize="2em" sx={{ mr: 1 }}>
                                    ₱ {one.price}
                                  </Typography>
                                </td>
                                <td>
                                  <Typography fontSize="2em" sx={{ mr: 1 }}>
                                    ₱ {one.largeDrink}
                                  </Typography>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </Box>
                  </Box>
                </Box>
                {/* Cold beverages section */}
                <Typography variant="h2">Cold Beverages</Typography>
                <Box sx={{ display: "flex" }}>
                  <Box sx={{ flex: 1 }}>
                    <Box sx={{ ml: 4 }}>
                      <table>
                        <thead>
                          {/* empty to align sizes with prices */}
                          <th></th>
                          <th>8oz</th>
                          <th>12oz</th>
                        </thead>
                        <tbody>
                          {coldBev.map((one) => {
                            return (
                              <tr>
                                <td>
                                  <Typography fontSize="2em" sx={{ mr: 1 }}>
                                    {one.name}
                                  </Typography>
                                </td>
                                <td>
                                  <Typography fontSize="2em" sx={{ mr: 1 }}>
                                    ₱ {one.price}
                                  </Typography>
                                </td>
                                <td>
                                  <Typography fontSize="2em" sx={{ mr: 1 }}>
                                    ₱ {one.largeDrink}
                                  </Typography>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </Box>
                  </Box>
                </Box>
              </Box>
              {/* middle section of drinks menu */}
              <Box sx={{ width: "350px", alignSelf: "center" }}>
                {/* matcha image */}
                <img
                  src={matcha}
                  alt="matcha latte with heart shaped foam"
                  style={{ width: "100%", borderRadius: "15%" }}
                />
              </Box>
              <Box sx={{ alignSelf: "center" }}>
                <Box>
                  {/* Frappes section */}
                  <Typography variant="h2">Frappes</Typography>
                  <Box
                    sx={{
                      display: "flex",
                      mb: 1,
                    }}
                  >
                    <Box sx={{ flex: 1 }}>
                      <Box sx={{ ml: 7 }}>
                        <table>
                          <thead>
                            {/* empty to align sizes with prices */}
                            <th></th>
                            <th>8oz</th>
                            <th>12oz</th>
                          </thead>
                          <tbody>
                            {frappes.map((one) => {
                              return (
                                <tr>
                                  <td>
                                    <Typography fontSize="2em" sx={{ mr: 1 }}>
                                      {one.name}
                                    </Typography>
                                  </td>
                                  <td>
                                    <Typography fontSize="2em" sx={{ mr: 1 }}>
                                      ₱ {one.price}
                                    </Typography>
                                  </td>
                                  <Typography fontSize="2em" sx={{ mr: 1 }}>
                                    ₱ {one.largeDrink}
                                  </Typography>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box>
                  {/* smoothies section */}
                  <Typography variant="h2">Smoothies</Typography>
                  <Box
                    sx={{
                      display: "flex",
                      mb: 1,
                    }}
                  >
                    <Box sx={{ flex: 1 }}>
                      <Box sx={{ ml: 7 }}>
                        <table>
                          <thead>
                            {/* empty to align sizes with prices */}
                            <th></th>
                            <th>8oz</th>
                            <th>12oz</th>
                          </thead>
                          <tbody>
                            {smoothies.map((one) => {
                              return (
                                <tr>
                                  <td>
                                    <Typography fontSize="2em" sx={{ mr: 1 }}>
                                      {one.name}
                                    </Typography>
                                  </td>
                                  <td>
                                    <Typography fontSize="2em" sx={{ mr: 1 }}>
                                      ₱ {one.price}
                                    </Typography>
                                  </td>
                                  <Typography fontSize="2em" sx={{ mr: 1 }}>
                                    ₱ {one.largeDrink}
                                  </Typography>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box>
                  {/* desserts section */}
                  <Typography variant="h2">Desserts</Typography>
                  <Box
                    sx={{
                      display: "flex",
                      mb: 1,
                    }}
                  >
                    <Box sx={{ flex: 1 }}>
                      <Box sx={{ ml: 7 }}>
                        <table>
                          <thead>
                            {/* empty to align sizes with prices */}
                            <th></th>
                            <th></th>
                          </thead>
                          <tbody>
                            {desserts.map((one) => {
                              return (
                                <tr>
                                  <td>
                                    <Typography fontSize="2em" sx={{ mr: 1 }}>
                                      {one.name}
                                    </Typography>
                                  </td>
                                  <td>
                                    <Typography fontSize="2em" sx={{ mr: 1 }}>
                                      ₱ {one.price}
                                    </Typography>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              {/* Right side of drinks menu */}
              <Box sx={{ width: "350px", pt: 3, alignSelf: "center" }}>
                {/* boba drink image */}
                <img
                  src={boba}
                  alt="Okinawa boba drink"
                  style={{
                    width: "100%",
                    borderRadius: "15%",
                  }}
                />
              </Box>
              <Box>
                <Box>
                  {/* milktea section */}
                  <Typography variant="h2">Milk Tea</Typography>
                  <Box
                    sx={{
                      display: "flex",
                      mb: 1,
                    }}
                  >
                    <Box sx={{ flex: 1 }}>
                      <Box sx={{ ml: 7 }}>
                        <table>
                          <thead>
                            {/* empty to align sizes with prices */}
                            <th></th>
                            <th>8oz</th>
                            <th>12oz</th>
                          </thead>
                          <tbody>
                            {/* function to map over milktea items */}
                            {milkTea.map((one) => {
                              return (
                                <tr>
                                  <td>
                                    <Typography fontSize="2em" sx={{ mr: 1 }}>
                                      {one.name}
                                    </Typography>
                                  </td>
                                  <td>
                                    <Typography fontSize="2em" sx={{ mr: 1 }}>
                                      ₱ {one.price}
                                    </Typography>
                                  </td>
                                  <Typography fontSize="2em" sx={{ mr: 1 }}>
                                    ₱ {one.largeDrink}
                                  </Typography>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box>
                  {/* other beverages section */}
                  <Typography variant="h2">Other Beverages</Typography>
                  <Box
                    sx={{
                      display: "flex",
                      mb: 1,
                    }}
                  >
                    <Box sx={{ flex: 1 }}>
                      <Box sx={{ ml: 9 }}>
                        <table>
                          <thead>
                            {/* empty to align sizes with prices */}
                          </thead>
                          <tbody>
                            {/* function to map over other beverage items */}
                            {otherBev.map((one) => {
                              return (
                                <tr>
                                  <td>
                                    <Typography fontSize="2em" sx={{ mr: 1 }}>
                                      {one.name}
                                    </Typography>
                                  </td>
                                  <td>
                                    <Typography fontSize="2em" sx={{ mr: 1 }}>
                                      ₱ {one.price}
                                    </Typography>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box>
                  {/* italian soda section */}
                  <Typography variant="h2">Italian Soda</Typography>
                  <Box
                    sx={{
                      display: "flex",
                      mb: 1,
                    }}
                  >
                    <Box sx={{ flex: 1 }}>
                      <Box sx={{ ml: 5 }}>
                        <table>
                          <thead>
                            {/* empty to align sizes with prices */}
                            <th></th>
                            <th>8oz</th>
                            <th>12oz</th>
                          </thead>
                          <tbody>
                            {/* function to map over italian soda items */}
                            {italianSoda.map((one) => {
                              return (
                                <tr>
                                  <td>
                                    <Typography fontSize="2em" sx={{ mr: 1 }}>
                                      {one.name}
                                    </Typography>
                                  </td>
                                  <td>
                                    <Typography fontSize="2em" sx={{ mr: 1 }}>
                                      ₱ {one.price}
                                    </Typography>
                                  </td>
                                  <Typography fontSize="2em" sx={{ mr: 1 }}>
                                    ₱ {one.largeDrink}
                                  </Typography>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Box>
    </ThemeProvider>
  );
};

export default Menu;
