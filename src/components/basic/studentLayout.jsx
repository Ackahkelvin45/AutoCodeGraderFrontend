import React, { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StudentContext } from "../../context/studentContext";

function StudentOutlet({ children }) {
  const redirect = useNavigate();
  const [loading, setLoading] = useState(true);
  const { loadDetails, authenticated, setAuthenticated, student, setStudent } = useContext(StudentContext);

  useEffect(() => {
    loadDetails(setStudent, student, setLoading, setAuthenticated, redirect);
  }, [authenticated]);

  
  return <>{children}</>;
}

export default StudentOutlet;
