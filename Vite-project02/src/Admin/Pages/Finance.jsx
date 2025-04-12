import React from "react";
import "../Styles/Finance.css";

// import icons
import icon1 from "../FromFigma/Icons/icon\ \(1\).png"
import icon from "../FromFigma/Icons/icon.png"
import Mail from "../FromFigma/Icons/Mail.png"
import Parent from "../FromFigma/Icons/Parent.png"
import Phone from "../FromFigma/Icons/Phone.png"
import search from "../FromFigma/Icons/search.svg"
import gear from "../FromFigma/Icons/gear.svg"
import bell from "../FromFigma/Icons/bell.svg"
import clock from "../FromFigma/Icons/clock.svg"
import calendar from "../FromFigma/Icons/calendar.svg"

const transactions = [
  {
    id: "#123456789",
    date: "2 March 2021, 13:45 PM",
    status: "Complete",
    amount: "$50,036",
    color: "#4CBC9A",
  },
  {
    id: "#987654321",
    date: "2 March 2021, 13:45 PM",
    status: "Pending",
    amount: "$50,036",
    color: "#A098AE",
  },
  {
    id: "#112233445",
    date: "2 March 2021, 13:45 PM",
    status: "Canceled",
    amount: "$50,036",
    color: "#FF4550",
  },
  {
    id: "#998877665",
    date: "2 March 2021, 13:45 PM",
    status: "Complete",
    amount: "$50,036",
    color: "#4CBC9A",
  },
];

const Finance = () => {
  return (
    <div className="finance-page">
      <div className="topbar">
        <h2>Student Details</h2>
        <div className="admin-info">
          <div className="search-box">
            <input type="text" placeholder="Search here..." />
            <span className="search-icon">
              <img className="Same--Icon03 Same--Icon" src={search} alt=""  />
            </span>
          </div>
          <div className="notification">
            <img className="Same--Icon03" src={bell} alt="" />
          </div>
          <div className="settings">
            <img className="Same--Icon03" src={gear} alt="" />
          </div>
          <div className="profile">
            <div className="avatar" />
            <div>
              <strong>Nabila A.</strong>
              <p>Admin</p>
            </div>
          </div>
        </div>
      </div>

      <div className="finance-content">
        <div className="left-panel">
          <div className="details-box">
            <div className="photo" />
            <h3>Karen Hope</h3>
            <p className="role">Student</p>

            <div className="container--students">
              <div className="info-row">
                <p className="label">Parents:</p>
                <div className="value"><img className="Same--Icon03" src={Parent} alt="" /> Justin Hope</div>
              </div>
              <div className="info-row">
                <p className="label">Address:</p>
                <div className="value"><img className="Same--Icon03" src={icon} alt="" /> Jakarta, Indonesia</div>
              </div>
              <div className="info-row">
                <p className="label">Phone:</p>
                <div className="value"><img className="Same--Icon03" src={Phone} alt="" /> +12 345 6789 0</div>
              </div>
              <div className="info-row">
                <p className="label">Email:</p>
                <div className="value"><img className="Same--Icon03" src={Mail} alt="" /> Hope@mail.com</div>
              </div>
            </div>
          </div>

          <div className="history-section">
            <h3>Payment History</h3>
            <div className="history-list">
              {transactions.map((t, i) => (
                <div className="history-card" key={i}>
                  <div className="icon-circle"><img className="Same--Icon03" src={icon1} alt="" /></div>
                  <p className="trans-id">{t.id}</p>
                  <p className="trans-date">{t.date}</p>
                  <p className="trans-status" style={{ color: t.color }}>{t.status}</p>
                  <p className="trans-amount">{t.amount}</p>
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
        </div>

        <div className="right-panel">
          <div className="box">
            <h4>Schedule Details</h4>
            <p className="date">Thursday, 10th April , 2021</p>
          </div>

          {[1, 2, 3, 4].map((_, i) => (
            <div className="schedule-card" key={i}>
              <div className={`color-bar color-${i}`} />
              <div className="info">
                <h5>Mathematics</h5>
                <p className="class">Class VII-B</p>
                <div className="meta"><img className="Same--Icon03" src={calendar} alt="" /><span>March 20, 2021</span></div>
                <div className="meta"><img className="Same--Icon03" src={clock} alt="" /><span>09.00 - 10.00 AM</span></div>
              </div>
            </div>
          ))}

          <div className="view-more">View More</div>
        </div>
      </div>
    </div>
  );
};

export default Finance;