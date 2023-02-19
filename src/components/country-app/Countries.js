import React from "react";
import { v4 as uuidv4 } from "uuid";

import Country from "./Country";
import style from "./countries.module.css";

export default function Countries(props) {
  const countryData = props.countries.map((country) => {
    return <Country key={uuidv4} {...country} getName={props.getName} />;
  });
  return <div className={style.container}>{countryData}</div>;
}
