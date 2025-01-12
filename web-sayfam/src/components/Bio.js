import React from "react";
import { Link } from "react-scroll";

export default function Bio({ language }) {
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
          {language === "en" ? (
            <h1 className="heading">
              Creative thinker <br />
              Minimalism lover
            </h1>
          ) : (
            <h1 className="heading">
              Yaratıcı düşünür
              <br />
              Minimalizm Aşığı
            </h1>
          )}
          {language === "en" ? (
            <p className="intro">
              Hi, I’m Ayşen. I’m a full-stack developer. If you are looking for
              a Developer who to craft solid and scalable frontend products with
              great user experiences. Let’s shake hands with me.
            </p>
          ) : (
            <p className="intro">
              Merhaba, ben Ayşen. Ben bir full-stack geliştiricisiyim. Eğer
              sağlam ve ölçeklenebilir bir web sayfası tasarlamak isterseniz
              benimle iletişime geçebilirsiniz.
            </p>
          )}
          <div className="buttons">
            <div className="hire-button">
              <Link to="footer">
                {language === "en" ? (
                  <p className="hiremeText">Contact me</p>
                ) : (
                  <p className="hiremeText">Bana ulaşın</p>
                )}
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
        <img className="bio-image" src="linkedin_foto.jpg" alt="profile" />
      </div>
    </div>
  );
}
