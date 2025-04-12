import React from "react";
import "../Styles/Teachers.css";

// import icon
import dropdown from "../FromFigma/Icons/dropdown.svg"
import call from "../FromFigma/Icons/call.svg"
import Email from "../FromFigma/Icons/Email.svg"
import Dots from "../FromFigma/Icons/Dots.svg"
import search from "../FromFigma/Icons/search.svg"

const teachers = [
  {
    name: "Dimitres Viga",
    subject: "Mathematics",
  },
  {
    name: "Tom Housenburg",
    subject: "Science",
  },
  {
    name: "Dana Benevista",
    subject: "Art",
  },
  {
    name: "Salvadore Morbeau",
    subject: "Biology",
  },
  {
    name: "Maria Historia",
    subject: "History",
  },
  {
    name: "Jack Sally",
    subject: "Physics",
  },
  {
    name: "Lula Beatrice",
    subject: "Algorithm",
  },
  {
    name: "Nella Vita",
    subject: "English",
  },
  {
    name: "Nadia Laravela",
    subject: "Programming",
  },
  {
    name: "Dakota Farral",
    subject: "Science",
  },
  {
    name: "Miranda Adila",
    subject: "Art",
  },
  {
    name: "Indiana Barker",
    subject: "Biology",
  },
];

const Teachers = () => {
  return (
    <div className="main">
      <div className="admin-info">
        <div className="profile-pic">{/* admin image */}</div>
        <div>
          <h4>Nabila A.</h4>
          <p>Admin</p>
        </div>
      </div>

      <div className="topbar">
        <h2>Teachers</h2>

        <div className="actions">
          <button className="outline-btn">
            Newest <span className="arrow-down">
              <img src={dropdown} alt="" />
            </span>
          </button>
          <button className="primary-btn">
            <span className="plus-icon">+</span> New Teacher
          </button>
        </div>
      </div>

      <div className="search-box">
        <input type="text" placeholder="Search here..." />
        <span className="search-icon">
          <img src={search} alt="" className="Same--Icon" />
        </span>
      </div>

      <div className="teacher-grid">
        {teachers.map((teacher, index) => (
          <div className="teacher-card" key={index}>
            <div className="avatar">{/* image */}</div>
            <div className="teacher-info">
              <h3>{teacher.name}</h3>
              <p>{teacher.subject}</p>
            </div>
            <div className="teacher-actions">
              <button><img src={call} alt="" className="Same--Icon" /></button>
              <button><img src={Email} alt="" className="Same--Icon" /></button>
              <span className="more-icon"><img src={Dots} alt="" className="Same--Icon Dots" /></span>
            </div>
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

export default Teachers;