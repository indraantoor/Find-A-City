import styled from "styled-components";

const ResultContainer = styled.div`
  //   background-color: brown;
  padding: 8px;
`;

const ResultText = styled.div`
  font-size: 18px;
  font-weight: 500;
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
