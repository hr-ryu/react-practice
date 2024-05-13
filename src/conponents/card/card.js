
import React, {useState} from "react";
import { Container, NameBox, CheckBox } from "./styled";


export const Card = ({name,number}) => {
    const [checkNum, setCheckNum] = useState(0);
    if(checkNum < 0){ setCheckNum(0); }
   
    return (
        <Container>
            <NameBox>
                <p> {number} : {name} </p>
            </NameBox>
            <CheckBox>
                <button onClick={() => setCheckNum(checkNum + 1)}> + 1 </button>
                <button onClick={() => setCheckNum(checkNum - 1)}> - 1 </button>
                <span>  {checkNum}</span>
            </CheckBox>
        </Container>
    );
}