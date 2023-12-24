import React from "react";
import "./Profile.css";
import Druvis from "../../../assets/druvis.jpg";

function Profile() {
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-12">
            <div className="card col-md-6 mx-auto" style={{ width: "16rem" }}>
              <img src={Druvis} className="card-img-top" alt="ProfilePhoto" />
              <div className="card-body">
                <h5 className="card-title p-1">Carlos Heredia</h5>
                <p className="card-text p-2">
                  A junior programmer learning to do awesome things.
                </p>
              </div>
              <div className="card-body">
                <a
                  href="https://github.com/settings/profile"
                  className="card-link p-3"
                  target="_blank"
                >
                  GitHub
                </a>
                <a
                  href="https://www.instagram.com/lecarlangas/"
                  className="card-link"
                  target="_blank"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
