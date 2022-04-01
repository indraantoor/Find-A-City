const accessToken = process.env.REACT_APP_ACCESS_TOKEN;

export const endpoint = (searchText) => {
  const updatedUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchText}.json?access_token=${accessToken}`;
  return updatedUrl;
};
