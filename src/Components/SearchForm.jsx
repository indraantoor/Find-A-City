import styled from "styled-components";

const SearchContainer = styled.div`
  margin-top: 100px;
`;

const Title = styled.h1`
  background-color: red;
  color: #36382e;
  text-align: center;
  padding: 10px;
  font-weight: 800;
`;

const SearchFormContainer = styled.div`
  background-color: purple;
  display: flex;
  padding: 10px;
`;

const SearchInput = styled.input`
  padding: 10px;
  width: 50%;
  margin: 0 auto;
  border: solid 3px #ede6e3;
  box-shadow: 0 0 10px #dadad9;
  color: #36382e;
  font-size: 18px;
  font-weight: 600;

  &:focus {
    outline: none !important;
  }
`;

const SearchForm = () => {
  return (
    <SearchContainer>
      <Title>Find A City</Title>
      <SearchFormContainer>
        <SearchInput type="text" placeholder="Search for a city..." />
      </SearchFormContainer>
    </SearchContainer>
  );
};

export default SearchForm;
