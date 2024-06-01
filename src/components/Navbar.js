import React,{useState} from "react";
import { Link,useNavigate } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';
import Modal from "../Modal";
import Cart from "../screens/Cart";
import { useCart } from "./ContextReducer";
export default function Navbar() {
  let data=useCart();
  const [cartView,setCartView] = useState(false);

  const navigate =useNavigate();
  const handleLogout = ()=>{
    localStorage.removeItem("authToken")
    navigate('/login')
  }




  return (
    <div>
     <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-success">
  <div className="container-fluid">
    <Link className="navbar-brand fw-bold fst-italic" to="/">
      Quick-Bite
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarCollapse"
      aria-controls="navbarCollapse"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">
            Home
          </Link></li>
         {
          (localStorage.getItem("authToken"))?
          <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">
            My Orders
          </Link></li>
          : " "
         }
          </ul>
          {
            (!localStorage.getItem("authToken"))?
        <div className="d-flex p-absolute top-0 end-0" >
        <Link className=" btn btn-dark text-white mx-1 " to="/login">
            Login
          </Link>
          <Link className=" btn btn-dark text-white mx-1 " to="/register">
            Register
          </Link>
        </div>
        :<div>
         <div className="btn bg-white text-success mx-2"  onClick={()=>{setCartView(true)}}>
          My Cart{" "} <Badge pill bg="danger">{data.length}</Badge>
        </div>
       {
        cartView?<Modal onClose={()=>setCartView(false)} ><Cart/></Modal>:null
       }
       
        <div className="btn bg-white text-danger mx-2"onClick={handleLogout}>
          Logout
        </div>
        </div>
} 
    </div>
  </div>
</nav>

    </div>
  );
}
