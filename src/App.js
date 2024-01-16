import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Offers from "./Pages/Offers";
import SignIn from "./Pages/SignIn";
import Header from "./Components/Header";
import SignUp from "./Pages/SignUp";
import ForgotPassword from "./Pages/Forgot-Password";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
   <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/offers" element={<Offers/>}/>
      <Route path='/sign-in' element={<SignIn/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>
      <Route path="/forgot-password" element={<ForgotPassword/>}/>
    </Routes>
    <ToastContainer
      position="bottom-center"
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition="Bounce"
      />
   </Router>
  );
}

export default App;
