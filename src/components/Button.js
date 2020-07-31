import React from "react"

const Button = ({ label }) => (
  <button className="button">
    <a
      className="mycta"
      href={`mailto:${MAILTO}`}
      target="_blank"
      rel="noreferrer"
    >
      {" "}
      {label}{" "}
    </a>
  </button>
)

export default Button
