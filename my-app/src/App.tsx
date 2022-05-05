import "./App.css";
import { ReactElement, useState } from "react";
import { Details } from "./Details.tsx";
import { Contact } from "./Contact.tsx";

const App = (): ReactElement => {
  return (
      <div className="is-flex is-flex-direction-column is-align-items-center">
        <h2 className="title is-3 has-text-white">devfinder</h2>
        <Details />
        <Contact />
      </div>

  );
};

export default App;
