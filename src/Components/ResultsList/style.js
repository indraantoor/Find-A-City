import styled from "styled-components";

export const ResultsListWrapper = styled.div`
  // background-color: green;
  padding-top: 10px;
  display: flex;
  justify-content: center;
`;

export const ResultsListContainer = styled.div`
  background-color: #fffff3;
  width: 50%;
  padding: 10px;
  max-height: 250px;
  overflow: auto;
  // transition: height 2s ease-in;
  //   border: solid 3px #ede6e3;
  border: none;
  border-radius: 10px;

  //   box-shadow: 0 0 10px #dadad9;
  box-shadow: 0 0 6px #757780;

  &::-webkit-scrollbar {
    display: none;
  }
`;
