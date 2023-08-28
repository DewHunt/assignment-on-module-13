"use client";
import ShowAllCookies from "@/components/cookies/ShowAllCookies";
import { useState } from "react";

export default function ReadingCookies() {
  const [cookieName, setCookieName] = useState();
  const [cookieData, setCookieData] = useState([]);

  const getCookie = async () => {
    console.log("cookieName: ", cookieName);
    (async () => {
      const requestData = {
        name: cookieName,
      };
      const response = await fetch(`${process.env.API}read-cookies`, {
        method: "POST",
        body: JSON.stringify(requestData),
      });
      const cookieList = await response.json();
      await setCookieData(cookieList.cookieData);
      console.log("cookieList: ", cookieList.cookieData);
    })();
  };

  const getAllCookies = () => {
    (async () => {
      const response = await fetch(`${process.env.API}read-cookies`);
      const cookieList = await response.json();
      console.log("cookieList: ", cookieList.cookieList);
      setCookieData(cookieList.cookieList);
    })();
  };
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header text-center">
          <h3>Reading Cookies</h3>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-md-8 col-sm-8 col-12">
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
            <div className="col-xxl-2 col-xl-2 col-md-2 col-sm-2 col-12">
              <div className="d-grid" style={{ marginTop: "31px" }}>
                <button className="btn btn-outline-success" onClick={getCookie}>
                  Get Cookie
                </button>
              </div>
            </div>
            <div className="col-xxl-2 col-xl-2 col-md-2 col-sm-2 col-12">
              <div className="d-grid" style={{ marginTop: "31px" }}>
                <button
                  className="btn btn-outline-success"
                  onClick={getAllCookies}>
                  Get All Cookies
                </button>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-xxl-12 col-xl-12 col-md-12 col-sm-12 col-12">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Value</th>
                    <th>Path</th>
                  </tr>
                </thead>
                <tbody>
                  {/* {cookieData.length > 0 ? JSON.stringify(cookieData) : ""} */}
                  <ShowAllCookies cookieData={cookieData} />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
