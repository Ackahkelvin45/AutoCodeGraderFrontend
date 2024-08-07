import React, { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LecturerContext } from "../../context/lecturerContext";

function LecturerOutlet({ children }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const { loadDetails, authenticated, setAuthenticated, lecturer, setLecturer } = useContext(LecturerContext);

  useEffect(() => {
    loadDetails(setLecturer,lecturer, setLoading, setAuthenticated, navigate);
  }, [authenticated]);


  return <>{children}</>;
}

export default LecturerOutlet;
