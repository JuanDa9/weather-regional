import React, { useState } from "react";
import { InputSearchbar, StyledSearchbar } from "./styledSearchBar";

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <StyledSearchbar>
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
      <InputSearchbar
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <InputSearchbar type="submit" value="Agregar" />
    </form>
    </StyledSearchbar>
  );
}

