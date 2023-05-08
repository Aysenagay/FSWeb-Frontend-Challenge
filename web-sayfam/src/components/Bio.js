import React from "react";
import { Link } from "react-scroll";

export default function Bio() {
  return (
    <div className="heroSection">
      <div className="hero">
        <div className="hero-left">
          <div className="name">
            <div className="line">
              <h5 className="name-line">___________</h5>
              <h5>Ayşen Agay</h5>
            </div>
          </div>
          <h1 className="heading">
            Creative thinker <br />
            Minimalism lover
          </h1>
          <p className="intro">
            Hi, I’m Ayşen. I’m a full-stack developer. If you are looking for a
            Developer who to craft solid and scalable frontend products with
            great user experiences. Let’s shake hands with me.
          </p>
          <div className="buttons">
            <div className="hire-button">
              <Link to="footer">
                <p className="hiremeText">Contact me</p>
              </Link>
            </div>

            <div className="github-button">
              <img src="github.png" alt="github" />{" "}
              <a href="https://github.com/Aysenagay" target="_blank">
                Github
              </a>
            </div>
            <div className="linkedin-button">
              <img src="LinkedIn.png" alt="linkedin" />
              <a
                href="https://www.linkedin.com/in/aysen-agay-94407b178/"
                target="_blank"
              >
                Linkedin
              </a>
            </div>
          </div>
        </div>
        <img
          className="bio-image"
          src="https://media.licdn.com/dms/image/D4D03AQEx47_t3cuX5A/profile-displayphoto-shrink_200_200/0/1680813146793?e=1689206400&v=beta&t=Ei3vmBprDw4_mz6Xn1QVvTHcxyPgxyHMxKYRUuChbJU"
          alt="profile"
        />
      </div>
    </div>
  );
}
