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
                <div className="two-part">
                  <div className="keys">
                    <p>Doğum tarihi</p>
                    <p>İkamet Şehri</p>
                    <p>Eğitim Durumu</p>
                    <br /> <br />
                    <p>Tercih Ettiği Rol</p>
                  </div>
                  <div className="values">
                    <p>28.03.1998</p>
                    <p>İstanbul</p>
                    <p>
                      Sakarya Üniversitesi-Elektrik Elektronik Mühendisliği-2021
                    </p>
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
                    to write code.In 2022, I received Full Stack Web Developer
                    training from Workintech institution.I continue my career
                    with software.
                  </p>
                </div>
              ) : (
                <div>
                  <h3 className="content-heading">Hakkımda</h3>
                  <p>
                    Ben Ayşen. 2021 Sakarya Üniversitesinden mezun oldum. Kod
                    yazmayı seviyorum. 2022 yılında Workintech kurumundan Full
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
