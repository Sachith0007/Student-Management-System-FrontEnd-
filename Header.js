import React from "react";
import { Link } from "react-router-dom"; // router dom kiyala api mulin install karagtta package eken me link kiyana class eka call kragnnwa. meka href wagemi. page athare link ek hdanna use karanne, ancher tag ekata wada meke thiyena advantage ek wenne mekedi page ek redirect wenne na, arakedi link eka click karama mulu website ekm refresh wenw. mekedi ehma ekk wenne na

function Header(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

  <div      className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                {/* <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a> ..(ancher tag eka cmnt ekk karala link ek use krnw.)*/} 
                <Link to="/" className="nav-link">Home</Link>
            </li> 
            <li className="nav-item">
                {/* <a className="nav-link" href="/add">Create Student</a> */}
                <Link to="/add" className="nav-link">Create Student</Link>
            </li>
            </ul>
            
  </div>
</nav>
    )
}

export default Header;