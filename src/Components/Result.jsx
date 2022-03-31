import styled from "styled-components";

const ResultContainer = styled.div`
  //   background-color: brown;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
  margin: 8px;
  transition: background-color 0.5s ease-out;
  border-radius: 5px;

  &:hover {
    background-color: #98ce00;
    cursor: pointer;
  }
`;

const ResultText = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #001011;
`;

const BreakPoint = styled.hr`
  margin-top: 8px;
  opacity: 0.3;
`;

const Result = () => {
  return (
    <ResultContainer>
      <ResultText>Result</ResultText>
      <BreakPoint />
    </ResultContainer>
  );
};

export default Result;
