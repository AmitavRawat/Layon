import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "./logo.svg";
import white from "./white.svg";

const MyNavbar = (props) => {
  const { dark, getBackgroundColor } = props;

  return (
    <Navbar style={{ padding: 10, backgroundColor: getBackgroundColor() }}>
      <Container>
        <Navbar.Brand href="#home">
          <img
            // src="https://i.imgur.com/9m1MXE2.png"
            src={dark ? white : logo}
            width="200"
            height="60"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
