import "./App.css";
import { ReactElement, useState } from "react";
import { Search } from "./Search.tsx";
import { Details } from "./Details.tsx";
import { Contact } from "./Contact.tsx";

const App = (): ReactElement => {
  return (
      <div className="is-flex is-flex-direction-column is-align-items-center">
        <h2 className="heading">devfinder</h2>
        <Details />
        <Contact />
      </div>

  );
};

export default App;
