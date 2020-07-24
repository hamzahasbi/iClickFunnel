import React from "react"
import Button from "./Button"

const ValueProp = props => {
  return (
    <section className="value-prop">
      <div className="value-prop-content">
        <div className="main-message">
          <h1>Describe your needs and let us do the job for you!</h1>
          <p className="main-subtitle">
            Eye Catching, stunning and professional animation and explainer
            videos.
          </p>
          <Button label="Get Started" />
        </div>
        <div className="main-photo"></div>
      </div>
    </section>
  )
}

export default ValueProp
