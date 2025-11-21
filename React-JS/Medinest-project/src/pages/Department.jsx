import React from 'react'
import { Link } from 'react-router-dom'

const Department = () => {
  return (
    <div>
       <div >
  <div className="row">
    <div className="col-md-12 text-center pt-5 pb-5 mb-4">
      <h1>Departments</h1>
      <p>Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a
        odio voluptatem.<br />
        Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>
    </div>
    <div className="container-fluid">
      <nav aria-label="breadcrumb" className="bg-body-secondary ps-5 pt-4 pb-3">
        <ol className="breadcrumb joint">
          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
          <li className="breadcrumb-item active" aria-current="page">Department</li>
        </ol>
      </nav>
    </div>
  </div>
  <div className="container">
    <div className="row mt-5 mb-3">
      <div className="col-md-6 mt-4">
        <div className="card" id="dep-card">
          <div className="col-md-12 symbol">
            <i className="bi bi-heart-pulse-fill" />
            <h3>Cardiology</h3>
            <p>Heart &amp; Vascular</p>
          </div>
          <div className="col-md-12">
            <p style={{paddingLeft: 10}}>Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae.</p>
          </div>
          <div className="col-md-12 pt-1 bgd">
            <span className="badge rounded-pill bg-primary">24/7 Emergency</span>
            <span className="badge rounded-pill bg-info">Advanced Diagnostics</span>
          </div>
          <div style={{height: 250, overflow: 'hidden'}}>
            <img src="img/cardiology-2 (1).webp" width="100%" height="280px" />
          </div>
        </div>
      </div>
      <div className="col-md-6 mt-4">
        <div className="card" id="dep-card">
          <div className="col-md-12 symbol">
            <i className="fa-solid fa-brain" />
            <h3>Neurology</h3>
            <p>Brain &amp; Nervous System</p>
          </div>
          <div className="col-md-12">
            <p style={{paddingLeft: 10}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="col-md-12 pt-1 bgd">
            <span className="badge rounded-pill bg-primary">MRI Available</span>
            <span className="badge rounded-pill bg-info">Specialist Team</span>
          </div>
          <div style={{height: 250, overflow: 'hidden'}}>
            <img src="img/neurology-3.webp" width="100%" height="280px" />
          </div>
        </div>
      </div>
      <div className="col-md-6 mt-4">
        <div className="card" id="dep-card">
          <div className="col-md-12 symbol">
            <i className="fa-solid fa-bone" />
            <h3>Orthopedics</h3>
            <p>Bones &amp; Joints</p>
          </div>
          <div className="col-md-12">
            <p style={{paddingLeft: 10}}>Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat duis aute.</p>
          </div>
          <div className="col-md-12 pt-1 bgd">
            <span className="badge rounded-pill bg-primary">Sports Medicine</span>
            <span className="badge rounded-pill bg-info">Joint Replacement</span>
          </div>
          <div style={{height: 250, overflow: 'hidden'}}>
            <img src="img/orthopedics-1.webp" width="100%" height="280px" />
          </div>
        </div>
      </div>
      <div className="col-md-6 mt-4">
        <div className="card" id="dep-card">
          <div className="col-md-12 symbol">
            <i className="fa-solid fa-person-circle-check" />
            <h3>Pediatrics</h3>
            <p>Children's Health</p>
          </div>
          <div className="col-md-12">
            <p style={{paddingLeft: 10}}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum sed.</p>
          </div>
          <div className="col-md-12 pt-1 bgd">
            <span className="badge rounded-pill bg-primary">Child-Friendly</span>
            <span className="badge rounded-pill bg-info">Vaccination Center</span>
          </div>
          <div style={{height: 250, overflow: 'hidden'}}>
            <img src="img/pediatrics-4.webp" width="100%" height="280px" />
          </div>
        </div>
      </div>
      <div className="col-md-6 mt-4">
        <div className="card" id="dep-card">
          <div className="col-md-12 symbol">
            <i className="fa-solid fa-flask" />
            <h3>Laboratory</h3>
            <p>Diagnostic Services</p>
          </div>
          <div className="col-md-12">
            <p style={{paddingLeft: 10}}>Nulla facilisi morbi tempus iaculis urna id volutpat lacus
              laoreet non curabitur gravida arcu ac tortor dignissim.</p>
          </div>
          <div className="col-md-12 pt-1 bgd">
            <span className="badge rounded-pill bg-primary">Quick Results</span>
            <span className="badge rounded-pill bg-info">Digital Reports</span>
          </div>
          <div style={{height: 250, overflow: 'hidden'}}>
            <img src="img/laboratory-3.webp" width="100%" height="280px" />
          </div>
        </div>
      </div>
      <div className="col-md-6 mt-4">
        <div className="card" id="dep-card">
          <div className="col-md-12 symbol">
            <i className="bi bi-heart-pulse-fill" />
            <h3>Emergency</h3>
            <p>24/7 Critical Care</p>
          </div>
          <div className="col-md-12">
            <p style={{paddingLeft: 10}}>Convallis tellus id interdum velit laoreet id donec ultrices
              tincidunt arcu non sodales neque sodales ut etiam.</p>
          </div>
          <div className="col-md-12 pt-1 bgd">
            <span className="badge rounded-pill bg-primary">Round-the-Clock</span>
            <span className="badge rounded-pill bg-info">Trauma Center</span>
          </div>
          <div style={{height: 250, overflow: 'hidden'}}>
            <img src="img/emergency-4.webp" width="100%" height="280px" />
          </div>
        </div>
      </div>
      <div className="footer">
        <hr />
        <div className="row mt-5 mb-4">
          <div className="col-md-2 col-sm-4 col-12 p-2">
            <h3>MediNest</h3>
            <p>A108 Adam Street<br />
              New York, NY 535022</p>
            <span><b>Phone:</b> +1 5589 55488 55</span><br />
            <span><b>Email:</b> info@example.com</span><br />
            <i className="fa-brands fa-square-x-twitter" />
            <i className="fa-brands fa-square-facebook" />
            <i className="fa-brands fa-square-instagram" />
            <i className="fa-brands fa-linkedin" />
          </div>
          <div className="offset-md-2 col-md-2 offset-sm-1 col-sm-4">
            <ul>
              <h5>Useful Links</h5>
              <li>Home</li>
              <li>About us</li>
              <li>Services</li>
              <li>Terms of service</li>
              <li>Privacy policy</li>
            </ul>
          </div>
          <div className="col-md-2 col-sm-4">
            <ul>
              <h5>Our Services</h5>
              <li>Web Design</li>
              <li>Web Development</li>
              <li>Product Management</li>
              <li>Marketing</li>
              <li>Graphic Design</li>
            </ul>
          </div>
          <div className="col-md-2 col-sm-4">
            <ul>
              <h5>Hic solutasetp</h5>
              <li>Molestiae accusamus</li>
              <li>Excepturi dignissimos</li>
              <li>Suscipit distinctio</li>
              <li>Dilecta</li>
              <li>Sit quas consectetur</li>
            </ul>
          </div>
          <div className="col-md-2 col-sm-4">
            <ul>
              <h5>Nobis illum</h5>
              <li>Ipsam</li>
              <li>Laudantium dolorum</li>
              <li>Dinera</li>
              <li>Trodelas</li>
              <li>Flexo</li>
            </ul>
          </div>
        </div>
      </div>
    </div></div></div>

    </div>
  )
}

export default Department
