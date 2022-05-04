import React from "react";
import { Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "../styles/Login.css";

const Login = () => {
  return (
    <div>
      <Header btn={"SIGN UP"} />
      <Container className="d-flex justify-content-center align-items-center">
        <div className="loginCard mt-5 pt-5">
          <h1 className="login-title mb-4 mt-2">LOG IN</h1>
          <h3 className="login-sub">
            NEW USER?{" "}
            <Link
              to="/signup"
              style={{ textDecoration: "none", color: "#ff8603" }}
              className="create-account"
            >
              CREATE AN ACCOUNT
            </Link>
          </h3>
          <hr className="my-5" />
          <Form>
            <Form.Group className="mb-4">
              <Form.Control
                type="email"
                placeholder="E-mail"
                className="px-3 py-2"
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Control
                type="password"
                placeholder="Password"
                className="px-3 py-2"
              />
            </Form.Group>
            <h4 className="forgot-text mb-4">?Forgot your password</h4>
            <Link to="/dashboard">
              <button className="login-btn" type="submit">
                LOG IN
              </button>
            </Link>
            <h3 className="privacy-text py-4">
              By clicking the "Sign in" to accept the terms of the{" "}
              <a href="/" style={{ textDecoration: "none", color: "#ff8603" }}>
                Privacy and Policy
              </a>
            </h3>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default Login;
