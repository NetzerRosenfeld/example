import React from "react";
import "../styles/Login.css";
import { makeStyles } from "@mui/styles";
import { Container, Navbar } from "react-bootstrap";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { Step, StepLabel, Stepper } from "@mui/material";

const data = [
  { title: "Roof selection" },
  { title: "Roof drawing" },
  { title: "Modal data" },
  { title: "Adding fastners" },
  { title: "Accommodation plan" },
  { title: "Start of construction" },
  { title: "Comments" },
  { title: "Table" },
];

const useStyles = makeStyles({
  root: {
    "& .muirtl-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-active": {
      color: "#ff8603",
    },
    "& .muirtl-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed": {
      color: "#ff8603",
    },
  },
});

const Header = ({ btn, steps, activeStep }) => {
  const classes = useStyles();

  let route;
  if (btn === "SIGN UP") {
    route = "/signup";
  } else if (btn === "LOG IN") {
    route = "/";
  } else if (btn === "LOG OUT") {
    route = "/";
  }

  return (
    <Navbar className="navbar" style={{ maxWidth: "100%" }} dir="rtl">
      <Container>
        <Navbar.Brand href="/" className="py-2">
          <img src={logo} alt="logo" className="logo" />
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-center">
          {steps === true && (
            <Stepper
              className={classes.root}
              activeStep={activeStep}
              alternativeLabel
            >
              {data.map((label, ind) => (
                <Step key={ind}>
                  <StepLabel>{label.title}</StepLabel>
                </Step>
              ))}
            </Stepper>
          )}
        </Navbar.Collapse>
        <Link to={route}>
          <button className="btn-signin px-5">{btn}</button>
        </Link>
      </Container>
    </Navbar>
  );
};

export default Header;
