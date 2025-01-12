import React from "react";

export default function Profile({ language }) {
  return (
    <div className="profileContainer">
      <div className="profile">
        <div className="profile-infoCol">
          <h1 className="profile-heading">Profile</h1>
          <div></div>
          <div className="profile-infoText">
            <div className="profile-box">
              <div className="right">
                <h3 className="content-heading">Profile</h3>
                <div className="second">
                  <div className="keys">
                    {language === "en" ? (
                      <p>Birth Date</p>
                    ) : (
                      <p>Doğum Tarihi</p>
                    )}
                    {language === "en" ? <p>City</p> : <p>Şehir</p>}
                    {language === "en" ? (
                      <p>Education Status</p>
                    ) : (
                      <p>Eğitim Durumu</p>
                    )}
                    <br />
                    <br />
                    {language === "en" ? <p>Position</p> : <p>Pozisyon</p>}
                  </div>
                  <div className="values">
                    <p>28.03.1998</p>
                    <p>İstanbul</p>
                    {language === "en" ? (
                      <p>
                        Sakarya University,Electrical-Electronics
                        Engineering,2021
                      </p>
                    ) : (
                      <p>
                        Sakarya Üniversitesi,Elektrik Elektronik
                        Mühendisliği,2021
                      </p>
                    )}
                    <p>Frontend Developer,UI</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-box">
              {language === "en" ? (
                <div>
                  <h3 className="content-heading">About Me</h3>
                  <p>
                    I'm Ayşen.I graduated from Sakarya University in 2021.I love
                    to write code.In 2023, I received Full Stack Web Developer
                    training from Workintech institution.I continue my career
                    with software.
                  </p>
                </div>
              ) : (
                <div>
                  <h3 className="content-heading">Hakkımda</h3>
                  <p>
                    Ben Ayşen. 2021 Sakarya Üniversitesinden mezun oldum. Kod
                    yazmayı seviyorum. 2023 yılında Workintech kurumundan Full
                    Stack Web Developer eğitimi aldım. Kariyerime yazılım ile
                    devam etmekteyim.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
