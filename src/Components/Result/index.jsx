import {
  ResultContainer,
  InfoContainer,
  BreakPoint,
  ResultText,
} from "./style";

const Result = ({ name, setSearchText }) => {
  const handleClick = () => {
    setSearchText(name);
  };

  return (
    <ResultContainer onClick={handleClick}>
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
