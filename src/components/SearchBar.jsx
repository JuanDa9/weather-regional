import React, { useState } from "react";
import { InputSearchbar, StyledSearchbar } from "./styledSearchBar";
import {Link} from 'react-router-dom'

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <StyledSearchbar>
    <Link to="/about">About</Link>
    
    <Link to="/">Cards</Link>
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

