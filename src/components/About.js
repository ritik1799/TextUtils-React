import React from 'react'

function About() {
  return (
    <div>
    <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       About Us
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>TextUtils</strong> This Project was built by Ritik Srivastava while learning and practising ReactJS Technology. 
        Thank you for visiting my project. :)
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default About
