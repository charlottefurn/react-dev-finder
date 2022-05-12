import "../styles/App.scss";
import React, { ReactElement, useState } from "react";
import { Details } from "./Details.tsx";
import { Contact } from "./Contact.tsx";

const App = (): ReactElement => {
  const [isLight, setIsLight] = useState<boolean>(false);

  return (
    <div className={isLight ? "lightmode" : "darkmode"}>
      <div className="wrap is-flex is-flex-direction-column is-align-items-center">
        <div className="header is-flex is-flex-direction-row is-align-items-center is-justify-content-space-evenly">
          <h2 className="title is-3">devfinder</h2>

          <div className="mode">
            <i
              onClick={(): void => setIsLight(true)}
              className="fas fa-sun"
            ></i>
            <i
              onClick={(): void => setIsLight(false)}
              className="fas fa-moon"
            ></i>
          </div>
        </div>
        <Details />
        <Contact />
      </div>
    </div>
  );
};

export default App;
