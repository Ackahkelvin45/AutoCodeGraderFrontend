import { useState } from 'react';
import { NavandSidebar } from '../../../components/dashboard/lectuerer/navBarAndSideBar';
import { useNavigate } from 'react-router-dom';
function ChangePasswordLecturer() {
  const [seeCurrentPassword, setSeeCurrentPassword] = useState(false);
  const [seeNewPassword, setSeeNewPassword] = useState(false);
  const [seeConfirmPassword, setSeeConfirmPassword] = useState(false);
  const redirect=useNavigate()

  return (
    <div className="container-fluid px-xl-4 pb-3 pb-lg-4 px-4">
      <section className="offcanvas-enabled-start row full-section" style={{ transition: 'all .6s, transform .6s' }}>
        <div className="col-12">
          <NavandSidebar />
          <div className="pt-5 mt-5">
            <div className="col-lg-12  mb-5">
              <h1 className="h2">Password &amp; Security</h1>
              <p className="pt-1">Manage your password settings and secure your account.</p>
              <h2 className="h5">Password</h2>
              <form className="needs-validation pb-4">
                <div className="row align-items-end mb-2">
                  <div className="col-sm-6 mb-2">
                    <label className="form-label">Current password</label>
                    <div className="password-toggle">
                      <input
                        className="form-control"
                        type={seeCurrentPassword ? 'text' : 'password'}
                        id="account-password"
                        required=""
                      />
                      <label
                        className="password-toggle-btn"
                        aria-label="Show/hide password"
                        onClick={() => setSeeCurrentPassword(!seeCurrentPassword)}
                      >
                        {seeCurrentPassword ? (
                          <i className="fi-eye-on text-muted"></i>
                        ) : (
                          <i className="fi-eye-off text-muted"></i>
                        )}
                      </label>
                    </div>
                  </div>
                  <div className="col-sm-6 mb-2">
                    <a  onClick={(e) => {
              e.preventDefault()
                redirect("/user/request/password-reset", {state: {type:"LECTURER", url: "/auth/login/lecturer"}})
          }}className="d-inline-block mb-2 mx-2 text-primary text-underline" style={{ textDecoration: 'underline' }} href="#">Forgot password?</a>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-sm-6 mb-3">
                    <label className="form-label">New password</label>
                    <div className="password-toggle">
                      <input
                        minLength={4}
                        pattern="^(?=.*[\W_]).{4,}$"
                        className="form-control"
                        type={seeNewPassword ? 'text' : 'password'}
                        name="newpassword"
                        required
                      />
                      <label
                        className="password-toggle-btn"
                        aria-label="Show/hide password"
                        onClick={() => setSeeNewPassword(!seeNewPassword)}
                      >
                        {seeNewPassword ? (
                          <i className="fi-eye-on text-muted"></i>
                        ) : (
                          <i className="fi-eye-off text-muted"></i>
                        )}
                      </label>
                    </div>
                  </div>
                  <div className="col-sm-6 mb-3">
                    <label className="form-label">Confirm password</label>
                    <div className="password-toggle">
                      <input
                        className="form-control mx-1"
                        type={seeConfirmPassword ? 'text' : 'password'}
                        id="account-password-confirm"
                        required=""
                      />
                      <label
                        className="password-toggle-btn"
                      
                        onClick={() => setSeeConfirmPassword(!seeConfirmPassword)}
                      >
                        {seeConfirmPassword ? (
                          <i className="fi-eye-on text-muted"></i>
                        ) : (
                          <i className="fi-eye-off text-muted"></i>
                        )}
                      </label>
                    </div>
                  </div>
                </div>
                <button className="btn btn-outline-primary" type="submit">Update password</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ChangePasswordLecturer;
