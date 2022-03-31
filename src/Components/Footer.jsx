import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #001011;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 40px;
  color: #757780;
`;

const CopyrightText = styled.p`
  padding: 10px;
  font-size: 16px;
  font-weight: 300;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <CopyrightText>
        (C) Copyright 2022 - Copyright And Made By - Indraan S Toor
      </CopyrightText>
    </FooterContainer>
  );
};

export default Footer;
