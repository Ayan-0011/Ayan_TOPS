import React from 'react'
import { Link } from 'react-router-dom'

const Service = () => {
  return (
    <div>
  <section id="heading">
    <div className="container my-5">
      <div className="row d-flex justify-content-center text-center">
        <div className="col-lg-8">
          <div className="heading-title my-5">
            <h1>Services</h1>
            <p className="text-muted">Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio
              sint voluptas
              consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione
              sint. Sit quaerat ipsum dolorem.</p>
          </div>
        </div>
      </div>
    </div>
    <n className="breadcrumbs">
      <div className="container-fluid  bg-secondary-subtle py-3">
        <div className="container">
          <ol className="list-unstyled gap-3 d-flex mb-0">
           <li><Link to='/' className="text-decoration-none text-primary">Home</Link></li>
            <li className="current">Services</li>
          </ol>
        </div>
      </div>
    </n>
  </section>
  <div className="container py-5">
    <div className="row g-4 align-items-stretch text-center">
      {/* Card 1 */}
      <div className="col-md-4">
        <div className="p-4 card-service h-100">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="icon-circle3">
              <i className="bi bi-heart-pulse" />
            </div>
            <span className="tag">PRIMARY CARE</span>
          </div>
          <div className="card-body text-start mt-3">
            <h5 className="fw-bold">General Consultation</h5>
            <p className="text-muted">Comprehensive health assessments and preventive care planning for all
              family members.</p>
            <div className="badge-group">
              <span className="badge bg-secondary-subtle text-dark">Health Monitor</span>
              <span className="badge bg-secondary-subtle text-dark">Wellness Program</span>
              <span className="badge bg-secondary-subtle text-dark">Preventive</span>
            </div>
          </div>
          <button className="btn btn-light btn-custom2 mt-auto">Schedule Visit →</button>
        </div>
      </div>
      {/* Card 2 */}
      <div className="col-md-4">
        <div className="p-4 card-service h-100 active">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="icon-circle3">
              <i className="bi bi-heart-fill" />
            </div>
            <span className="tag">Most Popular · SPECIALTY</span>
          </div>
          <div className="card-body text-start mt-3">
            <h5 className="fw-bold">Cardiology Services</h5>
            <p className="text-muted">Advanced heart care including diagnostics, treatment, and post-operative
              rehabilitation programs.</p>
            <div className="badge-group">
              <span className="badge bg-secondary-subtle text-dark">Heart Surgery</span>
              <span className="badge bg-secondary-subtle text-dark">ECG Testing</span>
              <span className="badge bg-secondary-subtle text-dark">Cardiac Rehab</span>
            </div>
          </div>
          <button className="btn btn-light btn-custom2 mt-auto">Book Appointment →</button>
        </div>
      </div>
      {/* Card 3 */}
      <div className="col-md-4">
        <div className="p-4 card-service h-100">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="icon-circle3">
              <i className="fas fa-vials" />
            </div>
            <span className="tag">DIAGNOSTICS</span>
          </div>
          <div className="card-body text-start mt-3">
            <h5 className="fw-bold">Laboratory Testing</h5>
            <p className="text-muted">Complete range of diagnostic tests with quick turnaround times and
              accurate results.</p>
            <div className="badge-group">
              <span className="badge bg-secondary-subtle text-dark">Blood Work</span>
              <span className="badge bg-secondary-subtle text-dark">Pathology</span>
              <span className="badge bg-secondary-subtle text-dark">Same-Day Results</span>
            </div>
          </div>
          <button className="btn btn-light btn-custom2 mt-auto">Order Tests →</button>
        </div>
      </div>
      {/* Card 4 */}
      <div className="col-md-4">
        <div className="p-4 card-service h-100">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="icon-circle3 bg-danger">
              <i className="bi bi-truck" />
            </div>
            <div>
              <span className="tag">EMERGENCY</span>
              <span className="badge bg-success">24/7 Available</span>
            </div>
          </div>
          <div className="card-body">
            <h5 className="fw-bold">Emergency Care</h5>
            <p className="text-muted">Round-the-clock emergency services with trauma center and critical care
              capabilities.</p>
            <div className="badge-group">
              <span className="badge bg-light text-dark">Trauma Center</span>
              <span className="badge bg-light text-dark">Critical Care</span>
              <span className="badge bg-light text-dark">Emergency Surgery</span>
            </div>
          </div>
          <button className="btn btn-danger btn-custom2 mt-auto">Call Emergency <i className="bi bi-telephone-fill" /></button>
        </div>
      </div>
      {/* Card 5*/}
      <div className="col-md-4">
        <div className="p-4 card-service h-100">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="icon-circle3">
              <i className="bi bi-person-heart" />
            </div>
            <span className="tag">MATERNAL HEALTH</span>
          </div>
          <div className="card-body">
            <h5 className="fw-bold">Women's Health</h5>
            <p className="text-muted">Comprehensive maternal care from prenatal checkups to delivery and
              postnatal support.</p>
            <div className="badge-group">
              <span className="badge bg-light text-dark">Prenatal Care</span>
              <span className="badge bg-light text-dark">Delivery Support</span>
              <span className="badge bg-light text-dark">Family Planning</span>
            </div>
          </div>
          <button className="btn btn-info text-white btn-custom2 mt-auto">Learn More →</button>
        </div>
      </div>
      {/* Card 6 */}
      <div className="col-md-4">
        <div className="p-4 card-service h-100">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="icon-circle3">
              <i className="fas fa-syringe" />
            </div>
            <span className="tag">PREVENTION</span>
          </div>
          <div className="card-body">
            <h5 className="fw-bold">Vaccination Services</h5>
            <p className="text-muted">Complete immunization programs for all ages including travel vaccines and
              seasonal shots.</p>
            <div className="badge-group">
              <span className="badge bg-light text-dark">Travel Vaccines</span>
              <span className="badge bg-light text-dark">Flu Shots</span>
              <span className="badge bg-light text-dark">Child Immunizations</span>
            </div>
          </div>
          <button className="btn btn-light btn-custom2 mt-auto">Schedule Shot →</button>
        </div>
      </div>
    </div>
  </div>
  <div className="container my-5">
    <div className="assistance-box">
      <div className="row align-items-center">
        <div className="col-md-8 d-flex align-items-center mb-3 mb-md-0">
          <div>
            <h5 className="mb-1">Need Immediate Assistance?</h5>
            <p className="mb-0">Our medical team is available around the clock for urgent consultations and
              emergency support.</p>
          </div>
        </div>
        <div className="col-md-4 d-flex justify-content-md-end align-items-center">
          <a href="tel:5551234567" className="btn btn-light fw-semibold me-3">
            <i className="bi bi-telephone-fill me-2" /> (555) 123-4567
          </a>
          <a href="#" className="text-dark fw-semibold text-decoration-none btn btn-outline-light">Get
            Directions</a>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Service
