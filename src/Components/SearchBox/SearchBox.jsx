import { useState } from "react";
import css from "./SearchBox.module.css";

const SearchBox = ({ changeFilter }) => {
  function handleChange(evt) {
    changeFilter(evt.target.value);
  }

  return (
    <label className={css.searchLabel} htmlFor="">
      Find contacts by name
      <input className={css.searchInput} onChange={handleChange} type="text" />
    </label>
  );
};

export default SearchBox;
