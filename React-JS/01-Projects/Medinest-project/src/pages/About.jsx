import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
   <div>
  <section id="heading">
    <div className="container my-5">
      <div className="row d-flex justify-content-center text-center">
        <div className="col-lg-8">
          <div className="heading-title my-5">
            <h1>About</h1>
            <p className="text-muted">Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio
              sint voluptas
              consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione
              sint. Sit quaerat ipsum dolorem.</p>
          </div>
        </div>
      </div>
    </div>
    <nav className="breadcrumbs">
      <div className="container-fluid  bg-secondary-subtle py-3">
        <div className="container">
          <ol className="list-unstyled gap-3 d-flex mb-0">
            <li><Link to='/' className="text-decoration-none text-primary">Home</Link></li>
            <li className="current">About</li>
          </ol>
        </div>
      </div>
    </nav>
  </section>
  <section id="about" className="py-5">
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 text-center my-5">
          <h1 className="display-5 fw-semibold mb-4 custom-text">Excellence in Healthcare Since 1985</h1>
          <p className="text-muted fs-5">We are committed to providing world-class medical care through</p>
          <p className="text-muted fs-5">innovation, compassion, and unwavering dedication to our</p>
          <p className="text-muted fs-5">patients' wellbeing and recovery.</p>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row g-5 align-items-center">
        <div className="col-lg-6">
          <div className="row g-3">
            <div className="col-lg-12 col-md-12">
              <img src="images/facilities-3.webp" alt="Hospital Ward" className="img-large" />
            </div>
            <div className="col-lg-6 col-md-6">
              <img src="images/staff-12.webp" alt="Doctor" className="img-small" />
            </div>
            <div className="col-lg-6 col-md-6">
              <img src="images/consultation-4.webp" alt="Consultation" className="img-fluid img-small" />
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <h2 className="mb-3">Trusted Healthcare Provider</h2>
          <p className="mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </p>
          <div className="row mb-4 align-items-start">
            <div className="col-lg-3 fw-bold stat-number">22000</div>
            <div className="col-lg-9">
              <div className="fw-bold">Successful Treatments</div>
              <div className="stat-sub">Completed with excellent patient outcomes</div>
            </div>
          </div>
          <div className="row mb-4 align-items-start">
            <div className="col-lg-3 fw-bold stat-number">95%</div>
            <div className="col-lg-9">
              <div className="fw-bold">Patient Satisfaction</div>
              <div className="stat-sub">Based on comprehensive feedback surveys</div>
            </div>
          </div>
          <div className="row mb-4 align-items-start">
            <div className="col-lg-3 fw-bold stat-number">85</div>
            <div className="col-lg-9">
              <div className="fw-bold">Medical Professionals</div>
              <div className="stat-sub">Specialists across various departments</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="py-5">
    <div className="container">
      <div className="row g-4 text-center">
        <div className="col-md-4">
          <div className="card border-0 h-100">
            <div className="card-body">
              <div className="icon-circle">
                <i className="bi bi-heart" />
              </div>
              <h5 className="card-title fw-semibold">Our Mission</h5>
              <p className="card-text">
                To provide comprehensive, patient-centered healthcare that combines medical excellence
                with genuine compassion, ensuring every individual receives personalized care tailored
                to their unique needs.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-0 h-100">
            <div className="card-body">
              <div className="icon-circle">
                <i className="bi bi-eye" />
              </div>
              <h5 className="card-title fw-semibold">Our Vision</h5>
              <p className="card-text">
                To be the leading healthcare provider in our region, recognized for innovative
                treatments, exceptional outcomes, and our unwavering commitment to improving lives in
                our community.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-0 h-100">
            <div className="card-body">
              <div className="icon-circle">
                <i className="bi bi-star" />
              </div>
              <h5 className="card-title fw-semibold">Our Promise</h5>
              <p className="card-text">
                Every patient will receive the highest quality care in a comfortable, supportive
                environment where their health, dignity, and well-being are our top priorities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="py-5">
    <div className="container text-center">
      <h2 className="mb-3">Areas of Excellence</h2>
      <p className="mb-5 text-muted">
        Our specialized departments work together to provide comprehensive care <br />
        across multiple medical disciplines
      </p>
      <div className="row g-4">
        <div className="col-6 col-md-4 col-lg-2">
          <div className="card excellence-card p-3">
            <div className="card-body">
              <i className="bi bi-heart-pulse service-icon" />
              <h6 className="fw-semibold">Cardiology</h6>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <div className="card excellence-card p-3">
            <div className="card-body">
              <i className="fas fa-brain service-icon" />
              <h6 className="fw-semibold">Neurology</h6>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <div className="card excellence-card p-3">
            <div className="card-body">
              <i className="bi bi-people-fill service-icon" />
              <h6 className="fw-semibold">Pediatrics</h6>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <div className="card excellence-card p-3">
            <div className="card-body">
              <i className="bi bi-scissors service-icon" />
              <h6 className="fw-semibold">Surgery</h6>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <div className="card excellence-card p-3">
            <div className="card-body">
              <i className="bi bi-journal-medical service-icon" />
              <h6 className="fw-semibold">Oncology</h6>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <div className="card excellence-card p-3">
            <div className="card-body">
              <i className="bi bi-clipboard-pulse service-icon" />
              <h6 className="fw-semibold">Emergency</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="py-5">
    <div className="container text-center">
      <h2 className="mb-3">Recognized Excellence</h2>
      <p className="mb-5 text-muted">
        Our commitment to quality is validated by prestigious healthcare organizations
      </p>
      <div className="row g-4 justify-content-center">
        <div className="col-6 col-md-4 col-lg-2">
          <div className="partner-card">
            <img src="images/clients-6.webp" alt="TomTom" className="img-fluid mx-auto d-block" />
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <div className="partner-card">
            <img src="images/clients-7.webp" alt="Viatris" className="img-fluid mx-auto d-block" />
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <div className="partner-card">
            <img src="images/clients-8.webp" alt="Zoetis" className="img-fluid mx-auto d-block" />
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <div className="partner-card">
            <img src="images/clients-9.webp" alt="Rohto" className="img-fluid mx-auto d-block" />
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <div className="partner-card">
            <img src="images/clients-10.webp" alt="DaVita" className="img-fluid mx-auto d-block" />
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <div className="partner-card">
            <img src="images/clients-11.webp" alt="Chewy" className="img-fluid mx-auto d-block" />
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

  )
}

export default About
