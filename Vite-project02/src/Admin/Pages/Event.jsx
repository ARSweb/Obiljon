import React from "react";
import "../Styles/Event.css";

// import icon

import icon from "../FromFigma/Icons/icon.png"
import Mail from "../FromFigma/Icons/Mail.png"
import Phone from "../FromFigma/Icons/Phone.png"
import search from "../FromFigma/Icons/search.svg"
import gear from "../FromFigma/Icons/gear.svg"
import bell from "../FromFigma/Icons/bell.svg"
import clock from "../FromFigma/Icons/clock.svg"
import calendar from "../FromFigma/Icons/calendar.svg"

const TeacherDetails = () => {
  return (
    <div className="teacher-details">
      <div className="top-section">
        <h2>Teacher Details</h2>
        <div className="admin-info">
          <div className="search-box">
            <input type="text" placeholder="Search here..." />
            <span className="search-icon">
              <img src={search} alt="" className="Same--Icon" />
            </span>
          </div>
          <div className="notification">
            <img className="Same--Icon02" src={bell} alt="" />
          </div>
          <div className="settings">
            <img className="Same--Icon02" src={gear} alt="" />
          </div>
          <div className="profile">
            <div className="avatar" />
            <div className="info">
              <strong>Nabila A.</strong>
              <p>Admin</p>
            </div>
          </div>
        </div>
      </div>

      <div className="details-section">
        <div className="left-content">
          <div className="photo" />
          <h3>Maria Historia</h3>
          <p className="subject">History Teacher</p>

          <div className="container--for--box">
          <div className="contact-box">
            <img className="Same--Icon02" src={icon} alt="" />
            <span>Jakarta, Indonesia</span>
          </div>
          <div className="contact-box">
            <img className="Same--Icon02" src={Phone} alt="" />
            <span>+12 345 6789 0</span>
          </div>
          <div className="contact-box">
            <img className="Same--Icon02" src={Mail} alt="" />
            <span>Historia@mail.com</span>
          </div>
          </div>

          <div className="section">
            <h4>About:</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci consequatur, velit ipsam sint animi modi perspiciatis non culpa deserunt sed.</p>
          </div>

          <div className="section">
            <h4>Education:</h4>
            <ul>
              <li> 
                <p>History Major, University Akademi Historia</p>
                 <span className="date">2013–2017</span>
              </li>
              <li>
                <p>Master of History, University Akademi Historia</p>
                <span className="date">2017–2020</span>
              </li>
            </ul>
          </div>

          <div className="section">
            <h4>Expertise:</h4>
            <p>World History, Philosophy, Prehistoric, Culture, Ancient</p>
          </div>
        </div>

        <div className="right-content">
          <div className="box">
            <h4>Schedule Details</h4>
            <p className="date">Thursday, 10th April , 2021</p>
          </div>

          {[1, 2, 3, 4].map((_, i) => (
            <div className="schedule-card" key={i}>
              <div className={`color-bar color-${i}`} />
              <div className="info">
                <h5>World History</h5>
                <p className="class">Class VII-B</p>
                <div className="meta">
                  <img className="Same--Icon02" src={calendar} alt="" />
                  <span>March 20, 2021</span></div>
                <div className="meta">
                  <img className="Same--Icon02" src={clock} alt="" />
                  <span>09.00 - 10.00 AM</span></div>
              </div>
            </div>
          ))}

          <div className="view-more">View More</div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDetails;