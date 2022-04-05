import React from "react";

import {
  Container,
  SearchButton,
  SearchInput,
  WrapperRadio,
  WrapperSearch,
  WrapperSelect,
} from "./styles";

function Search() {
  return (
    <Container>
      <h1>Find your next property</h1>
      <WrapperSearch>
        <WrapperRadio>
          <input
            type="radio"
            name="for-rent"
            id="sale"
            value={"for-rent"}
            defaultChecked
          />
          <label htmlFor="sale">For Sale</label>
          <input type="radio" name="for-rent" id="rent" value={"for-sale"} />
          <label htmlFor="rent">For Rent</label>
        </WrapperRadio>
        <WrapperSelect>
          <select>
            <option value="4">Apartment </option>
            <option value="16">Townhouses</option>
            <option value="21">Hotel Apartments</option>
            <option value="3">Villas</option>
          </select>
        </WrapperSelect>
        <SearchInput type="text" placeholder="Enter a location" />
        <SearchButton>Search</SearchButton>
      </WrapperSearch>
    </Container>
  );
}

export default Search;
