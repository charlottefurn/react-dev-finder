import { ReactElement, useState } from "react";
import defaultAvatar from "../src/avatar.jpg";
import { FollowersModal } from "./FollowersModal.tsx";
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
      following: "80",
      twitter_username: "johndoe",
      company: null
    });
    const [inputName, setInputName] = useState<string>("");
    const [clicked, setClick] = useState<boolean>(false)
   
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
            <input
              type="text"
              className="input is-info"
              id="search"
              onChange={event => setInputName(event.target.value)}
            />
            <button className="button is-info" onClick={submit}>Search</button>
        </form>
      </div>

        <div className="results-container section is-small">
            <div className="is-flex is-flex-direction-row is-justify-content-space-evenly">
              <img src={user.avatar_url} />
              <div className="is-flex is-flex-direction-column is-justify-content-center">
                <h1 className="name">{user.name}</h1>
                <h1 className="username">@{user.login}</h1>
              </div>
            </div>

            <div className="stats is-flex is-flex-direction-row is-justify-content-center is-align-items-center">
              <table>
                <tbody>
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
                </tbody>
              </table>
            </div>

            <div className="icons is-flex is-flex-direction-column">
              <h1><i className="fas fa-map-marker-alt"></i> {user.location === null ? "Not available" : user.location}</h1>
              <h1>
                <a target="_blank" href={user.url}><i className="fas fa-link"></i> Go to GitHub!</a>
              </h1>
              <h1>
              <i className="fab fa-twitter"></i> {user.twitter_username === null ? "Not available" : user.twitter_username}
              </h1>
              <h1>
              <i className="fas fa-building"></i> {user.company === null ? "Not available" : user.company}
              </h1>
            </div>

          </div>
      </>
    )
}