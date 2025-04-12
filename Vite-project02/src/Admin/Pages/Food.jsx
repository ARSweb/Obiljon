import React from "react";
import "../Styles/Food.css";

const Food = () => {
  return (
    <div className="add-student">
      <div className="header">
        <h2>Add New Student</h2>
        <div className="profile">
          <div className="avatar" />
          <div className="info">
            <strong>Nabila A.</strong>
            <p>Admin</p>
          </div>
        </div>
      </div>

      <form className="student-form">
        <h3 className="section-title">Student Details</h3>

        <div className="for-padding">
        <div className="photo-section">
          <label>Photo *</label>
          <div className="photo-upload">Drag and drop or click to upload</div>
        </div>

        <div className="form-grid">
          <div className="form-group">
            <label>First Name *</label>
            <input type="text" placeholder="Samantha" />
          </div>
          <div className="form-group">
            <label>Last Name *</label>
            <input type="text" placeholder="William" />
          </div>
          <div className="form-group">
            <label>Date of Birth *</label>
            <input type="date" />
          </div>
          <div className="form-group">
            <label>Place of Birth *</label>
            <input type="text" placeholder="Jakarta" />
          </div>
          <div className="form-group">
            <label>Email *</label>
            <input type="email" placeholder="william@mail.com" />
          </div>
          <div className="form-group">
            <label>Phone *</label>
            <input type="text" placeholder="+1234567890" />
          </div>
          <div className="form-group full">
            <label>Address *</label>
            <textarea placeholder="Enter address here..." rows="4"></textarea>
          </div>
          <div className="form-group">
            <label>Parent Name *</label>
            <input type="text" placeholder="Mana William" />
          </div>
        </div>
        </div>

        <h3 className="section-title">Parent Details</h3>
        
        <div className="for-padding">
        <div className="form-grid">
          <div className="form-group">
            <label>First Name *</label>
            <input type="text" placeholder="Mana" />
          </div>
          <div className="form-group">
            <label>Last Name *</label>
            <input type="text" placeholder="William" />
          </div>
          <div className="form-group">
            <label>Email *</label>
            <input type="email" placeholder="mana@mail.com" />
          </div>
          <div className="form-group">
            <label>Phone *</label>
            <input type="text" placeholder="+1234567890" />
          </div>
          <div className="form-group full">
            <label>Address *</label>
            <textarea placeholder="Enter address here..." rows="4"></textarea>
          </div>
        </div>
        </div>

        <h3 className="section-title">Payment Method</h3>
        
        <div className="for-padding">
        <div className="payment-options">
          <label>
            <input type="radio" name="payment" /> Debit
          </label>
          <label>
            <input type="radio" name="payment" defaultChecked /> Cash
          </label>
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

export default Food;