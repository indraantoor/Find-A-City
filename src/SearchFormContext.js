import React, { useReducer, createContext, useCallback } from "react";

const initialState = {
  searchText: "",
  places: {},
};

export const SearchFormContext = createContext();

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

export const SearchFormProvider = ({ children }) => {
  const [searchFormState, dispatch] = useReducer(reducer, initialState);

  const placesSet = useCallback(
    (data) => {
      dispatch({
        type: SET_PLACES,
        payload: { places: data },
      });
    },
    [dispatch]
  );

  const setText = useCallback(
    (searchText) => {
      dispatch({
        type: SET_SEARCH_TEXT,
        payload: {
          searchText,
        },
      });
    },
    [dispatch]
  );

  const clearText = useCallback(() => {
    setText("");
  }, [setText]);

  const value = { searchFormState, placesSet, setText, clearText };

  return (
    <SearchFormContext.Provider value={value}>
      {children}
    </SearchFormContext.Provider>
  );
};
