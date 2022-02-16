import React, { useState } from "react";
import axios from "axios";
import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import { productitems } from "../../constants/data";
import validator from "validator";
import { useHistory } from "react-router-dom";

import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";
import { Link } from "react-router-dom";

const useStyle = makeStyles({
  titlePro: {
    padding: "95px 180px",
    fontFamily: "Calibri",
  },

  container: {
    maxWidth: "1000px",
    margin: "auto",
    boxSizing: "border-box",
    fontFamily: "Roboto ,Arial, Helvetica, sans-serif",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    justifyContent: "center",
    background: "#DC143C",
    minHeight: "60vh",
    boxShadow: "3px 3px 10px black",
    //paddingTop: "10 px",
    padding: "2rem",
    alignItems: "center",
    borderRadius: "8px",
  },

  headingcls: {
    margin: 0,
    marginTop: "21px",
    color: "black",
    fontSize: "1rem",
  },

  inputcontainer: {
    position: "relative",
    fontSize: "1rem",
    color: "#333",
  },

  input: {
    //margin: '1px',
    padding: "0.75rem 0.25rem",
    outline: "none",
    border: "1px solid #ccc",
    borderRadius: "4px",
    background: "whitesmoke",
    position: "relative",
    width: "100%",
    color: "black",
  },

  form: {
    background: "#fff",
    maxWidth: "500px",
    maxHeight: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    padding: "1rem",
    borderRadius: "10px",
    boxShadow: "3px 3px 40px #545454e8",
    position: "relative",
    backgroundSize: "cover",
  },

  inputgrp: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridGap: "0.5rem",
  },

  btn: {
    width: "100%",
    padding: "1rem 0.5rem",
    marginTop: "1.5rem",
    outline: "none",
    border: "none",
    borderRadius: "7px",
    textDecoration: "none",
    backgroundColor: "#990033",
    boxShadow: "3px 3px 10px black",
    color: "#FFF",
    letterSpacing: "1px",
    fontSize: "1.25rem",
    cursor: "pointer",
    position: "relative",
    zIndex: "9",
    "&:hover": {
      backgroundColor: "#800000",
    },
  },
});

const BookProduct = () => {
  const classes = useStyle();
  const history = useHistory();

  const [value, setValue] = useState({
    name: "",
    address: "",
    city: "",
    zipCode: "",
    phone: "",
    orderId: "",
  });

  const inputText = (e) => {
    const { name, value } = e.target;

    setValue((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const [nameError, setNameError] = useState("");
  const validateName = (e) => {
    var name = e;

    if (!name) {
      setNameError("Name is Required");
      return false;
    } else {
      setNameError("");
      return true;
    }
  };

  const [addressError, setAddressError] = useState("");
  const validateAddress = (e) => {
    var address = e;

    if (!address) {
      setAddressError("Address is Required");
      return false;
    } else {
      setAddressError("");
      return true;
    }
  };

  const [cityError, setCityError] = useState("");
  const validateCity = (e) => {
    var city = e;

    if (!city) {
      setCityError("City is Required");
      return false;
    } else {
      setCityError("");
      return true;
    }
  };

  const [zipCodeError, setZipCodeError] = useState("");
  const validateZipCode = (e) => {
    var zipCode = e;

    if (!zipCode) {
      setZipCodeError("Zip-Code is Required");
      return false;
    } else {
      setZipCodeError("");
      return true;
    }
  };

  const [phoneError, setPhoneError] = useState("");
  const validatePhone = (e) => {
    var phone = e;

    if (!phone) {
      setPhoneError("phone is Required");
      return false;
    } else if (!(validator.isNumeric(phone) && phone.length === 10)) {
      setPhoneError("Enter valid phone!");
      return false;
    } else {
      setPhoneError("");
      return true;
    }
  };

  const [orderIdError, setOrderIdError] = useState("");
  const validateOrderId = (e) => {
    var orderId = e;

    if (!orderId) {
      setOrderIdError("Order Id is Required");
      return false;
    } else {
      setOrderIdError("");
      return true;
    }
  };

  //api call
  function submitForm() {
    var flag = true;

    if (!validateName(value.name)) {
      flag = false;
    }
    if (!validateAddress(value.address)) {
      flag = false;
    }
    if (!validateCity(value.city)) {
      flag = false;
    }
    if (!validateZipCode(value.zipCode)) {
      flag = false;
    }
    if (!validatePhone(value.phone)) {
      flag = false;
    }
    if (!validateOrderId(value.orderId)) {
      flag = false;
    }
    if (flag === false) {
      return false;
    }

    axios("http://localhost:8084/createOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(value),
    })
      .then(function (response) {
        if (response.status === 200) {
          alert(
            "Press OK to continue Login"
          );
          history.push("/payments");
        } else {
          alert(response.data);
        }
      })
      .catch(function (response) {
        alert("User :" + value.name + " please try Again");
      });
  }

  
  return (
    <Box>
      <div style={{ background: "whitesmoke", height: "750px" }}>
        <div className={classes.titlePro}>
          {/* <Link
            to="/products"
            style={{ display: "flex", textDecoration: "none", color: "black" }}
          >
            <ArrowBackOutlinedIcon />
            <h3 style={{ margin: "0px 5px " }}> Back to Product</h3>
          </Link> */}
          <h1 style={{ color: "#DC143C", margin: 0 , textAlign: 'center'}}>Confirm Your Product</h1>

          {/* <span style={{ width: "30%", display: "inline", float: "left" }}>
            <div>
              <img
                src={productitems[0].url}
                className={classes.image}
                alt="Products in slide"
              />
              <Typography
                className={classes.text}
                style={{ fontWeight: 600, fontSize: "17px", color: "#212121" }}
              >
                {productitems[0].brand}
              </Typography>
              <Typography className={classes.text} style={{ color: "#AF0E0E" }}>
                {productitems[0].title}
              </Typography>
              <Typography className={classes.text} style={{ color: "#F39C12" }}>
                {productitems[0].discount}
              </Typography>
              <Typography
                className={classes.text}
                style={{ fontWeight: 600, color: "#0B5345", display: "flex" }}
              >
                Rs. {productitems[0].price.cost}
                <Typography
                  style={{
                    color: "#0B5345",
                    textDecorationLine: "line-through",
                    fontSize: "14px",
                    textIndent: "5px",
                  }}
                >
                  Rs. {productitems[0].price.mrp}
                </Typography>
              </Typography>
            </div>
          </span> */}
          <span style={{ width: "70%",/* display: "inline", float: "right"*/ }}>
            <div>
              <div className={classes.container}>
                <form className={classes.container}>
                  <div className={classes.inputcontainer}>
                    <h4 className={classes.headingcls} style={{ margin: 0 }}>
                      Name
                    </h4>
                    <input
                      className={classes.input}
                      type="text"
                      name="name"
                      placeholder="Please enter your full name"
                      onChange={inputText}
                      value={value.name}
                      required={true}
                    />
                  </div>
                  <span
                    style={{
                      //fontWeight: "bold",
                      color: "whitesmoke",
                    }}
                  >
                    {nameError}
                  </span>
                  <div className={classes.inputcontainer}>
                    <h4 className={classes.headingcls}>Address</h4>
                    <input
                      className={classes.input}
                      type="text"
                      name="address"
                      placeholder="Please enter your address"
                      onChange={inputText}
                      value={value.address}
                      required={true}
                    />
                  </div>
                  <span
                    style={{
                      //fontWeight: "bold",
                      color: "whitesmoke",
                    }}
                  >
                    {addressError}
                  </span>
                  <div className={classes.inputgrp}>
                    <div className={classes.inputcontainer}>
                      <h4 className={classes.headingcls}>City</h4>
                      <input
                        className={classes.input}
                        type="text"
                        name="city"
                        placeholder="Please enter your city"
                        onChange={inputText}
                        value={value.city}
                        required={true}
                      />
                      <span
                      style={{
                        //fontWeight: "bold",
                        color: "whitesmoke",
                      }}
                    >
                      {cityError}
                    </span>
                    </div>
                    
                    <div className={classes.inputcontainer}>
                      <h4 className={classes.headingcls}>Zip Code</h4>
                      <input
                        className={classes.input}
                        type="text"
                        name="zipCode"
                        placeholder="Please enter your zip code"
                        onChange={inputText}
                        value={value.zipCode}
                        required={true}
                      />
                      <span
                      style={{
                        //fontWeight: "bold",
                        color: "whitesmoke",
                      }}
                    >
                      {zipCodeError}
                    </span>
                    </div>
                    
                    <div className={classes.inputcontainer}>
                      <h4 className={classes.headingcls}>Phone</h4>
                      <input
                        className={classes.input}
                        type="text"
                        name="phone"
                        placeholder="Please enter your Phone number"
                        onChange={inputText}
                        value={value.phone}
                        required={true}
                      />
                      <span
                      style={{
                        //fontWeight: "bold",
                        color: "whitesmoke",
                      }}
                    >
                      {phoneError}
                    </span>
                    </div>
                    
                  </div>
                  <div className={classes.inputcontainer}>
                    <h4 className={classes.headingcls}>Order-Id</h4>
                    <input
                      className={classes.input}
                      type="text"
                      name="orderId"
                      placeholder="Please enter your Order-id as 1"
                      onChange={inputText}
                      value={value.orderId}
                      required={true}
                    />
                  </div>
                  <span
                    style={{
                      //fontWeight: "bold",
                      color: "whitesmoke",
                    }}
                  >
                    {orderIdError}
                  </span>
                  <Button
                    //variant="contained"
                    className={classes.btn}
                    onClick={submitForm}
                  >
                    Payment
                  </Button>
                </form>
              </div>
            </div>
          </span>
        </div>
        <div></div>
      </div>
    </Box>
  );
};
export default BookProduct;
