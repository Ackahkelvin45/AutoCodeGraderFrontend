import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import signinlogo from "../../assets/img/signin-modal/confirm.svg"

import { getFromBackend } from "../../utils/backendCalls"
import { useLocation } from "react-router-dom"
import { Link } from 'react-router-dom';
import finish from "../../assets/img/forgotpassword/finishLine.svg"
const  VerifyEmail=()=> {

  const navigate = useNavigate();
     const redirect = useNavigate()
     const [disB, setdisable ] = useState(false)
     const [startSpiner, setSpiner] = useState(false)
     const [startSpiner1, setSpiner1] = useState(false)

     const [submitted, setSubmitted] = useState(false)
    const [verficationCode, setVerificationCode] = useState("")
    const [error, setError] = useState()
    const [request,setRequest] = useState(false)
    const [done, setDone] = useState(false)
  const goBack = () => {
    navigate(-1);
  
 
  }
  const handleGoBack = () => {
    redirect(-1); // This will navigate to the previous page
  };

  const location = useLocation()
  const email=location.state.email 
  const urlMe=location.state.url
  const  verificationId=location.state.verificationId
  

const handleSubmit = async (e) => {
                             e.preventDefault()
                             //start spinner
                             setSpiner(true)
                             //disable button
                             setSubmitted(true)
                             //check if the verification code has been given
                            let url = `/api/auth/verify/email/${verificationId}/${verficationCode}`
                             let response = await getFromBackend(url)
                             if(response.status !== 200) {
                                 //dos stuff here
                                setError(response.data.reason)
                            } else {  
                              setDone(true)
                                                         }
                             //enable button
                             setSubmitted(false)
                             setSpiner(false)
                        }


const handleResendOtp =  async (e) => {
e.preventDefault()
setSpiner1(true)
let response = await getFromBackend("/api/auth/resend/email/" + verificationId)
 if (response.status !== 200) {
 alert(response.data.reason)
setdisable(false)
}
else {
 setRequest(true)
 
 
 
}
setSpiner1(false)

}

  return (
   
    <div className=" fade show fade py-5" style={{diaplay:"block",backgroundColor:"#f0f0f0"}} id="signup-modal"  aria-hidden="true">

    {
      done?

      <div className="modal-dialog modal-lg modal-dialog-centered p-2 my-0 mx-auto" style={{maxWidth: "950px"}}>
      <div className="modal-content">
        <div className="modal-body px-0 py-2 py-sm-0">
        <a  onClick={goBack} style={{cursor:"pointer"}} className=" position-absolute top-0 end-0 nav-link fs-sm py-1 px-2 mt-3 me-3" href="#" >
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

            <Link to={ urlMe} className="btn btn-primary btn-lg rounded-m w-100 mb-4" type="submit">Back to Login</Link>

             
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
              Hey there!<br/>
Verify Your Email Address
              </h2>
              <img className="d-block mx-auto" src={signinlogo} width="344" alt="Illustartion"/>
              <div className="mt-sm-4 pt-md-3 d-flex justify-content-center align-items-center">Don't want to verify now? <a   className='nav-link' style={{cursor:"pointer"}} data-bs-toggle="modal" data-bs-dismiss="modal">Logout Here</a></div>
            </div>
            <div className="col-md-6 px-4 pt-2 pb-4 px-sm-5 pb-sm-5 pt-md-5">
            <p>Before proceeding, please check your email for an OTP Code.</p>


      <form  onSubmit={handleSubmit}  className="needs-validation" noValidate>
  
  {
    error?
  <div className="alert alert-danger alert-dismissible fade show p-3" role="alert">
  {error}

  <button type="button" className="btn-close" data-bs-dismiss="alert" onClick={()=>{setError(null)}} ></button>

</div>:''

  }

  {
    request?
  <div className="alert alert-success alert-dismissible fade show p-3" role="alert">
  <span className="fw-bold">Success!</span> 0TP resent successfully
  <button type="button" className="btn-close" data-bs-dismiss="alert" onClick={()=>{setRequest(false)}} ></button>
  
</div>:''

  }



         

                <div className="mb-4">
                  <label className="form-label text-muted" >OTP Code</label>
                  <input className="form-control" value={verficationCode} onChange={(val) => setVerificationCode(val.target.value)}    required/>
                </div>


{
startSpiner?
<button className="btn btn-primary btn-lg rounded-m w-100 mb-4" type="submit">

<span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
  verifying..
</button>
:
<button className="btn btn-primary btn-lg rounded-m w-100 mb-4" type="submit">Verify & Proceed</button>

}



          

              </form>
              <p>If you did not receive a code </p>
                <div className="col-12">
                {
                  startSpiner1? 
                  <button type="submit" onClick={handleResendOtp}  className="btn btn-link p-0 m-0 align-baseline">
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  sending...
								</button>:
                  <button type="submit" onClick={handleResendOtp}  className="btn btn-link p-0 m-0 align-baseline">
									Click here to request another
								</button>
                }
								
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    }
    
  </div>
  )
}

export {VerifyEmail}