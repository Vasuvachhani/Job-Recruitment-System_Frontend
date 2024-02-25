/* eslint-disable react/jsx-pascal-case */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Company_List from './Company_List';
import Verified_Company from './Verified_company_list';
import "./Styles/admin.css"

const Sidebar = () => {
  const [selectedField, setSelectedField] = useState('Dashboard');
  const navigate = useNavigate(); // Initialize the navigate function

  const handleItemClick = (field) => {
    setSelectedField(field);
  };

  function logout() {
    console.log("hha");
    handleItemClick('Sign Out');
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("type");
    navigate('/'); // Use navigate to navigate to the desired route
  }

  return (
    <>
    <div className="sidebar">
      <div className="sidebar-header">
        <i className="fa-solid fa-apartment"></i>
        <span>Job Recruitment System</span>
      </div>
      <ul className="sidebar-menu">
        <li
          className={selectedField === 'Dashboard' ? 'active' : ''}
          onClick={() => handleItemClick('Dashboard')}
        >
          <i className="fa fa-home"></i>
          <span>Dashboard</span>
        </li>
        <li
          className={selectedField === 'Verified Company' ? 'active' : ''}
          onClick={() => handleItemClick('Verified Company')}
        >
          <i className="fa fa-check-circle"></i>
          <span>Verified Company</span>
        </li>
        <li
          className={selectedField === 'Sign Out' ? 'active' : ''}
          onClick={logout}
        >
          <i class="fa fa-sign-out" aria-hidden="true"></i>
          <span>Sign Out</span>
        </li>
      </ul>
    </div>
    {selectedField==="Dashboard"?<Company_List/>:<Verified_Company/>}
    
    </>
  );
};

export default Sidebar;
