
import './assets/css/theme.min.css'
import { Route, Routes } from 'react-router-dom'
import { StudentDashboardNav } from './components/studentDashboardNav'
import { LandingPage } from './pages/landingPage'
import StudentDashboard from './pages/dashboard/studentDashboard'
import LecturerDashboard from './pages/dashboard/lecturerDashboard'
import { LoginStudent } from './pages/authentication/student/signin'
import { LoginLecturer } from './pages/authentication/lecturer/signin'
import { VerifyEmail } from './pages/authentication/verifyEmail'
import { ConfirmForgotEmail } from './pages/authentication/confirmForgotEmail'
import { RegisterStudent } from './pages/authentication/student/register'
import { RegisterLecturer } from './pages/authentication/lecturer/register'
import { ForgotPassword } from './pages/authentication/forgotPassword'
import { NewPassword } from './pages/authentication/newPassword'
import { StudentProfile } from './components/studentProfile'
import { AssignmentDescription } from './pages/assignmentDecriptionPage'
import { SolutionUpload } from './components/fileUpload'
import CreateAssignment from './pages/assignments/lecturer/createAssignment'
import AddQuestion from './pages/assignments/lecturer/addQuestion'
import ViewAssignments from './pages/assignments/lecturer/viewAssignments'
import AssignmentDetailPageLecturer from './pages/assignments/lecturer/assignmentDetailPage'
import ChatPage from './pages/chat/chatPage'
import ProfileDetailPage from './pages/profile/student/profileDetailPage'
import ChangePassword from './pages/profile/student/changePassword'
import ProfileDetailPageLecturer from './pages/profile/teacher/profileDetailLecturer'
import ChangePasswordLecturer from './pages/profile/teacher/changePasswordLecturer'

function App() {
  return (
    <div   className="page-wrapper">
    <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/auth/register/student' element={<RegisterStudent/>} /> 
      <Route path='/auth/register/lecturer' element={<RegisterLecturer />} /> 
      <Route path='/auth/login/student' element = {<LoginStudent />} />
      <Route path='/auth/login/lecturer' element = {<LoginLecturer />} />
      <Route path="/auth/verify/email"  element ={<VerifyEmail />} />
      <Route path="/user/request/password-reset/confirm-token"  element ={<ConfirmForgotEmail />} />
      <Route path="/user/request/password-reset"  element ={<ForgotPassword />} />
      <Route path="/user/new-password" element={<NewPassword />} />


      <Route path='/student/dashboard' element = { <StudentDashboard />} />
      <Route path='/lecturer/dashboard' element = { <LecturerDashboard />} />
      <Route path='/lecturer/create/assignment' element = { <CreateAssignment/>} />
      <Route path='/:id/chat' element = {<ChatPage/>} />


      <Route path='/lecturer/add/task/:id' element = { <AddQuestion />} />
      <Route path='/lecturer/view/assignments' element = { <ViewAssignments />} />
      <Route path='/lecturer/view/:id' element = { <AssignmentDetailPageLecturer />} />
      <Route path='/loading' element={<StudentDashboardNav/>} />
      <Route path="/test" element={<SolutionUpload />} />
      <Route path='/assignment/:id' element={<AssignmentDescription /> } />



      <Route path='/student/profile' element = {<ProfileDetailPage />} />
      <Route path='/student/change-password' element = {<ChangePassword />} />

      
      <Route path='/lecturer/profile' element = {<ProfileDetailPageLecturer />} />
      <Route path='/lecturer/change-password' element = {<ChangePasswordLecturer />} />

    

    </Routes>

    </div>
  )
}

export default App
