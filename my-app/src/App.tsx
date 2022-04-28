import "./App.css";
import { ReactElement, useState } from "react";
import { Search } from "./Search.tsx";
import { Details } from "./Details.tsx";

const App = (): ReactElement => {
  return (
    <>
      <h2 className="heading">devfinder</h2>

      <div className="wrapper">
        <Details />
      </div>
    </>
  );
};

export default App;
