import React, {useState, useEffect} from "react";
import { Container } from "./styled";
import { Card } from "../../conponents/card/card";

export const Cart = () => {
    const checkedMenu = localStorage.getItem("menuname")

    return (
        <Container>
            <h3> Cart </h3>
        </Container>
     );
};