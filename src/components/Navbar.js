import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';


  const Navbar =()=>{

  
    return(
        <div> 

        <nav className="navbar fixed-top navbar-expand-lg bg-dark text-light">
            <div className="container-fluid ">
            <a className="navbar-brand text-light" href="/">News Monkey</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active text-light" aria-current="page" to="/">Home</Link></li>
                <li className="nav-item"><Link className="nav-link text-light" to="/business">business</Link></li>
                <li className="nav-item"><Link className="nav-link text-light" to="/entertainment">entertainment</Link></li>
                <li className="nav-item"><Link className="nav-link text-light" to="/health">health</Link></li>
                <li className="nav-item"><Link className="nav-link text-light" to="/science">science</Link></li>
                <li className="nav-item"><Link className="nav-link text-light" to="/sports">sports</Link></li>
                <li className="nav-item"><Link className="nav-link text-light" to="/technology">technology</Link></li>
       
                <li className="nav-item"><Link className="nav-link text-light" to="/about">About</Link></li>
       
            </ul>
            <p>Souravpreet Singh</p>
            
    </div>
  </div>
</nav>
</div>
    )
  }


export default Navbar