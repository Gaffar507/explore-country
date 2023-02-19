import React, { useEffect, useState } from "react";

import style from "./search.module.css";

export default function Search(props) {
  const [search, setSearch] = useState("");
  const searchCountry = (country) => {
    const name = country.target.value;
    setSearch(name);
  };
  useEffect(() => {
    props.getSearch(search);
  }, [search]);

  return (
    <div style={{ textAlign: "right", margin: ".5rem" }}>
      <input
        className={style.input}
        onChange={searchCountry}
        type="search"
        placeholder="search country by name"
        value={search}
      ></input>
    </div>
  );
}
