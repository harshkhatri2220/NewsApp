import React, { Component } from 'react'
import {  Link } from "react-router-dom";


export default class NavBar extends Component {

  // constructor() {
  //   super(); //we have to use super() in constructor compursarily to run constructor
  //   this.state = {
  //     active:false
  //   };
  // }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link  className="navbar-brand" to="/">News-App </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          < Link className="nav-link active" aria-current="page" to="/">Home
        </Link> </li>
      
        <li className='nav-item'>< Link className='nav-link'to="/business"   aria-current="page" >Business</Link></li>
        <li className='nav-item'>< Link className='nav-link'to="/entertainment"  aria-current="page">Entertainment</Link></li>
        <li className='nav-item'>< Link className='nav-link'to="/general" aria-current="page" >General</Link></li>
        <li className='nav-item'>< Link className='nav-link'to="/health" aria-current="page" >Health</Link></li>
        <li className='nav-item'>< Link className='nav-link'to="/science" aria-current="page" >Science</Link></li>
        <li className='nav-item'>< Link className='nav-link'to="/sports"  aria-current="page">Sports</Link></li>
        <li className='nav-item'>< Link className='nav-link'to="/technology"  aria-current="page">Technology</Link></li>
        </ul>
       
    </div>
  </div>
</nav>
      </div>
    )
  }
}
