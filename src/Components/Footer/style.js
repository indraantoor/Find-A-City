import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #030301;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  color: #fffff3;
  border-top: solid 1px #29292a;
`;

export const CopyrightText = styled.p`
  font-size: 14px;
  font-weight: 300;
  margin: 40px;
  letter-spacing: 1px;
  opacity: 0.2;
`;
