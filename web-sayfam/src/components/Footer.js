import React from "react";

export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="footer">
        <div className="footerCol">
          <h2 className="lets">
            Let’s work together on <br /> your next product.
          </h2>
          <div className="footerInfo">
            <a href="mailto:aysenagay82@gmail.com" className="mail">
              👉 aysenagay82@gmail.com
            </a>

            <div className="links-footer">
              <p>Personal Blog</p>
              <a
                href="https://github.com/Aysenagay"
                className="githubFooter"
                target="_blank"
              >
                Github
              </a>
              <a
                href="https://www.linkedin.com/in/aysen-agay-94407b178/"
                className="linkedinFooter"
                target="_blank"
              >
                Linkedin
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
