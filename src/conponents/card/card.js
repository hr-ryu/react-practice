
import React, {useState} from "react";
import { Container, MenuCard, NameBox, ButtonBox } from "./styled";


export const Card = ({name,number}) => {
    // ステート
    const [checkNum, setCheckNum] = useState(0);
    if(checkNum < 0){ setCheckNum(0); }


   
    return (
        <Container>
            <MenuCard>
                <NameBox>
                    <p> {number} : {name} </p>
                </NameBox>
                <ButtonBox>
                    <button onClick={() => setCheckNum(checkNum + 1)}> + 1 </button>
                    <span> {checkNum} </span>
                    <button onClick={() => setCheckNum(checkNum - 1)}> - 1 </button>
                </ButtonBox>
            </MenuCard>
        </Container>
    );
}