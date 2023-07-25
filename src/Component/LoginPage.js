import React,{useState} from 'react';
import frontImg from "../assets/logo/frontImg.jpg";
import "./style.css";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


function LoginPage() {
    const navigate = useNavigate();
    const[formData, setFormData] =useState({
        email: "",
        password: ""
    }); 
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post('https://airbnb-backend-clone-08.onrender.com/login', {...formData });
            console.log(response);
            if(response.data) {
                await localStorage.setItem("token", response.data);
                navigate('/Amazing');
            }
            } catch(err) {
            console.log(err);
            }
    };
    const handleSignup = async (e) => {
       navigate('/signup');
    };
return(
  <body>
        <div className="card mb-3" style={{maxWidth: "800px", margin:"100px auto",border:"20px solid rgb(252, 89, 89)"}}>
                <div className="row no-gutters" style={{margin:"30px"}}>
                    <div className="col-md-6" style={{marginTop:"80px"}}>
                       <img src={frontImg} className="card-img" alt="card-img"/>
                    </div>
                   <div className="col-md-6">
                      <div className="card-body">
                        <h2 className="card-title" style={{textAlign: "center"}}>Welcome to Airbnb</h2>
                        <form onSubmit={handleSubmit}>
                          <div className="mb-4"style={{marginTop:"20px", textAlign: "center"}}>

                            <label for="email" className="email mb-3"><b>Email</b></label><br/>
                            <input type="email" className="email mb-3" placeholder="name@gmail.com" 
                                  value={formData.email} onChange={(e) => setFormData({...formData, email:e.target.value})}/><br/>

                            <label for="password" className="password mb-3"><b>Password</b></label><br/>
                            <input type="password" className="password mb-3" placeholder="Password" 
                                  value={formData.password} onChange={(e) => setFormData({...formData, password:e.target.value})}/><br/>

                            <button  type="Login" className="btn btn-primary mb-3" style={{marginLeft:"20px"}} >Login</button><br/>
                          </div>
                      </form>  
                        <div style={{textAlign: "center"}}>Don’t have an account?<button type="button" class="btn btn-link" onClick={handleSignup}>Sign up</button></div> 
                      </div>
                   </div>
                </div>
        </div>
  </body>   
);
}
export default LoginPage;

