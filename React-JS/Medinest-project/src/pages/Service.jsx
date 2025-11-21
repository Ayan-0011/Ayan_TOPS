import React from 'react'
import { Link } from 'react-router-dom'

const Service = () => {
  return (
    <div>
       <div>
  <div className="row">
    <div className="col-md-12 text-center pt-5 pb-5 mb-4">
      <h1>Services</h1>
      <p>Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a
        odio voluptatem.<br />
        Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>
    </div>
    <div className="container-fluid">
      <nav aria-label="breadcrumb" className="bg-body-secondary ps-5 pt-4 pb-3">
        <ol className="breadcrumb joint">
          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
          <li className="breadcrumb-item active" aria-current="page">Services</li>
        </ol>
      </nav>
    </div>
  </div>
  <div className="container">
    <div className="row mt-5">
      <div className="col-md-4 mt-3">
        <div className="card" id="service-card">
          <div className="col-md-12 symbol2">
            <i className="bi bi-heart-pulse-fill" />
            <span className="badge rounded-pill bg-primary float-end mt-3 me-4">Primary care</span>
          </div>
          <div className="container">
            <h3>General Consultation</h3>
            <p className="mt-2">Comprehensive health assessments and preventive care planning for all family
              members.</p>
            <span className="badge rounded-pill bg-secondary">Health Monitoring</span>
            <span className="badge rounded-pill bg-secondary">Wellness Programs</span>
            <span className="badge rounded-pill bg-secondary">Preventive Care</span>
            <div className="d-grid gap-2">
              <button className="btn btn-outline-primary mt-4 mb-4 rounded-5" type="button">Schedule
                Visit</button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 mt-3">
        <div className="card" id="service-card">
          <div className="col-md-12 symbol2">
            <i className="fa-solid fa-heart" />
            <span className="badge rounded-pill bg-primary float-end mt-3 me-4">Specialty</span>
          </div>
          <div className="container">
            <h3>Cardiology Services</h3>
            <p className="mt-2">Advanced heart care including diagnostics, treatment, and post-operative
              rehabilitation programs.</p>
            <span className="badge rounded-pill bg-secondary">Heart Surgery</span>
            <span className="badge rounded-pill bg-secondary">ECG Testing</span>
            <span className="badge rounded-pill bg-secondary">Cardiac Rehab</span>
            <div className="d-grid gap-2">
              <button className="btn btn-outline-primary mt-4 mb-4 rounded-5" type="button"> Book
                Appointment</button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 mt-3">
        <div className="card" id="service-card">
          <div className="col-md-12 symbol2">
            <i className="fa-solid fa-flask" />
            <span className="badge rounded-pill bg-primary float-end mt-3 me-4">Laboratory Testing</span>
          </div>
          <div className="container">
            <h3>Laboratory Testing</h3>
            <p className="mt-2">Complete range of diagnostic tests with quick turnaround times and accurate
              results</p>
            <span className="badge rounded-pill bg-secondary">Blood Work</span>
            <span className="badge rounded-pill bg-secondary">Pathology</span>
            <span className="badge rounded-pill bg-secondary">Same-Day Results</span>
            <div className="d-grid gap-2">
              <button className="btn btn-outline-primary mt-4 mb-4 rounded-5" type="button">Order
                Tests</button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 mt-3">
        <div className="card" id="service-card">
          <div className="col-md-12 symbol2">
            <i className="fa-solid fa-bus" />
            <span className="badge rounded-pill bg-success float-end mt-3 me-4">24/7 service</span>
            <span className="badge rounded-pill bg-primary float-end mt-3 me-4">Emergency</span>
          </div>
          <div className="container">
            <h3>Emergency Care</h3>
            <p className="mt-2">Round-the-clock emergency services with trauma center and critical care
              capabilities.</p>
            <span className="badge rounded-pill bg-secondary">Trauma Center</span>
            <span className="badge rounded-pill bg-secondary">Critical Care</span>
            <span className="badge rounded-pill bg-secondary">Emergency Surgery</span>
            <div className="d-grid gap-2">
              <button className="btn btn-danger mt-4 mb-4 rounded-5" type="button">Call Emergency</button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 mt-3">
        <div className="card" id="service-card">
          <div className="col-md-12 symbol2">
            <i className="fa-solid fa-person-circle-check" />
            <span className="badge rounded-pill bg-primary float-end mt-3 me-4">Maternal Health</span>
          </div>
          <div className="container">
            <h3>Women's Health</h3>
            <p className="mt-2">Comprehensive maternal care from prenatal checkups to delivery and postnatal
              support</p>
            <span className="badge rounded-pill bg-secondary">Prenatal Care</span>
            <span className="badge rounded-pill bg-secondary">Delivery Support</span>
            <span className="badge rounded-pill bg-secondary">Family Planning</span>
            <button className="btn btn-outline-primary mt-4 mb-4 w-100 rounded-5" type="button">Learn
              More</button>
          </div>
        </div>
      </div>
      <div className="col-md-4 mt-3">
        <div className="card" id="service-card">
          <div className="col-md-12 symbol2">
            <i className="fa-solid fa-syringe" />
            <span className="badge rounded-pill bg-primary float-end mt-3 me-4">Prevention</span>
          </div>
          <div className="container">
            <h3>Vaccination Services</h3>
            <p className="mt-2">Complete immunization programs for all ages including travel vaccines and
              seasonal shots.</p>
            <span className="badge rounded-pill bg-secondary">Travel Vaccines</span>
            <span className="badge rounded-pill bg-secondary">Flu Shots</span>
            <span className="badge rounded-pill bg-secondary">Child Immunizations</span>
            <button className="btn btn-outline-primary mt-4 mb-4 w-100 rounded-5" type="button">Schedule
              Shot</button>
          </div>
        </div>
      </div>
    </div>
    <div className="row border rounded-4 serv mt-4 text-center pt-3">
      <div className="col-md p-2">
        <p>Patients Served</p>
      </div>
      <div className="col-md p-2">
        <p>Medical Experts</p>
      </div>
      <div className="col-md p-2">
        <p>Specializations</p>
      </div>
      <div className="col-md p-2">
        <p>Hours Service</p>
      </div>
    </div>
    <div className="row mt-3 rounded-4 text-white" style={{backgroundColor: 'rgb(35, 189, 189)'}}>
      <div className="col-md-6 p-4">
        <h1>Need Medical Attention?</h1>
        <p>Book your appointment with our qualified healthcare professionals and get the care you deserve.</p>
      </div>
      <div className="offset-md-3 col-md-3 p-4 mt-5">
        <button type="button" className="btn btn-primary p-3 rounded-5">Book Appointment</button>
        <button type="button" className="btn btn-outline-dark p-3 rounded-5 ">Call now</button>
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
  </div></div>

    </div>
  )
}

export default Service
