import React from "react";
import styled from 'styled-components'
import './header.css'

const Title = styled.h1`
font-size:2.5em;
text-align: center;
font-family: 'Courgette', cursive;
color:rgb(251,72,124);
padding-top: 4%
`;
const Instructions = styled.p`
text-align: center;
color:white;
margin-bottom:2%,
padding-top:5%
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
            Use search bar below to find employees by their name.
            </p>
            </Instructions> 
        </header>
      );
};

export default Header;