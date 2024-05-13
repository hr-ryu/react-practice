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

const setInCart = (id) =>{
  FoodMenu[id-1].inCart = true;
}

export const Menu = () => {

  return(
    <Container>
      
      <h1> Menu </h1>
    
      {FoodMenu.map((element, index) => {
          return <Card
          key={index}
          name={element.name}
          number={element.number}/>;
      })}
    </Container>
  );
};