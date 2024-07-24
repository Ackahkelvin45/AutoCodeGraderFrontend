// src/components/basic/layout.jsx
import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../landingpage/navbar'; // Adjust path if needed
import Footer from '../landingpage/footer'; // Adjust path if needed



const Page = ({ children }) => {
    return (
        <div className='page-wrapper'>
        <Navbar />
        {children}
        
        <Footer />
      </div>
    );
  };
  
  export default Page;