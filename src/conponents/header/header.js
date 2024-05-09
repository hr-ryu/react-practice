import React from "react";
import { Container } from "./styled";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Container>
      <span> <Link to= "/main">Main</Link> </span>
      <span> <Link to= "/menu">Menu</Link> </span>
      <span> <Link to= "/cart">Cart</Link> </span>
    </Container>
  );
};
