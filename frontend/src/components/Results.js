import React, { Fragment, useState } from "react";

export default function Results(props) {
  if (props.datas.length > 0) {
    console.log(props.datas);
    console.log(props.datas[0][0].title);
  }

  const fullar =
    props.datas.length > 0
      ? props.datas[0].map((data) => (
          <div>
            {data.title[0] != "<" && (
              <div>
                <h1>Cim: {data.title}</h1>
                <p>Link a cikkhez: {data.url}</p>
                <p>Forras: {data.source}</p>
              </div>
            )}
          </div>
        ))
      : [];

  return (
    <Fragment>
      <ul>{fullar.length > 0 && fullar}</ul>
    </Fragment>
  );
}
