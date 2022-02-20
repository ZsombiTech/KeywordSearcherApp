import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Results from "./components/Results";

function App() {
  const [search, setSearch] = useState("");
  const [datas, setDatas] = useState([]);
  return (
    <div className="App">
      <Header title="Keress ra egy szora Magyarorszag leghiresebb ujsagjai kozott" />
      <Search setSearch={setSearch} search={search} setDatas={setDatas} />
      <Results datas={datas} />
    </div>
  );
}

export default App;
