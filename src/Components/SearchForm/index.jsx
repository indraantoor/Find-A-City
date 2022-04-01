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

const initialState = {
  searchText: "",
  places: {},
};

const SET_SEARCH_TEXT = "SET_SEARCH_TEXT";
const SET_PLACES = "SET_PLACES";

const reducer = (state, action) => {
  console.log({ action });
  if (action.type === SET_SEARCH_TEXT) {
    const { searchText } = action.payload;
    return {
      ...state,
      searchText,
    };
  }

  if (action.type === SET_PLACES) {
    const { places } = action.payload;
    return {
      ...state,
      places,
    };
  }

  return state;
};

const getPlaces = (debouncedSearchText, setFn) => {
  let cancelled = false;

  if (debouncedSearchText.length > 0 && debouncedSearchText) {
    if (cancelled) return;
    fetchPlaces(debouncedSearchText).then((results) => {
      // setFn((prevData) => ({
      //   ...prevData,
      //   ...results,
      // }));
      setFn(results);
    });
  }

  return () => {
    cancelled = true;
  };
};

const SearchForm = () => {
  // const [places, setPlaces] = useState({});
  // const [searchText, setSearchText] = useState("");
  // const [searchFormState, dispatch] = useReducer(reducer, initialState);
  const { searchFormState, clearText, placesSet, setText } =
    useContext(SearchFormContext);
  const debouncedSearchText = useDebounce(searchFormState.searchText, 180);

  const testingState = useContext(SearchFormContext);

  // const placesSet = (data) => {
  //   dispatch({
  //     type: SET_PLACES,
  //     payload: { places: data },
  //   });
  // };

  useEffect(() => {
    getPlaces(debouncedSearchText, placesSet);
  }, [debouncedSearchText, placesSet]);

  // useEffect(() => {
  //   placesSet(places);
  // }, [places]);

  // const setText = (searchText) => {
  //   dispatch({
  //     type: SET_SEARCH_TEXT,
  //     payload: {
  //       searchText,
  //     },
  //   });
  // };

  // const clearText = () => {
  //   setText("");
  // };

  const handleChange = (e) => {
    const updatedSearchText = e.target.value;
    // setSearchText(updatedSearchText);
    setText(updatedSearchText);
  };

  const handleClick = (e) => {
    // Clear Textbox
    // const updatedSearchText = "";
    // setSearchText(updatedSearchText);
    clearText();
  };

  console.log(searchFormState);
  console.log("state -----------");
  console.log(testingState);
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
