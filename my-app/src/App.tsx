import "./App.css";
import { ReactElement, useState } from "react";
import { Search } from "./Search.tsx";
import { Details } from "./Details.tsx";

const App = (): ReactElement => {
  return (
      <div className="wrapper is-flex is-flex-direction-column is-align-items-center">
        <h2 className="heading">devfinder</h2>
        <Details />
      </div>

  );
};

export default App;
