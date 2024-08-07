import React ,{useRef, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import signinlogo from "../../assets/img/forgotpassword/reset_password.svg"
import finish from "../../assets/img/forgotpassword/finishLine.svg"

import { getFromBackend } from "../../utils/backendCalls"
import { useLocation } from "react-router-dom"
import { postToBackend } from '../../utils/backendCalls';
import { Link } from 'react-router-dom';

const NewPassword=()=> {

  const navigate = useNavigate();
     const redirect = useNavigate()
     const [startSpiner, setSpiner] = useState(false)
     const [submitted, setSubmitted] = useState(false)
     const [pwd, setPwd] = useState("")
    const [cpwd, setCpwd] = useState("")
    const [error,setError] = useState()
    const [viewPassword,setViewPassword]=useState(false)
    const [confirmviewPassword,setConfirmViewPassword]=useState(false)
    const [done,setDone] = useState(false)
    const formRef=useRef()
  const goBack = () => {
    navigate(-1);
  
 
  }


  


  const location = useLocation()
    const loginUrl=location.state.loginUrl
    const verificationId = location.state.verificationId 
    console.log(verificationId)
  

const handleSubmit = async (e) => {

    e.preventDefault() 
    const isValid = formRef.current.checkValidity();
    
if (isValid){
    if(pwd!==cpwd){
        setError("Passwords do not match")
    }
    else{
                             e.preventDefault()
                             //start spinner
                             setSpiner(true)
                             //disable button
                             setSubmitted(true)
                             //check if the verification code has been given
                            let url = "/api/auth/user/reset-password"
                             let response = await postToBackend(url, {pwd, verificationId})
                            
                            if(response.status !== 200) {
                                //dos stuff here
                    
                                setError(response.data.reason)
                             } 
                             //enable button
                             setSubmitted(false)
                             setSpiner(false)
                             setDone(true)

                            }
                        }
                            else{
 

                                formRef.current.classList.add("was-validated")
                            }
                     }


  return (
    <div className=" fade show fade py-5" style={{diaplay:"block",backgroundColor:"#f0f0f0"}} id="signup-modal"  aria-hidden="true">
    {done? 
    
        <div className="modal-dialog modal-lg modal-dialog-centered p-2 my-0 mx-auto" style={{maxWidth: "950px"}}>
      <div className="modal-content">
        <div className="modal-body px-0 py-2 py-sm-0">
        <a   onClick={goBack} style={{cursor:"pointer"}} className=" position-absolute top-0 end-0 nav-link fs-sm py-1 px-2 mt-3 me-3" href="#" >
				<i className="fi-arrow-long-left fs-base me-2"></i>
				Go back
			</a>          <div className="row mx-0 align-items-center">
            <div className="col-md-6 border-end-md p-4 p-sm-5">
              <h2 className="h3 mb-4 mb-sm-5">
            Congratulations!<br/>
            Password Successfully Changed

              </h2>
              <p>You can now log in with your new password</p>
              <img className="d-block mx-auto" src={finish} width="344" alt="Illustartion"/>
            </div>
            <div className="col-md-6 px-4 pt-2 pb-4 px-sm-5 pb-sm-5 pt-md-5">

            <Link to={loginUrl} className="btn btn-primary btn-lg rounded-m w-100 mb-4" type="submit">Back to Login</Link>

             
            </div>
          </div>
        </div>
      </div>
    </div>

    
    :
    <div className="modal-dialog modal-lg modal-dialog-centered p-2 my-0 mx-auto" style={{maxWidth: "950px"}}>
      <div className="modal-content">
        <div className="modal-body px-0 py-2 py-sm-0">
        <buton  onClick={goBack} style={{cursor:"pointer"}} className=" position-absolute top-0 end-0 nav-link fs-sm py-1 px-2 mt-3 me-3" href="#" >
				<i className="fi-arrow-long-left fs-base me-2"></i>
				Go back
			</buton>          <div className="row mx-0 align-items-center">
            <div className="col-md-6 border-end-md p-4 p-sm-5">
              <h2 className="h3 mb-4 mb-sm-5">
            ChnagePassword<br/>

              </h2>
              <p>Please fill in the detials to change your password</p>
              <img className="d-block mx-auto" src={signinlogo} width="344" alt="Illustartion"/>
            </div>
            <div className="col-md-6 px-4 pt-2 pb-4 px-sm-5 pb-sm-5 pt-md-5">


      <form  onSubmit={handleSubmit}  ref={formRef} className="needs-validation" noValidate>
  
  {
    error?
  <div className="alert alert-danger alert-dismissible fade show p-3" role="alert">
  {error}

  <button type="button" className="btn-close" data-bs-dismiss="alert" onClick={()=>{setError(null)}} ></button>

</div>:''

  }

 



  <div className="mb-4">
                        <label className="form-label" >
                            Password <br/>
                            <span className="fs-sm text-muted"> min. 4 char,at least 1 uppercase,number,special char </span>
                        </label>
                        <div  className="password-toggle">
                            <input   minLength={4} pattern="^(?=.*[\W_]).{4,}$" value={pwd} onChange={(val) => setPwd(val.target.value)}   className="form-control"  type={viewPassword?"text":"password"} name="password"  required/>
                            <label  onClick={()=>{setViewPassword(!viewPassword)}}  className="password-toggle-btn" aria-label="Show/hide password">
                            {
                        viewPassword?<i onClick={()=>{setViewPassword(false)}}  className='fi-eye-on text-muted '></i>:<i onClick={()=>{setViewPassword(true)}} className='fi-eye-off text-muted'></i>
                        }
                        
                            </label>
                        </div>

                                                </div>


                                                <div className="mb-4">
                        <label className="form-label"  >Confirm password</label>
                        <div className="password-toggle">
                            <input className="form-control"
                            pattern="^(?=.*[\W_]).{4,}$"
                            value={cpwd} onChange={(val) => {
                                if(pwd !== val.target.value) {
                                     val.target.style.color = "red"
                                   } else {
                                     val.target.style.color = "black";
                                   }
                                   setCpwd(val.target.value)
                                }} 
       

          type={confirmviewPassword?"text":"password"}
                            name="cpassword"  required/>
                            <label className="password-toggle-btn" aria-label="Show/hide password">
                        {
                            confirmviewPassword?<i onClick={()=>{setConfirmViewPassword(false)}}  className='fi-eye-on text-muted '></i>:<i onClick={()=>{setConfirmViewPassword(true)}} className='fi-eye-off text-muted'></i>
                        }
                        
                                                        </label>


                        </div>

                        <span className="text-danger" ></span>


                                                </div>


{
startSpiner?
<button className="btn btn-primary btn-lg rounded-m w-100 mb-4" type="submit">

<span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
  loading...
</button>
:
<button className="btn btn-primary btn-lg rounded-m w-100 mb-4" type="submit">Submit</button>

}



          

              </form>
             
            </div>
          </div>
        </div>
      </div>
    </div>
    }
   















  </div>
  )
}

export {NewPassword}