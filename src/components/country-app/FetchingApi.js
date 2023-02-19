import React, { useEffect, useState } from "react";

import Countries from "./Countries";
import Search from "./Search";
import style from "./fetchingApi.module.css";

const url = "https://restcountries.com/v3.1/all";

export default function FetchingApi() {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [country, setCountry] = useState([]);
  const [newCountry, setNewCountry] = useState(country);

  const fetchingData = async (url) => {
    try {
      const result = await fetch(url);
      const data = await result.json();
      setCountry(data);
      setNewCountry(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchingData(url);
  }, []);

  const getName = (name) => {
    setNewCountry((previousCountries) => {
      return previousCountries.filter(
        (country) => country.name.common !== name
      );
    });
  };
  const getSearch = (search) => {
    const searchValue = search.toLowerCase();
    const newSearchValue = country.filter((country) => {
      const searchName = country.name.common.toLowerCase();
      return searchName.startsWith(searchValue);
    });
    setNewCountry(newSearchValue);
  };

  return (
    <div className={style.container}>
      <h1
        style={{ textAlign: "center", paddingTop: "1rem", fontWeight: "bold" }}
      >
        Explore The World
      </h1>
      <Search getSearch={getSearch} />
      {isLoading && <h4>Data is loading...</h4>}
      {error && <h4>{error}</h4>}
      {<Countries getName={getName} countries={newCountry} />}
    </div>
  );
}
