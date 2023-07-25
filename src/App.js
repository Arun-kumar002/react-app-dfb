import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import LoginPage from "./Component/LoginPage";
import SignupPage from "./Component/SignupPage";
import AmazingPage from "./Component/AmazingComponent/AmazingPage";
import Page from "./Component/AmazingComponent/page/Page";
import Page1 from "./Component/AmazingComponent/page/Page1";
import Page2 from "./Component/AmazingComponent/page/Page2";
import Page3 from "./Component/AmazingComponent/page/Page3";
import Page4 from "./Component/AmazingComponent/page/Page4";
import Page5 from "./Component/AmazingComponent/page/Page5";
import Payment1 from "./Component/AmazingComponent/payment/Payment1";
import Payment2 from "./Component/AmazingComponent/payment/Payment2";
import Payment3 from "./Component/AmazingComponent/payment/Payment3";
import Payment4 from "./Component/AmazingComponent/payment/Payment4";
import Payment5 from "./Component/AmazingComponent/payment/Payment5";
import Payment6 from "./Component/AmazingComponent/payment/Payment6";
import TopoftheworldPage from './Component/TopoftheworldComponent/TopoftheworldPage';
import TopPage1 from './Component/TopoftheworldComponent/page/TopPage1';
import TopPage2 from './Component/TopoftheworldComponent/page/TopPage2';
import TopPage3 from './Component/TopoftheworldComponent/page/TopPage3';
import TopPage4 from './Component/TopoftheworldComponent/page/TopPage4';
import TopPage5 from './Component/TopoftheworldComponent/page/TopPage5';
import TopPage6 from './Component/TopoftheworldComponent/page/TopPage6';
import TopPayment1 from './Component/TopoftheworldComponent/payment/TopPayment1';
import TopPayment2 from './Component/TopoftheworldComponent/payment/TopPayment2';
import TopPayment3 from './Component/TopoftheworldComponent/payment/TopPayment3';
import TopPayment4 from './Component/TopoftheworldComponent/payment/TopPayment4';
import TopPayment5 from './Component/TopoftheworldComponent/payment/TopPayment5';
import TopPayment6 from './Component/TopoftheworldComponent/payment/TopPayment6';
import LakefrontPage from './Component/LakefrontComponent/LakefrontPage';
import LakefrontPage1 from './Component/LakefrontComponent/page/LakefrontPage1';
import LakefrontPage2 from './Component/LakefrontComponent/page/LakefrontPage2';
import LakefrontPage3 from './Component/LakefrontComponent/page/LakefrontPage3';
import LakefrontPage4 from './Component/LakefrontComponent/page/LakefrontPage4';
import LakefrontPage5 from './Component/LakefrontComponent/page/LakefrontPage5';
import LakefrontPage6 from './Component/LakefrontComponent/page/LakefrontPage6';
import LakefrontPayment1 from './Component/LakefrontComponent/payment/LakefrontPayment1';
import LakefrontPayment2 from './Component/LakefrontComponent/payment/LakefrontPayment2';
import LakefrontPayment3 from './Component/LakefrontComponent/payment/LakefrontPayment3';
import LakefrontPayment4 from './Component/LakefrontComponent/payment/LakefrontPayment4';
import LakefrontPayment5 from './Component/LakefrontComponent/payment/LakefrontPayment5';
import LakefrontPayment6 from './Component/LakefrontComponent/payment/LakefrontPayment6';
import FarmsPage from "./Component/FarmsComponent/FarmsPage";
import FarmsPage1 from "./Component/FarmsComponent/page/FarmsPage1";
import FarmsPage2 from "./Component/FarmsComponent/page/FarmsPage2";
import FarmsPage3 from "./Component/FarmsComponent/page/FarmsPage3";
import FarmsPage4 from "./Component/FarmsComponent/page/FarmsPage4";
import FarmsPage5 from "./Component/FarmsComponent/page/FarmsPage5";
import FarmsPage6 from "./Component/FarmsComponent/page/FarmsPage6";
import FarmsPayment1 from "./Component/FarmsComponent/payment/FarmsPayment1";
import FarmsPayment2 from "./Component/FarmsComponent/payment/FarmsPayment2";
import FarmsPayment3 from "./Component/FarmsComponent/payment/FarmsPayment3";
import FarmsPayment4 from "./Component/FarmsComponent/payment/FarmsPayment4";
import FarmsPayment5 from "./Component/FarmsComponent/payment/FarmsPayment5";
import FarmsPayment6 from "./Component/FarmsComponent/payment/FarmsPayment6";
// import { LoginForm } from "./Home";
// import Signin from "./Sigin";
// import Home from "./Home";
// import {useNavigate} from "react-router-dom";
// import { AppBar, Button, Toolbar } from '@mui/material';
import "./App.css";

function App() {
  // const roleId=localStorage.getItem('roleId')
  // const navigate=useNavigate();

  return (
    <>
    <div >
    
      <BrowserRouter>
        <Routes>      
                       {/* <Route path='/login' element={<Login/>}></Route> */}
                       {/* <Route path='/signup' element={<Signin/>}></Route> */}
                        <Route path="/" element={<LoginPage/>} />
                        <Route path="/signup" element={<SignupPage/>} />
                      <Route path="/Amazing" element={<AmazingPage />} />
                               <Route path="/page" element={<Page />} />
                               <Route path="/page1" element={<Page1 />} />
                               <Route path="/page2" element={<Page2 />} />
                               <Route path="/page3" element={<Page3 />} />
                               <Route path="/page4" element={<Page4 />} />
                               <Route path="/page5" element={<Page5 />} />
                               <Route path="/payment1" element={<Payment1 />} />
                               <Route path="/payment2" element={<Payment2 />} />
                               <Route path="/payment3" element={<Payment3 />} />
                               <Route path="/payment4" element={<Payment4 />} />
                               <Route path="/payment5" element={<Payment5 />} />
                               <Route path="/payment6" element={<Payment6 />} />
                      <Route path="/topoftheworld" element={<TopoftheworldPage />} />
                               <Route path="/toppage1" element={<TopPage1 />} />
                               <Route path="/toppage2" element={<TopPage2 />} />
                               <Route path="/toppage3" element={<TopPage3 />} />
                               <Route path="/toppage4" element={<TopPage4 />} />
                               <Route path="/toppage5" element={<TopPage5 />} />
                               <Route path="/toppage6" element={<TopPage6 />} />
                               <Route path="/payment1" element={<TopPayment1 />} />
                               <Route path="/payment2" element={<TopPayment2 />} />
                               <Route path="/payment3" element={<TopPayment3 />} />
                               <Route path="/payment4" element={<TopPayment4 />} />
                               <Route path="/payment5" element={<TopPayment5 />} />
                               <Route path="/payment6" element={<TopPayment6 />} />
                        <Route path="/Lakefront" element={<LakefrontPage />} />
                               <Route path="/LakefrontPage1" element={<LakefrontPage1 />} />
                               <Route path="/LakefrontPage2" element={<LakefrontPage2 />} />
                               <Route path="/LakefrontPage3" element={<LakefrontPage3 />} />
                               <Route path="/LakefrontPage4" element={<LakefrontPage4 />} />
                               <Route path="/LakefrontPage5" element={<LakefrontPage5 />} />
                               <Route path="/LakefrontPage6" element={<LakefrontPage6 />} />
                               <Route path="/payment1" element={<LakefrontPayment1 />} />
                               <Route path="/payment2" element={<LakefrontPayment2 />} />
                               <Route path="/payment3" element={<LakefrontPayment3 />} />
                               <Route path="/payment4" element={<LakefrontPayment4 />} />
                               <Route path="/payment5" element={<LakefrontPayment5 />} />
                               <Route path="/payment6" element={<LakefrontPayment6 />} />
                       <Route path="/Farms" element={<FarmsPage />} />
                               <Route path="/FarmsPage1" element={<FarmsPage1 />} />
                               <Route path="/FarmsPage2" element={<FarmsPage2 />} />
                               <Route path="/FarmsPage3" element={<FarmsPage3 />} />
                               <Route path="/FarmsPage4" element={<FarmsPage4 />} />
                               <Route path="/FarmsPage5" element={<FarmsPage5 />} />
                               <Route path="/FarmsPage6" element={<FarmsPage6 />} />
                               <Route path="/payment1" element={<FarmsPayment1 />} />
                               <Route path="/payment2" element={<FarmsPayment2 />} />
                               <Route path="/payment3" element={<FarmsPayment3 />} />
                               <Route path="/payment4" element={<FarmsPayment4 />} />
                               <Route path="/payment5" element={<FarmsPayment5 />} />
                               <Route path="/payment6" element={<FarmsPayment6 />} />
         </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

// export function logout() {
//   localStorage.removeItem("token")
//   localStorage.removeItem("roleId")

//   window.location.href = "/";

// }

export default App;

