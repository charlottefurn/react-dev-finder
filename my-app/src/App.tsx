import "./App.css";
import { ReactElement, useState } from "react";
import { Search } from "./Search.tsx";
import { Details } from "./Details.tsx";

const App = (): ReactElement => {


  // useEffect(() => {
  // fetch("https://api.github.com/users/")  //needs to get name from search and pass into here???

  // .then((result) => result.json())
  // .then((data) => {
  //     console.log(data);
  //     setUser(data)
  // });
  // }, [])

  return (
    <>
      <h2 className="heading">devfinder</h2>

      <div className="wrapper">
        {/* <Search user={user} /> */}
        <Details />
      </div>
    </>
  );
};

export default App;
