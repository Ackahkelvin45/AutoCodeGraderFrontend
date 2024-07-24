import {useState,useEffect, useRef} from 'react'
import logo from "../../../assets/img/svg/Sign up-rafiki.svg"
import { Link, useNavigate } from 'react-router-dom'
import { backend } from '../../../utils/config.js'
import { postToBackend } from "../../../utils/backendCalls.js"




const getPrograms = async (api, setDe, setError,showError) => {
    try {
    let result = await fetch(api)
    if(result.status === 200){
        let pro = await result.json()
        await setDe(pro)
    }
    } catch(err) {
      setError("couldnt load programs")
      showError(true)
    }
  }
function RegisterLecturer() {
    const [registration, setRegistration] = useState({"name":"", "email":"", "password":"", 
       "cpassword":"", "lecturerId": "",  "username": ""})
    const [message, setMessage] = useState()
    const [show, togleShow] = useState(false)
    const [programs, setPrograms] = useState([])
    const [startSpiner, setSpiner] = useState(false)
    const [clases, setClases] = useState([])
    const [submitted, setSubmitted] = useState(false)
    const redirect = useNavigate()
    const formRef=useRef()
    const confirmpassordref=useRef()
    const [viewPassword,setViewPassword]=useState(false)
    const [confirmviewPassword,setConfirmViewPassword]=useState(false)


 
    const text = "Register Student"
 
    const [PasswordError,setPasswordError]=useState(false)
 
 
    const setValue = (name, value) => {
       registration[name] = value
       setRegistration({...registration})
    }






const handleSubmitStudent=async(e)=>{
    e.preventDefault() 
    const isValid = formRef.current.checkValidity();
    
if (isValid){



    //disable button
    setSubmitted(true)
    //start spiner
    setSpiner(true)
    //check if passwords match
    if (registration.password !== registration.cpassword) {
      //allert with bad message
      setPasswordError(true)
      confirmpassordref.current.innerText="Password don't match"

    } else {
      //post user data
      try {

         let response = await postToBackend("/api/auth/register/lecturer", registration)
         console.log(response.status)
         if (response.status !== 201) {
           setMessage(response.data.reason)
           console.log(response.data.reason)
         } else {
          setMessage("Success")
           togleShow(true)
           setSubmitted(false)
           setSpiner(false)
           console.log(response.data)
        //redirect
          redirect("/auth/verify/email", {state: {email:registration.email, verificationId: response.data.verificationId, url:"/auth/login/lecturer"}})
         }

      console.log(registration)

      }catch(e){
        console.log(e)
      }
     
    }
    togleShow(true)
    setSubmitted(false)
    setSpiner(false)

}else{
 

    formRef.current.classList.add("was-validated")
}
  
      
     
}


const handleChangeStudent=(event)=>{
    const { name, value } = event.target;
    setRegistration((prevFormData) => ({ ...prevFormData, [name]: value }));
}

const handleGoBack = () => {
    redirect(-1); // This will navigate to the previous page
  };


  return (
    <div className="container-fluid d-flex h-100 align-items-center justify-content-center py-4 py-sm-5">
    <div className="card card-body" style={{maxWidth: "940px"}}>
        <a  onClick={ handleGoBack } className="position-absolute top-0 end-0 nav-link fs-sm py-1 px-2 mt-3 me-3" href="#" >
             <i className="fi-arrow-long-left fs-base me-2"></i>
            Go back
        </a>
        <div className="row mx-0 align-items-center">
            <div className="col-md-6 border-end-md p-2 p-sm-5">
                <h2 className="h3 mb-4 mb-sm-5">
                    Lecturer Register
                   
                </h2>
               
            <img className="d-block mx-auto" src={logo} width="344" alt="Illustartion"/>
                <div className="mt-sm-4 pt-md-3">
                    Already have an account?
                    <Link to="/auth/login/lecturer">
                        Sign in
                    </Link>
                </div>
            </div>
            <div className="col-md-6 px-2 pt-2 pb-4 px-sm-5 pb-sm-5 pt-md-5">
            {
                message  ?  
                        <div className= {`alert  p-2 ${message==='Success'? 'alert-success':'alert-danger'}`} role="alert">
  
                    {message}
                    </div>
                    :""
            }
  


              <div className="tab-content">

  <form ref={formRef} className="needs-validation"  noValidate onSubmit={handleSubmitStudent}  >

  <div className="mb-4">
                        <label className="form-label" >Full Name </label>
                        <input 
                        
                        name='name'
                        onChange={handleChangeStudent}
                         className="form-control" type="text" placeholder="Enter your Full name"  required/>

                                                </div>
       
   
                    <div className="mb-4">
                        <label className="form-label" >Email address</label>
                        <input className="form-control" type="email" onChange={handleChangeStudent} name="email" placeholder="Enter your email" required/>

                                                </div>

                                                <div className="mb-4">
                        <label className="form-label" >Lecturer ID</label>
                        <input className="form-control" type="text" name="lecturerId" onChange={handleChangeStudent}  placeholder="Enter your id number" required/>

                                                </div>

                 


                                                <div className="mb-4">
                        <label className="form-label" >Username</label>
                        <input className="form-control" type="text" name="username" onChange={handleChangeStudent} placeholder="Enter your username"  required/>

                                                </div>
                  

                    <div className="mb-4">
                        <label className="form-label" >
                            Password <span className="fs-sm text-muted"> min. 4 char </span>
                        </label>
                        <div  className="password-toggle">
                            <input minLength={4} pattern="^(?=.*[\W_]).{4,}$"  className="form-control"  type={viewPassword?"text":"password"}  onChange={handleChangeStudent}  name="password"  required/>
                            <label  onClick={()=>{setViewPassword(!viewPassword)}}  className="password-toggle-btn" aria-label="Show/hide password">
                            {
                        viewPassword?<i onClick={()=>{setViewPassword(false)}}  className='fi-eye-on text-muted '></i>:<i onClick={()=>{setViewPassword(true)}} className='fi-eye-off text-muted'></i>
                        }
                        
                            </label>
                        </div>

                                                </div>
                    <div className="mb-4">
                        <label className="form-label" >Confirm password</label>
                        <div className="password-toggle">
                            <input className="form-control"
                            pattern="^(?=.*[\W_]).{4,}$"

                            onChange={ val => {
          if(registration.password !== val.target.value) {
            val.target.style.color = "red"
          } else {
            val.target.style.color = "black"
            setValue("cpassword", val.target.value);
          }
          }}
          onFocus={()=>{confirmpassordref.current.innerText=""}}

          type={confirmviewPassword?"text":"password"}
                            name="cpassword"  required/>
                            <label className="password-toggle-btn" aria-label="Show/hide password">
                        {
                            confirmviewPassword?<i onClick={()=>{setConfirmViewPassword(false)}}  className='fi-eye-on text-muted '></i>:<i onClick={()=>{setConfirmViewPassword(true)}} className='fi-eye-off text-muted'></i>
                        }
                        
                                                        </label>


                        </div>

                        <span className="text-danger" ref={confirmpassordref}></span>


                                                </div>
                    <div className="form-check mb-4">
                        <input className="form-check-input" type="checkbox" id="agree-to-terms" required/>
                        <label className="form-check-label" >
                            By joining, I agree to the
                            <a >  Terms of use</a> and
                            <a > Privacy policy </a>
                        </label>
                    </div>

                        {
                            startSpiner?
                            <button type="button" className="btn btn-primary btn-lg w-100">
  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
  Loading..
</button>                            :
                            <button className="btn btn-primary btn-lg w-100" type="submit">Sign up </button>

                        }
                  
                </form>

  





 
  </div>
             
                
               
            </div>
        </div>
    </div>
</div>
  )
}

export {RegisterLecturer}