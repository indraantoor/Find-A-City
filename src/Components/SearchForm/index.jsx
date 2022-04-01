import { useContext, useEffect, useReducer, useState } from "react";
import ResultsList from "../ResultsList";
import SearchIcon from "../../Assets/SearchIcon";
import ClearIcon from "../../Assets/ClearIcon";
import { fetchPlaces } from "../../requests";
import { useDebounce } from "../../Helpers/useDebounce";
import {
  SearchContainer,
  Title,
  SearchFormContainer,
  SearchInput,
} from "./style";
import { SearchFormContext } from "../../SearchFormContext";

const getPlaces = (debouncedSearchText, setFn) => {
  let cancelled = false;

  if (debouncedSearchText.length > 0 && debouncedSearchText) {
    if (cancelled) return;
    fetchPlaces(debouncedSearchText).then((results) => {
      setFn(results);
    });
  }

  return () => {
    cancelled = true;
  };
};

const SearchForm = () => {
  const { searchFormState, clearText, placesSet, searchTextSet } =
    useContext(SearchFormContext);
  const debouncedSearchText = useDebounce(searchFormState.searchText, 180);

  useEffect(() => {
    getPlaces(debouncedSearchText, placesSet);
  }, [debouncedSearchText, placesSet]);

  const handleChange = (e) => {
    const updatedSearchText = e.target.value;
    searchTextSet(updatedSearchText);
  };

  const handleClick = (e) => {
    clearText();
  };

  const isValidResult =
    searchFormState.searchText.length > 0 &&
    searchFormState.places.features &&
    searchFormState.places.features.length > 0
      ? true
      : false;

  return (
    <SearchContainer>
      <Title>Discover Now</Title>
      <SearchFormContainer>
        <SearchInput
          type="text"
          placeholder="Search for a city..."
          onChange={handleChange}
          autoFocus
          value={searchFormState.searchText}
        />
        {searchFormState.searchText.length > 0 ? (
          <ClearIcon onClick={handleClick} />
        ) : (
          <SearchIcon />
        )}
      </SearchFormContainer>
      {isValidResult && <ResultsList places={searchFormState.places} />}
    </SearchContainer>
  );
};

export default SearchForm;
