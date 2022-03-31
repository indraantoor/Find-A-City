import styled from "styled-components";

const FooterContainer = styled.footer`
  // background-color: #001011;
  background-color: #030301;
  // background-color: rgba(0, 16, 17, 0.8);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  color: #757780;
`;

const CopyrightText = styled.p`
  // padding: 10px;
  font-size: 14px;
  font-weight: 300;
  margin: 40px;
  // text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <CopyrightText>(C) Copyright 2022 - Indraan S Toor</CopyrightText>
      <CopyrightText>Built By - Indraan S Toor</CopyrightText>
    </FooterContainer>
  );
};

export default Footer;
