import { Routes, Route, Outlet } from 'react-router-dom';
import AccountActivation from '../shared/auth/AccountActivation/AccountActivation.jsx';
import Login from "../shared/auth/Login/index.js";
import ForgotPassword from '../shared/auth/ForgotPassword/ForgotPassword.jsx';
import VerifyEmail from '../shared/auth/VerifyEmail/VerifyEmail.jsx';

const AuthRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route path="/login" element={<Login />} />
          <Route path="/account-activation" element={ <AccountActivation/> } />
          <Route path="/forgot-password" element={< ForgotPassword/>} />
          <Route path="/email-verification" element={< VerifyEmail/>} />

          {/* Add more auth-related routes here */}
        </Route>
      </Routes>
    </>
  )
};

export default AuthRoutes;
