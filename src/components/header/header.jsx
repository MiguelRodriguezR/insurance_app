import React from "react";
import styled from "@emotion/styled";

const HeaderContainer = styled.header`
    background-color: #26c6da;
    padding: 10px;
    font-weight: bold;
    color: #FFFFFF

`;

const HeaderText = styled.h1`
    font-size: 2em;
    margin: 0;
    font-family: 'Slabo 27px', serif;
    text-align: center;
`;

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const Header = ({ title }) => {
  return (
    <Container>
      <HeaderContainer>
        <HeaderText>{title}</HeaderText>
      </HeaderContainer>
    </Container>
  );
};

export default Header;
