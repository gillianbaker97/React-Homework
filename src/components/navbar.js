import React from 'react';

export default function Navbar(){
    return (
        <nav class="navbar navbar-expand-lg navbar-light py-5">
    <div class="container-fluid bg-image py-5" style=" background-image: url(assets/images/hector-falcon-mQeAIjEOprg-unsplash.jpg)">
      <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarText" style="font-size:20px">
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item" id="first">
            <a class="nav-link" href="./index.html">About Me</a>
          </li>
          <li class="nav-item" id="second">
            <a class="nav-link" href="./portfolio.html">Portfolio</a>
          </li>
          <li class="nav-item" id="third">
            <a class="nav-link active" aria-current="page" href="#">Contact</a>
          </li>
          <li class="nav-item" id="fourth">
            <a class="nav-link" href="./resume.html">Resume</a>
          </li>
        </ul>
        {/* <Link
            idName="first"
            to={`/profiles/${profile._id}`}
            ></Link> */}
      </div>
    </div>
  </nav>
    )
}