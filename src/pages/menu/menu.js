import React, {useState, useEffect} from "react";
import { Container } from "./styled";

const FoodMenu = [
    {
      name: "love",
      number: 1,
    },
    {
      name: "miki",
      number: 2,
    },
    {
      name: "takasi",
      number: 3,
    },
    {
      name: "ken",
      number: 4,
    },
    {
      name: "ai",
      number: 5,
    },
  ];

export const Menu = () => {
    const [pokemonName, setPokemonName] = useState("");

    useEffect(() => {
        const pokemon = localStorage.getItem("pokemonName");
        if(pokemon){
            setPokemonName(pokemon);
        } else {
            console.log("error");
        }
    }, []);

    return (
        <Container>
            <div>{pokemonName}</div>

        </Container>
     );
};