import styled from "styled-components";

export const ResultContainer = styled.div`
  // background-color: brown;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
  margin: 8px;
  transition: background-color 0.5s ease-out;
  border-radius: 5px;

  &:hover {
    // background-color: #98ce00;
    background-color: #dadad9;
    cursor: pointer;
  }

  &:active {
    background-color: #00d9c0;
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const InfoContainer = styled.div`
  // background-color: blue;
  display: flex;
  align-items: center;
`;

export const ResultText = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #001011;
  margin-left: 10px;
`;

export const BreakPoint = styled.hr`
  margin-top: 8px;
  opacity: 0.3;
`;
