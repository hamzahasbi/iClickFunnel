import React from "react"
import affiliateLinks from "../helpers/partners"

const Testimonials = props => {
  return (
    <section id="testimonials" className="testimonials">
      <h2 className="mt-4 pt-2">Partners</h2>
      <div className="testimonial-group">
        {affiliateLinks.map((el, index) => {
          index += 1
          return (
            <div key={index} className={`testimonial-card-${index}`}>
              <div className={`testimonial-${index}-photo`}></div>
              <div className={`testimonial-${index}-message`}>
                <h3 className={`testimonial-${index}-name mt-5`}>
                  <a href={el.link}> {el.partner} </a>
                </h3>
                <blockquote className="testimonial-1-content">
                  {el.description}
                </blockquote>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Testimonials
