import { ReactElement, useState } from "react";
import defaultAvatar from "../src/avatar.jpg";
import { User } from "./User";

export const Details = (): ReactElement => {
    const [user, setUser] = useState<User>({
      avatar_url: defaultAvatar,
      name: "John Doe",
      login: "johndoe",
      location: "New York, NY", 
      url: "https://github.com/johndoe",
      public_repos: "7",
      followers: "20",
      following: "80"
    });
    const [inputName, setInputName] = useState<string>("");
   
    const submit = (event): void => {
      event.preventDefault();
      fetch("https://api.github.com/users/" + inputName)

      .then((result) => result.json())
      .then((data: User) => {
          console.log(data);
          setUser(data)
      });
    }
   
   
    return (
      <>
        <div className="search-container">
        <form id="form" autoComplete="off">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="search"
              onChange={event => setInputName(event.target.value)}
            />
            <button onClick={submit}>Search</button>
          </div>
        </form>
      </div>

        <div className="results-container">
        <div id="result">
          <div className="results-wrapper">
            <div className="info">
              <img src={user.avatar_url} />
              <div className="names">
                <h1 className="name">{user.name}</h1>
                <h1 className="username">@{user.login}</h1>
              </div>
            </div>

            <div className="stats">
              <table>
                <tr>
                  <td>Repos</td>
                  <td>Followers</td>
                  <td>Following</td>
                </tr>
                <tr>
                  <td>{user.public_repos}</td>
                  <td>{user.followers}</td>
                  <td>{user.following}</td>
                </tr>
              </table>
            </div>

            <div className="misc">
              <h1><i className="fas fa-map-marker-alt"></i> {user.location}</h1>
              <h1>
                <a target="_blank" href="#"><i className="fas fa-link"></i> {user.url}</a>
              </h1>
            </div>

          </div>
        </div>
        <div id="overlay"></div>
      </div>
      </>
    )
}