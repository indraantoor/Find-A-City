import styled from "styled-components";

export const SearchContainer = styled.div`
  margin-top: 30px;
  // background-color: yellow;
  padding: 20px;
`;

export const Title = styled.h1`
  // background-color: red;
  //   color: #36382e;
  color: #001011;
  // text-align: center;
  padding: 10px;
  font-weight: 800;
  font-size: 52px;
  padding-left: 24.4%;
`;

export const SearchFormContainer = styled.form`
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

export const SearchInput = styled.input`
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
