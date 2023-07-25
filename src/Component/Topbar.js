import React from 'react';
import Header from '../components/Header';
import {useNavigate} from 'react-router-dom';

function Topbar() {
const navigate = useNavigate();
const Newbutton = async () => {
 navigate('/Amazing');
};
const Topoftheworldbutton = async () => {
 navigate('/topoftheworld');
};
const Lakefrontbutton = async () => {
 navigate('/Lakefront');
};
const Farmsbutton = async () => {
 navigate('/Farms');
};
const logout = async () => {
 await localStorage.removeItem("token");
 navigate('/')
};

return (
<>
<Header />
  
  <nav className="navbar navbar-dark bg-primary">
    <div className="container" style={{textAlign:"center"}}>
      <button style={{fontSize:"16px"}} type="button" className="btn btn-primary"  onClick={Newbutton}><i class="fa fa-building" aria-hidden="true"></i><br/>Amazing</button>
      <button style={{fontSize:"16px"}} type="button" className="btn btn-primary"  onClick={Topoftheworldbutton}><i class="fa fa-cloud" aria-hidden="true"></i><br/>Top of the world</button>
      <button style={{fontSize:"16px"}} type="button" className="btn btn-primary" onClick={Lakefrontbutton}><i class="fa fa-sitemap" aria-hidden="true"></i><br/>Lakefront</button>
      <button style={{fontSize:"16px"}} type="button" className="btn btn-primary" onClick={Farmsbutton}><i class="fa fa-futbol-o" aria-hidden="true"></i><br/>Farms</button>
      <button style={{fontSize:"16px"}} type="button" className="btn btn-danger" onClick={logout}><i class="fa fa-sign-out" aria-hidden="true"></i>Logout</button>
    </div>
  </nav>
</>
);
}
export default Topbar;
