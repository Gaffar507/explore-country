import React from "react";

import style from "./country.module.css";

export default function Country(props) {
  const { area, name, capital, population, continents, flags, maps } = props;
  const removeCountry = (name) => {
    props.getName(name);
  };

  return (
    <div>
      <section className={style.card}>
        <h2>{name.common}</h2>
        <img className={style.image} src={flags.png}></img>
        <h3>Capital: {capital}</h3>
        <p>Continents: {continents}</p>
        <p>Population: {population}</p>
        <p> Area: {area}</p>
        <span>
          View{" "}
          <a href={maps.googleMaps} target="_blank">
            {" "}
            {name.common}{" "}
          </a>{" "}
          on Map
        </span>{" "}
        <br />
        <button
          className={style.btn}
          onClick={() => removeCountry(name.common)}
        >
          Remove {name.common}
        </button>
      </section>
    </div>
  );
}
