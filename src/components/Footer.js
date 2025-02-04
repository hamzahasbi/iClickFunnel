import React from "react"

const Footer = ({ siteTitle }) => {
  return (
    <footer className="footer">
      <div className="footer-belt">
        <div className="company-sign">&copy; 2020 {siteTitle}</div>
        {/* <div className="social-media">
          <a href="https://www.facebook.com"><div className="social-facebook">Facebook</div></a>
          <a href="https://www.twitter.com"><div className="social-twitter">Twitter</div></a>
          <a href="https://www.instagram.com"><div className="social-instagram">Instagram</div></a>
        </div> */}
      </div>
    </footer>
  )
}

export default Footer
