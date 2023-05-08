import React from "react";

export default function Profile() {
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
              <h3 className="content-heading">About Me</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
                aut, odit laborum aliquam voluptatum nisi mollitia. Mnima
                accusamus ratione soluta aperiam sit voluptate? Dicta quod
                deserunt quam temporibus cumque magnam!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
