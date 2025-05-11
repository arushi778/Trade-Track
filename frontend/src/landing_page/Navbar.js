import React from "react"

function Navbar()
{
    return (
            <nav className="navbar navbar-expand-lg border-bottom ">
  <div class="container ">
    <a class="navbar-brand" href="#">
      <img className='logo' src='media/images/logo.png'/>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <form class="" role="search">
              <ul class="navbar-nav  mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Signup</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#"> Product</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Support</a>
        </li>
      </ul>
      </form>
    </div>
  </div>
</nav>
    );
}

export default Navbar;
