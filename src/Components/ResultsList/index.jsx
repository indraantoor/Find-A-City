import Result from "../Result";
import { ResultsListWrapper, ResultsListContainer } from "./style";
import { useContext } from "react";
import { SearchFormContext } from "../../SearchFormContext";

const getResult = (place) => (
  <Result key={place.id} name={place["place_name"]} />
);

const ResultsList = () => {
  const { searchFormState } = useContext(SearchFormContext);
  const { places } = searchFormState;

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
