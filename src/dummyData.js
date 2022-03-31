export const data = {
  type: "FeatureCollection",
  query: ["chandigarh"],
  features: [
    {
      id: "place.8930675030530530",
      type: "Feature",
      place_type: ["place"],
      relevance: 1,
      properties: { wikidata: "Q43433" },
      text: "Chandigarh",
      place_name: "Chandigarh, Chandigarh capital, India",
      bbox: [76.704402, 30.667079, 76.84904, 30.7951],
      center: [76.79111, 30.73528],
      geometry: { type: "Point", coordinates: [76.79111, 30.73528] },
      context: [
        {
          id: "district.8930675030530530",
          wikidata: "Q43433",
          text: "Chandigarh",
        },
        {
          id: "region.10877999269530530",
          wikidata: "Q17050405",
          text: "Chandigarh capital",
        },
        {
          id: "country.2782945337",
          wikidata: "Q668",
          short_code: "in",
          text: "India",
        },
      ],
    },
    {
      id: "place.10877999269530530",
      type: "Feature",
      place_type: ["region", "place"],
      relevance: 1,
      properties: { wikidata: "Q17050405" },
      text: "Chandigarh capital",
      place_name: "Chandigarh capital, India",
      matching_text: "Chandigarh",
      matching_place_name: "Chandigarh, India",
      bbox: [
        76.7044011402504, 30.6674120842721, 76.8490409999052, 30.795100996793,
      ],
      center: [76.767784, 30.739119],
      geometry: { type: "Point", coordinates: [76.767784, 30.739119] },
      context: [
        {
          id: "country.2782945337",
          wikidata: "Q668",
          short_code: "in",
          text: "India",
        },
      ],
    },
    {
      id: "address.2148840931796174",
      type: "Feature",
      place_type: ["address"],
      relevance: 0.8,
      properties: { accuracy: "street" },
      text: "Rue Chandigarh",
      place_name: "Rue Chandigarh, 94310 Orly, France",
      center: [2.416237, 48.746202],
      geometry: { type: "Point", coordinates: [2.416237, 48.746202] },
      context: [
        { id: "neighborhood.16569510505991850", text: "Nouvelet" },
        { id: "postcode.10616080460170620", text: "94310" },
        {
          id: "place.10583380766132870",
          wikidata: "Q236058",
          text: "Orly",
        },
        {
          id: "region.10065783959965670",
          short_code: "FR-94",
          wikidata: "Q12788",
          text: "Val-de-Marne",
        },
        {
          id: "country.19008108158641660",
          wikidata: "Q142",
          short_code: "fr",
          text: "France",
        },
      ],
    },
  ],
  attribution:
    "NOTICE: © 2022 Mapbox and its suppliers. All rights reserved. Use of this data is subject to the Mapbox Terms of Service (https://www.mapbox.com/about/maps/). This response and the information it contains may not be retained. POI(s) provided by Foursquare.",
};
