import React from 'react';
//import NavBar from './navbar'

export default function AboutMe() {
    return (
        <div class="container-fluid py-3">
        <div class="p-3 h-auto mb-2 text-black" style="background: linear-gradient(to bottom right, #D2D2D2, #55585A); font-weight: bold;">
          <div class="row row-cols-1 row-cols-md-4 g-4">
            <div class="col">
              <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="./assets/images/profile_pic.jpg" alt="picture with cat"> </img>
                 <div class="card-body">
                  <p class="card-text">Hi! I'm Jill and am a junior programmer.</p>
                </div>
                </div>
            </div>
            <div class="col">
              <div class="card" style="width: 800px; height: 400px; background-color: rgb(241, 241, 226);">
                 <h2 class="display-4">About Me</h2>
                  <p class="card-text">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
              </div>
           </div>
          </div>
       </div>
      </div>
    )
}