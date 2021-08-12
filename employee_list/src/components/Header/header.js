import React from "react";
import styled from 'styled-components'

const Title = styled.h1`
font-size:1.5em;
text-align: center;
font-family: 'Courgette', cursive;
`;
const Instructions = styled.p`
text-align: center
`
// creating header which will always render.
const Header = () => {
    return (
        <header>
          <Title>
            <h1>
            Employee List
            </h1>
          </Title>
          <Instructions>
            <p>
            Use search bar to find employees by name. If you want to sort the employees by their information, click the arrows by the column name
            </p>
            </Instructions> 
        </header>
      );
};

export default Header;