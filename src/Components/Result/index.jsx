import { useContext } from "react";
import { SearchFormContext } from "../../SearchFormContext";
import {
  ResultContainer,
  InfoContainer,
  BreakPoint,
  ResultText,
} from "./style";

const Result = ({ name }) => {
  const { setText } = useContext(SearchFormContext);

  const handleClick = () => {
    setText(name);
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
