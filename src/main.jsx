import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { VerificationContextProvider } from './context/verificationContext.jsx';
import { StudentContextProvider } from './context/studentContext.jsx';
import { LecturerContextProvider } from './context/lecturerContext.jsx'; // Import LecturerContextProvider

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <VerificationContextProvider>
      <LecturerContextProvider> 
        <StudentContextProvider>
         
            <App />
          
        </StudentContextProvider>
        </LecturerContextProvider>
      </VerificationContextProvider>
    </React.StrictMode>
  </BrowserRouter>
);
