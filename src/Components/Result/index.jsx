import { useContext } from "react";
import LocationIcon from "../../Assets/LocationIcon";
import { SearchFormContext } from "../../SearchFormContext";
import {
  ResultContainer,
  InfoContainer,
  BreakPoint,
  ResultText,
} from "./style";

const Result = ({ name }) => {
  const { searchTextSet } = useContext(SearchFormContext);

  const handleClick = () => {
    searchTextSet(name);
  };

  return (
    <ResultContainer onClick={handleClick}>
      <InfoContainer>
        <LocationIcon />
        <ResultText>{name}</ResultText>
      </InfoContainer>
      <BreakPoint />
    </ResultContainer>
  );
};

export default Result;
