import React from 'react';

export default function Portfolio() {
    return (
        <div class="container-fluid py-3">
        <div class="p-3 mb-2 text-black" style="background: linear-gradient(to bottom right, #D2D2D2, #55585A); font-weight: bold;">
          <div class="card-deck p-auto">
           <div class="card text-white" id="card1">
              <img class="card-img" src="./assets/images/wineGlasses.jpg" alt="Card image cap"> </img>
                <div class="card-img-overlay">
                 <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text">Last updated 3 mins ago</p>
               </div>
           </div>
            <div class="card text-white" id="card2">
              <img class="card-img" src="./assets/images/events.jpg" alt="Card image cap"> </img>
                 <div class="card-img-overlay">
                   <h5 class="card-title">Card title</h5>
                    <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                      <p class="card-text"></p>
                 </div>
           </div>
             <div class="card text-white" id="card3">
               <img class="card-img" src="./assets/images/weather.jpg" alt="Card image cap" style="height:17rem"> </img>
                <div class="card-img-overlay">
                 <h5 class="card-title">Card title</h5>
                   <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                   <p class="card-text"></p>
               </div>
            </div>
          </div>
          <div class="card-deck p-auto">
            <div class="card p-auto m-2 text-white" id="card1">
              <img class="card-img" src="./assets/images/green waves.jpg" alt="Card image cap" style="height:17rem"> </img>
                <div class="card-img-overlay">
                 <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text">Last updated 3 mins ago</p>
               </div>
           </div>
           <div class="card p-auto m-2 text-white" id="card1">
            <img class="card-img" src="./assets/images/pinkshapes.jpg" alt="Card image cap" style="height:17rem"> </img>
              <div class="card-img-overlay">
               <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text">Last updated 3 mins ago</p>
             </div>
         </div>
          </div>
        </div>
      </div>
    )
}