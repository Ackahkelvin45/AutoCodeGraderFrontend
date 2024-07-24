import {useState,useRef} from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/img/forgotpassword/Forgot_password.svg"
import { useNavigate,useLocation } from 'react-router-dom'
import { getFromBackend } from '../../utils/backendCalls'
const  ForgotPassword=()=> {

    const [message, setMessage] = useState()
const [show, togleShow] = useState(false)
const [startSpiner, setSpiner] = useState(false)
     const redirect = useNavigate()
     const [submitted, setSubmitted] = useState(false)
     const [email, setEmail] = useState("")
const formRef=useRef()
let loc = useLocation()


const loginUrl=loc.state.url
const type=loc.state.type

const handleGoBack = () => {
    redirect(-1); // This will navigate to the previous page
  };

const handleSubmit = async (e) => {

    
    e.preventDefault() 
    const isValid = formRef.current.checkValidity();
    
if (isValid){

                             e.preventDefault()
                             //start spinner
                          setSpiner(true)
                            //disable button
                            setSubmitted(true)
                             //check if the verification code has been given
                            let url = `/api/auth/email/reset-password/${email}/${type}`
                             let response = await getFromBackend(url)
                             if(response.status !== 200) {
                                 //dos stuff here
                                 setMessage(response.data.reason)
                             } else {

                                 redirect("/user/request/password-reset/confirm-token", {state: {loginUrl, email, verificationId:response.data.id}})
                             }
                             //enable button
                         setSubmitted(false)
                             setSpiner(false)
                            }
                            else{
                                formRef.current.classList.add("was-validated")

                            }
                         }

  return (
    <div className="container-fluid d-flex h-100 align-items-center justify-content-center py-4 py-sm-5">
    <div className="card card-body" style={{maxWidth: "940px"}}>
        <a  onClick={handleGoBack} className="position-absolute top-0 end-0 nav-link fs-sm py-1 px-2 mt-3 me-3" href="#" >
            <i className="fi-arrow-long-left fs-base me-2"></i>Go back</a>

            
        <div className="row mx-0 align-items-center">
            <div className="col-md-6 border-end-md p-2 p-sm-5">
                <h2 className="h3 mb-4 mb-sm-5">You forgot your <br/>
                password? No worries!
                </h2>

                
                <img className="d-block mx-auto" src={logo} width="344" alt="Illustartion"/>
                <div className="mt-4 mt-sm-5">
                    Remember your password?
                    <Link to='/auth/login/student'>
                        login here
                    </Link>
                </div>
            </div>
            <div className="col-md-6 px-2 pt-2 pb-4 px-sm-5 pb-sm-5 pt-md-5">

                
                  
                  
            {
                message  ?  
                        <div className= {`alert alert-danger alert-dismissible fade show   p-3 ${message==='Success'? 'alert-success':'alert-danger'}`} role="alert">

  
                    {message}

                    <button type="button" className="btn-close" data-bs-dismiss="alert" onClick={()=>{setMessage(null)}} ></button>

                    </div>
                    :""
            }

  <form ref={formRef}  onSubmit={handleSubmit} noValidate  className="needs-validation "  >


                    <div className="mb-4">
                        <label className="form-label mb-2" >Email address </label>
                        <input className="form-control"
                        value={email} onChange={(val) => setEmail(val.target.value)} type="email"  
                 
                        name="studentId" placeholder="Enter your Email"  required />

                                                </div>
                  

                                                {
                            startSpiner?
                            <button type="button" className="btn btn-primary btn-lg w-100">
  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
  Loading...
</button>                            :
                            <button className="btn btn-primary btn-lg w-100" type="submit">Reset </button>

                        } 
                </form>
  
 

                
            </div>
        </div>
    </div>
</div>
  )
}

export {ForgotPassword}