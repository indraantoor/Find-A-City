import { useEffect, useState } from "react";
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

const getPlaces = (debouncedSearchText, setFn) => {
  let cancelled = false;

  if (debouncedSearchText.length > 0 && debouncedSearchText) {
    if (cancelled) return;
    fetchPlaces(debouncedSearchText).then((results) => {
      setFn((prevData) => ({
        ...prevData,
        ...results,
      }));
    });
  }

  return () => {
    cancelled = true;
  };
};

const SearchForm = () => {
  const [places, setPlaces] = useState({});
  const [searchText, setSearchText] = useState("");
  const debouncedSearchText = useDebounce(searchText, 180);

  useEffect(
    () => getPlaces(debouncedSearchText, setPlaces),
    [debouncedSearchText]
  );

  const handleChange = (e) => {
    const updatedSearchText = e.target.value;
    setSearchText(updatedSearchText);
  };

  const handleClick = (e) => {
    // Clear Textbox
    const updatedSearchText = "";
    setSearchText(updatedSearchText);
  };

  return (
    <SearchContainer>
      <Title>Discover Now</Title>
      <SearchFormContainer>
        <SearchInput
          type="text"
          placeholder="Search for a city..."
          onChange={handleChange}
          autoFocus
          value={searchText}
        />
        {searchText.length > 0 ? (
          <ClearIcon onClick={handleClick} />
        ) : (
          <SearchIcon />
        )}
      </SearchFormContainer>
      {searchText.length > 0 &&
        places.features &&
        places.features.length > 0 && <ResultsList places={places} />}
    </SearchContainer>
  );
};

export default SearchForm;
