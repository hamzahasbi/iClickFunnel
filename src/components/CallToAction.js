import Button from "./Button"
import React from "react"

const CallToAction = props => {
  return (
    <section className="cta">
      <h1>Contact us for further information or to get a custom offer.</h1>
      <p>There&apos;s nothing to lose. Feel free to ask.</p>
      <Button className="nav-item-bold" label="Contact us" />
    </section>
  )
}

export default CallToAction
