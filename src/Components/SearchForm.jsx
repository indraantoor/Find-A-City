import { useEffect, useState } from "react";
import styled from "styled-components";
import ResultsList from "./ResultsList";

const SearchContainer = styled.div`
  margin-top: 100px;
  //   background-color: yellow;
  padding: 20px;
`;

const Title = styled.h1`
  //   background-color: red;
  //   color: #36382e;
  color: #001011;
  text-align: center;
  padding: 10px;
  font-weight: 800;
  font-size: 52px;
`;

const SearchFormContainer = styled.div`
  //   background-color: purple;
  margin-top: 10px;
  display: flex;
  padding: 10px;
`;

const SearchInput = styled.input`
  padding: 10px;
  width: 50%;
  margin: 0 auto;
  box-shadow: 0 0 6px #757780;
  border: none;
  border-radius: 10px;
  height: 35px;
  color: #001011;
  font-size: 18px;
  font-weight: 600;
  background-color: #fffffc;

  &:focus {
    outline: none !important;
  }
`;

const accessToken =
  "pk.eyJ1IjoiZ2Vibzk2IiwiYSI6ImNrcThnd2o3czAxenUyb3Ftcm5ycWRyNm4ifQ.UcZ74o-OQBOQikUVDNk7.";

const SearchForm = () => {
  const [cities, setCities] = useState({});
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await fetch(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchText}.json?access_token=${accessToken}`
        );
        const json = await response.json();
        console.log(json);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPlaces();
  }, [searchText]);

  const handleChange = (e) => {
    const updatedSearchText = e.target.value;
    setSearchText(updatedSearchText);
  };

  return (
    <SearchContainer>
      <Title>Find A City</Title>
      <SearchFormContainer>
        <SearchInput
          type="text"
          placeholder="Search for a city..."
          onChange={handleChange}
        />
      </SearchFormContainer>
      {searchText.length > 0 && <ResultsList />}
    </SearchContainer>
  );
};

export default SearchForm;
