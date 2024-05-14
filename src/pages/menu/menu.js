import React, {useState, useEffect} from "react";
import { Container, StyledTitle, StyledMenu } from "./styled";
import { Card  } from "../../conponents/card/card";

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
    {
      name: "OrangeJuice",
      number: 4,
      inCart: false,
    },
    {
      name: "ChocolateCake",
      number: 5,
      inCart: false,
    },
    {
      name: "IceCream",
      number: 6,
      inCart: false,
    },
];

export const Menu = () => {

  return(
    <Container>
      
      <StyledTitle>
        <h1> Menu </h1>
      </StyledTitle>
      <StyledMenu>
        {FoodMenu.map((element, index) => {
          // Cardコンポーネントにpropsを渡す
            return <Card
            key={index}
            name={element.name}
            number={element.number}/>;
        })}
      </StyledMenu>
    </Container>
  );
};