import Result from "../Result";
import { ResultsListWrapper, ResultsListContainer } from "./style";

const getResult = (place) => (
  <Result key={place.id} name={place["place_name"]} />
);

const ResultsList = ({ places }) => {
  return (
    <ResultsListWrapper>
      <ResultsListContainer>
        {places.features &&
          places.features.length > 0 &&
          places.features.map((place) => getResult(place))}
      </ResultsListContainer>
    </ResultsListWrapper>
  );
};

export default ResultsList;
