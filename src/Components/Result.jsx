import styled from "styled-components";

const ResultContainer = styled.div`
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

const ResultText = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #001011;
  margin-left: 10px;
`;

const BreakPoint = styled.hr`
  margin-top: 8px;
  opacity: 0.3;
`;

const InfoContainer = styled.div`
  // background-color: blue;
  display: flex;
  align-items: center;
`;

const Result = ({ name }) => {
  return (
    <ResultContainer>
      <InfoContainer>
        <div style={{ color: "black" }}>
          <i className="bi bi-geo-alt-fill"></i>
        </div>
        <ResultText>{name}</ResultText>
      </InfoContainer>
      <BreakPoint />
    </ResultContainer>
  );
};

export default Result;
