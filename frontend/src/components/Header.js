import React from "react";
import "../styles/header.css";

export default function Header(props) {
  return (
    <div>
      <h1 className="maintitle">{props.title}</h1>
    </div>
  );
}
