import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import "./Slidebar.css";

// Sahifalar
import Dashboard from "../Pages/Dashboard.jsx";
import Students from "../Pages/Students.jsx";
import Teachers from "../Pages/Teachers.jsx";
import Event from "../Pages/Event.jsx";
import Finance from "../Pages/Finance.jsx";
import Food from "../Pages/Food.jsx";

// Iconlar
import home from "../FromFigma/Icons/home.svg"
import student from "../FromFigma/Icons/student.svg"
import teacher from "../FromFigma/Icons/teacher.svg"
import calendar from "../FromFigma/Icons/calendar.svg"
import finance from "../FromFigma/Icons/finance.svg"
import food from "../FromFigma/Icons/food.svg"

const menuItems = [
  { label: "Dashboard", path: "/dashboard", icon: home },
  { label: "Students", path: "/students", icon: student },
  { label: "Teachers", path: "/teachers", icon: teacher },
  { label: "Event", path: "/event", icon: calendar },
  { label: "Finance", path: "/finance", icon: finance },
  { label: "Food", path: "/food", icon: food },
];

const Sidebar = () => {
  return (
    <div className="layout">
      <div className="sidebar">
        <div className="logo">
          <div className="logo-circle">A</div>
          <h1>Akademi</h1>
        </div>

        <div className="menu">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                isActive ? "menu-item active" : "menu-item"
              }
            >
              <div className="icon-placeholder">
               {/* <img
                 src={item.icon}
                 alt={item.label}
                 className="icon"
               /> */}
              </div>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </div>

        
      </div>

      <div className="content">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/students" element={<Students />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/event" element={<Event />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/food" element={<Food />} />
        </Routes>
      </div>
    </div>
  );
};

export default Sidebar;
