"use client";

import { useState } from "react";

export default function SettingCookies() {
  const [cookieName, setCookieName] = useState();
  const [cookieValue, setCookieValue] = useState();

  const setCookie = () => {
    (async () => {
      const requestData = {
        cookieName,
        cookieValue,
      };
      await fetch(`${process.env.API}setting-cookies`, {
        method: "POST",
        body: JSON.stringify(requestData),
      });
    })();
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header text-center">
          <h3>Setting Cookies</h3>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-xxl-5 col-xl-5 col-md-5 col-sm-5 col-12">
              <label htmlFor="key" className="form-label">
                Key
              </label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => {
                  setCookieName(e.target.value);
                }}
              />
            </div>
            <div className="col-xxl-5 col-xl-5 col-md-5 col-sm-5 col-12">
              <label htmlFor="value" className="form-label">
                Value
              </label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => {
                  setCookieValue(e.target.value);
                }}
              />
            </div>
            <div className="col-xxl-2 col-xl-2 col-md-2 col-sm-2 col-12">
              <div className="d-grid" style={{ marginTop: "31px" }}>
                <button className="btn btn-outline-success" onClick={setCookie}>
                  Set Cookie
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
