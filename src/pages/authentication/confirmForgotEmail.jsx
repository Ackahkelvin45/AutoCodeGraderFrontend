import {useState,useRef} from 'react'
import { useNavigate,useLocation } from 'react-router-dom'
import { getFromBackend } from '../../utils/backendCalls'
import logo from "../../assets/img/signin-modal/confirm.svg"

const  ConfirmForgotEmail=() =>{

    const [message, setMessage] = useState()
const [show, togleShow] = useState(false)
const [startSpiner, setSpiner] = useState(false)
     const redirect = useNavigate()
     const [submitted, setSubmitted] = useState(false)
     const [email, setEmail] = useState("")
      const [verficationCode, setVerificationCode] = useState("")

const formRef=useRef()
let loc = useLocation()

const loginUrl=loc.state.loginUrl
const  verificationId=loc.state.verificationId
const email1=loc.state.email
const type=loc.state.type



const handleGoBack = () => {
    redirect(-1); // This will navigate to the previous page
  };

const handleSubmit =async (e) => {
                             e.preventDefault()
                             const isValid = formRef.current.checkValidity();
    
                             if (isValid){
                             //start spinner
                             setSpiner(true)
                             //disable button
                         setSubmitted(true)
                             //check if the verification code has been given
                            let url = `/api/auth/email/reset-password/verify/${verificationId}/${verficationCode}`
                             let response = await getFromBackend(url)
                             if(response.status !== 200) {
                                 //do stuff here
                                setMessage(response.data.reason)
                             } else {
                                 //a page for the user to enter details
                                 redirect("/user/new-password", {state: {verificationId, loginUrl}})
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
        <a  onClick={handleGoBack} className="position-absolute top-0 end-0 nav-link fs-sm py-1 px-2 mt-3 me-3" href="#">
            <i className="fi-arrow-long-left fs-base me-2"></i>Go back</a>

            
        <div className="row mx-0 align-items-center">
            <div className="col-md-6 border-end-md p-2 p-sm-5">
                <h2 className="h3 mb-4 mb-sm-5">Check your Email <br/>
                   
                </h2>
      <p >We have sent a verification Code  <br/> <strong>{email1}</strong>  <br/>Kindly enter the code </p>

                
                <img className="d-block mx-auto" src={logo} width="344" alt="Illustartion"/>
               
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
                        <label className="form-label mb-2" >Verification Code</label>
                        <input className="form-control"
                     value={verficationCode} onChange={(val) => setVerificationCode(val.target.value)}  type="number"  
                 
                        placeholder="Enter your verification code"  required />

                                                </div>
                  

                                                {
                            startSpiner?
                            <button type="button" className="btn btn-primary btn-lg w-100">
  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
  Verifying...
</button>                            :
                            <button className="btn btn-primary btn-lg w-100" type="submit">Verify </button>

                        } 
                </form>
  
 

                
            </div>
        </div>
    </div>
</div>
  )
}

export {ConfirmForgotEmail}