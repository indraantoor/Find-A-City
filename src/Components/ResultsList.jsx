import styled from "styled-components";
import Result from "./Result";

const ResultsListWrapper = styled.div`
  //   background-color: green;
  display: flex;
  justify-content: center;
`;

const ResultsListContainer = styled.div`
  //   background-color: orange;
  width: 50%;
  padding: 5px;
  height: 250px;
  overflow: auto;

  border: solid 3px #ede6e3;
  box-shadow: 0 0 10px #dadad9;
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
      </ResultsListContainer>
    </ResultsListWrapper>
  );
};

export default ResultsList;
