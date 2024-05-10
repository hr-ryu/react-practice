import React, {useState, useEffect} from "react";
import { Container } from "./styled";
import { Card } from "../../conponents/card/card";

const FoodMenu = [
    {
      name: "Pasta",
      number: 1,
      inCart: false,
    },
    {
      name: "Pizza",
      number: 2,
      inCart: false,
    },
    {
      name: "Doria",
      number: 3,
      inCart: false,
    },
];

export const Menu = () => {
  return(
    <Container>
      <h3> Menu </h3>
      
      {FoodMenu.map((element, index) => {
      // const temp = element.name;
      return <Card
      key={index}
      name={element.name} />;
      })}
    </Container>
  );
};