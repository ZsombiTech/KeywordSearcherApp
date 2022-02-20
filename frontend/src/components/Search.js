import React, { Fragment } from "react";
import "../styles/search.css";
import axios from "axios";

export default function Search(props) {
  const inputhandler = (event) => {
    props.setSearch(event.target.value);
  };

  const getDatas = async () => {
    props.setDatas([]);
    axios.get(`http://localhost:8000/news/${props.search}`).then((res) => {
      const chunk = res.data;
      props.setDatas((old) => [...old, chunk]);
    });
  };

  return (
    <Fragment>
      <div className="fullsbar">
        <input
          type="text"
          className="search"
          placeholder="Username"
          onChange={inputhandler}
          value={props.search}
        />
        <button onClick={getDatas} className="getbutton">
          Search
        </button>
      </div>
    </Fragment>
  );
}
