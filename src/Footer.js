import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <small>
        This project was coded by Evgeniya Ryazantseva and is{" "}
        <a
          href="https://github.com/eoryazantseva/my-awesome-project"
          target="_blank"
        >
          open-sourced on GitHub
        </a>{" "}
        and hosted on <a href="https://netlify.com">Netlify</a>
      </small>
    </div>
  );
}
