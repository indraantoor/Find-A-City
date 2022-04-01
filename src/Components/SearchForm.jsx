import { useEffect, useState } from "react";
import styled from "styled-components";
import ResultsList from "./ResultsList";
import SearchIcon from "../Assets/SearchIcon";
import ClearIcon from "../Assets/ClearIcon";
import { fetchPlaces } from "../requests";

const SearchContainer = styled.div`
  margin-top: 30px;
  // background-color: yellow;
  padding: 20px;
`;

const Title = styled.h1`
  // background-color: red;
  //   color: #36382e;
  color: #001011;
  // text-align: center;
  padding: 10px;
  font-weight: 800;
  font-size: 52px;
  padding-left: 24.4%;
`;

const SearchFormContainer = styled.div`
  // background-color: purple;
  background-color: #fffff3;
  margin-top: 10px;
  display: flex;
  padding: 10px;
  width: 50%;

  // box-shadow: 0 0 6px #757780;
  // border: none;
  border: solid 1px #dadad9;

  border-radius: 10px;

  // transition: border 0.6s ease-in;
  margin: 0 auto;

  &:hover {
    // border: solid 1px #dadad9;
    box-shadow: 0 0 6px #757780;
    border: none;
  }

  &:focus {
    // background-color: green;
  }
`;

const SearchInput = styled.input`
  // padding: 10px;
  width: 95%;
  // margin: 0 auto;
  border: none;
  height: 35px;
  color: #001011;
  font-size: 18px;
  font-weight: 600;
  // background-color: white;

  &:focus {
    outline: none !important;
    // border: solid 1px #757780;
  }
`;

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}

const SearchForm = () => {
  const [places, setPlaces] = useState({});
  const [searchText, setSearchText] = useState("");
  const debouncedSearchText = useDebounce(searchText, 180);

  useEffect(() => {
    let cancelled = false;

    if (debouncedSearchText.length > 0 && debouncedSearchText) {
      if (cancelled) return;
      fetchPlaces(debouncedSearchText).then((results) => {
        setPlaces((prevData) => ({
          ...prevData,
          ...results,
        }));
      });
    }

    return () => {
      cancelled = true;
    };
  }, [debouncedSearchText]);

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
