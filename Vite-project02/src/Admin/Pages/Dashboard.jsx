import React from "react";
import "../Styles/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="add-teacher">
      <div className="header">
        <h2>Add New Teacher</h2>
        <div className="profile-area">
          <div className="profile-pic" />
          <div className="info">
            <strong>Nabila A.</strong>
            <p>Admin</p>
          </div>
        </div>
      </div>

      <form className="teacher-form">
        <h3 className="section-title">Personal Details</h3>

       <div className="for-padding">
         <div className="form-grid">
          <div className="form-group">
            <label>First Name *</label>
            <input type="text" placeholder="Maria" />
          </div>
          <div className="form-group">
            <label>Last Name *</label>
            <input type="text" placeholder="Historia" />
          </div>
          <div className="form-group">
            <label>Email *</label>
            <input type="email" placeholder="Historia@mail.com" />
          </div>
          <div className="form-group">
            <label>Phone *</label>
            <input type="text" placeholder="+1234567890" />
          </div>
          <div className="form-group">
            <label>Date of Birth *</label>
            <input type="date" />
          </div>
          <div className="form-group">
            <label>Place of Birth *</label>
            <input type="text" placeholder="Jakarta, Indonesia" />
          </div>
        </div>

        <div className="form-group full">
          <label>Address *</label>
          <textarea placeholder="Address here..." rows="4"></textarea>
        </div>

        <div className="form-group full">
          <label>Photo *</label>
          <div className="photo-upload">Drag and drop or click to upload</div>
        </div>
       </div>

        <h3 className="section-title">Education</h3>

        <div className="for-padding">
        <div className="form-grid">
          <div className="form-group">
            <label>University *</label>
            <input type="text" placeholder="University Akademi Historia" />
          </div>
          <div className="form-group">
            <label>Degree *</label>
            <input type="text" placeholder="History Major" />
          </div>
          <div className="form-group">
            <label>Start Date *</label>
            <input type="text" placeholder="September 2013" />
          </div>
          <div className="form-group">
            <label>End Date *</label>
            <input type="text" placeholder="September 2017" />
          </div>
          <div className="form-group">
            <label>City *</label>
            <input type="text" placeholder="Yogyakarta, Indonesia" />
          </div>
        </div>
        </div>

        <div className="form-actions">
          <button type="button" className="draft">Save as Draft</button>
          <button type="submit" className="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Dashboard;