import React, { useState } from "react";
import "../Styles/Students.css";

import dropdown from "../FromFigma/Icons/dropdown.svg";
import call from "../FromFigma/Icons/call.svg";
import Email from "../FromFigma/Icons/Email.svg";
import Dots from "../FromFigma/Icons/Dots.svg";
import search from "../FromFigma/Icons/search.svg";

const data = [
  {
    id: "#123456789",
    name: "Samanta William",
    date: "March 25, 2021",
    parent: "Mana William",
    city: "Jakarta",
    grade: "VII A",
  },
  {
    id: "#987654321",
    name: "James Soap",
    date: "March 25, 2021",
    parent: "Tony Soap",
    city: "Jakarta",
    grade: "VII B",
  },
];

const Students = () => {
  const [checked, setChecked] = useState(null);

  return (
    <div className="main">
      <div className="admin-info">
        <div className="profile-pic">{/* admin icon */}</div>
        <div>
          <h4>Nabila A.</h4>
          <p>Admin</p>
        </div>
      </div>

      <div className="topbar">
        <h2>Students</h2>

        <div className="actions">
          <button className="outline-btn">
            Newest
            <span className="arrow-down">
              <img src={dropdown} alt="dropdown" />
            </span>
          </button>
          <button className="primary-btn">
            <span className="plus-icon">+</span> New Student
          </button>
        </div>
      </div>

      <div className="search-box">
        <input type="text" placeholder="Search here..." />
        <span className="search-icon">
          <img src={search} alt="search" className="Student--Icon" />
        </span>
      </div>

      <div className="table-wrapper">
        <div className="table-header">
          <span><input type="checkbox" disabled /></span>
          <span>Name</span>
          <span>ID</span>
          <span>Date</span>
          <span>Parent</span>
          <span>City</span>
          <span>Contact</span>
          <span>Grade</span>
          <span>Action</span>
        </div>

        {data.map((item, index) => (
          <div
            key={index}
            className={`table-row ${checked === index ? "row-selected" : ""}`}
          >
            <input
              type="checkbox"
              checked={checked === index}
              onChange={() => setChecked(checked === index ? null : index)}
            />

            <div className="student-info">
              <div className="avatar" />
              <div>
                <strong>{item.name}</strong>
                <p className="small-date">{item.date}</p>
              </div>
            </div>

            <span>{item.id}</span>
            <span>{item.date}</span>
            <span>{item.parent}</span>
            <span>{item.city}</span>
            <span className="icons">
              <img src={call} alt="call" className="Student--Icon" />
              <img src={Email} alt="email" className="Student--Icon" />
            </span>
            <span>
              <div className="badge orange">{item.grade}</div>
            </span>
            <span>
              <img src={Dots} alt="action" className="Student--Icon" />
            </span>
          </div>
        ))}
      </div>

      <div className="pagination">
        <span>Showing 1-5 from 100 data</span>
        <div className="pages">
          <button>{"<"}</button>
          <button className="active">1</button>
          <button>2</button>
          <button>3</button>
          <button>{">"}</button>
        </div>
      </div>
    </div>
  );
};

export default Students;