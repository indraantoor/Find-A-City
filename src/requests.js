import { endpoint } from "./endpoint";

export const fetchPlaces = async (searchText) => {
  try {
    const response = await fetch(endpoint(searchText));
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};
