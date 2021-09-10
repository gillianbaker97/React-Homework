import React from 'react';

export default function Form() {
    return (
<div class="container-fluid py-3">
  <div class="p-3 mb-2 text-black" style="background: linear-gradient(to bottom right, #D2D2D2, #55585A); font-weight: bold;">
    <form>
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" id="name" aria-describedby="emailHelp"> </input>
        <div id="name" class="form-text"></div>
      </div> 
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" > </input>
        <div id="emailHelp" class="form-text"></div>
      </div>
      <div class="mb-3">
        <label for="message">Message</label>
        <textarea class="form-control" id="message" style="height:200px"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
</div>
    )
}