import  { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../../assets/css/pageloading.css' 
const  PageSpinner=()=> {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation(); // Hook from React Router to detect route changes

  useEffect(() => {

    const activateLoading = () => {
      setIsActive(true); // Activate loading

    
      setTimeout(() => {
        setIsActive(false);
      }, 1500);
    };


    activateLoading();


    return () => {}; 
  }, [location]); 

  
  if (!isActive) return null;

  return (
    <div className={`page-loading ${isActive ? 'active' : ''}`}>
    <div className={`  spinner `}></div>
  </div>
    
    
    
  );
}

export  {PageSpinner};
