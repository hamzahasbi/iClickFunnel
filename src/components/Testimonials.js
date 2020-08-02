import React from "react"

const Testimonials = props => {
  return (
    <section id="testimonials" className="testimonials">
      <h2 className="mt-4 pt-2">Testimonials</h2>
      <div className="testimonial-group">
        <div className="testimonial-card-1">
          <div className="testimonial-1-photo"></div>
          <div className="testimonial-1-message">
            <h2 className="testimonial-1-name"></h2>
            <blockquote className="testimonial-1-content">
              Outstanding Service. Quick to respond, and very talented at
              creating this videos. Thanks for all your work and would
              recommend!
            </blockquote>
          </div>
        </div>
        <div className="testimonial-card-2">
          <div className="testimonial-2-photo"></div>
          <div className="testimonial-2-message">
            <h3 className="testimonial-2-name"></h3>
            <blockquote className="testimonial-2-content">
              The service was excellent, the video came out in good quality.
              Almost no repairs were needed Thank you very much.
            </blockquote>
          </div>
        </div>
        <div className="testimonial-card-3">
          <div className="testimonial-3-photo"></div>
          <div className="testimonial-3-message">
            <h3 className="testimonial-3-name"></h3>
            <blockquote className="testimonial-3-content">
              Great experience. Fast, communicative. took our direction well.
              Really helped us get something we could be proud of and expressed
              what we needed it to.
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
