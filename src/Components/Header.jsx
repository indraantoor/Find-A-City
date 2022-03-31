import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  background-color: #030301;
  height: 60px;
  color: white;
  display: flex;
  // justify-content: center;
  align-items: center;
`;

const LogoText = styled.h1`
  margin-left: 40px;
  cursor: pointer;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <LogoText>FindCity.com</LogoText>
    </HeaderContainer>
  );
};

export default Header;
