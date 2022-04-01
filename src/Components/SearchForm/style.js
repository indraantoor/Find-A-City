import styled from "styled-components";

export const SearchContainer = styled.div`
  margin-top: 30px;
  padding: 20px;
`;

export const Title = styled.h1`
  color: #001011;
  padding: 10px;
  font-weight: 800;
  font-size: 52px;
  padding-left: 24.4%;
`;

export const SearchFormContainer = styled.form`
  background-color: #fffff3;
  margin-top: 10px;
  display: flex;
  padding: 10px;
  width: 50%;
  border: solid 1px #dadad9;
  border-radius: 10px;
  margin: 0 auto;

  &:hover {
    box-shadow: 0 0 6px #757780;
    border: none;
  }
`;

export const SearchInput = styled.input`
  width: 95%;
  border: none;
  height: 35px;
  color: #001011;
  font-size: 18px;
  font-weight: 600;

  &:focus {
    outline: none !important;
  }
`;
