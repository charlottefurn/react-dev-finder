import { ReactElement } from "react";

export const Contact = (): ReactElement => {
    return (
        <div className="contact is-flex is-flex-direction-column">
        <p>Created by Charlotte Furness</p>
        <div className="icons is-flex is-flex-direction-row is-justify-content-space-evenly">
          <a target="_blank" href="https://github.com/charlottefurn"><i className="fab fa-github"></i></a>
          <a target="_blank" href="https://www.linkedin.com/in/charlotte-furness-859027211/"><i class="fab fa-linkedin"></i></a>
        </div>
      </div>
    )
}