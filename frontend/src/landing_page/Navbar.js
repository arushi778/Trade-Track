import React from "react"
import {Link} from 'react-router-dom';

function Navbar()
{
    return (
            <nav className="navbar navbar-expand-lg border-bottom ">
  <div class="container ">
    <Link class="navbar-brand" to='/'>
      <img className='logo' src='media/images/logo.png'/>
    </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <form class="" role="search">
              <ul class="navbar-nav  mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to='/signup'>Signup</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to='/about'>About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to='/product'> Product</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to='/pricing'>Pricing</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to='/support'>Support</Link>
        </li>
      </ul>
      </form>
    </div>
  </div>
</nav>
    );
}

export default Navbar;
