import Result from "../Result";
import { ResultsListWrapper, ResultsListContainer } from "./style";

const getResult = (place, setSearchText) => (
  <Result
    key={place.id}
    name={place["place_name"]}
    setSearchText={setSearchText}
  />
);

const ResultsList = ({ places, setSearchText }) => {
  return (
    <ResultsListWrapper>
      <ResultsListContainer>
        {places.features &&
          places.features.length > 0 &&
          places.features.map((place) => getResult(place, setSearchText))}
      </ResultsListContainer>
    </ResultsListWrapper>
  );
};

export default ResultsList;
