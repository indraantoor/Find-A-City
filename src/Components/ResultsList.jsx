import styled from "styled-components";
import Result from "./Result";

const ResultsListWrapper = styled.div`
  //   background-color: green;
  padding-top: 5px;
  display: flex;
  justify-content: center;
`;

const ResultsListContainer = styled.div`
  //   background-color: orange;
  width: 50%;
  padding: 5px;
  height: 250px;
  overflow: auto;

  //   border: solid 3px #ede6e3;
  border: none;
  border-radius: 10px;

  //   box-shadow: 0 0 10px #dadad9;
  box-shadow: 0 0 6px #757780;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ResultsList = () => {
  return (
    <ResultsListWrapper>
      <ResultsListContainer>
        <Result />
        <Result />
        <Result />
        <Result />
        <Result />
        <Result />
        <Result />
        <Result />
      </ResultsListContainer>
    </ResultsListWrapper>
  );
};

export default ResultsList;
