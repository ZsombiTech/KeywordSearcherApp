import React, { Fragment, useState } from "react";
import "../styles/results.css";

export default function Results(props) {
  if (props.datas.length > 0) {
    console.log(props.datas);
  }

  const fullar =
    props.datas.length > 0 &&
    props.datas[0].map((data, key) => (
      <div key={key}>
        {data.title[0] != "<" && (
          <div className="textcontainer">
            <h1>Cim: {data.title}</h1>
            <a href={data.url} target="_blank">
              Link a cikkhez
            </a>
            <p>Forras: {data.source}</p>
          </div>
        )}
      </div>
    ));
  return (
    <Fragment>
      <ul className="fullresults">
        {fullar.length > 0 ? fullar : <p className="noresults">No results</p>}
      </ul>
    </Fragment>
  );
}
