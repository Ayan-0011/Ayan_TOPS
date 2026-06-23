import React from 'react'
import { Link } from 'react-router-dom'

const Department = () => {
  return (
   <div>
  <section id="heading">
    <div className="container my-5">
      <div className="row d-flex justify-content-center text-center">
        <div className="col-lg-8">
          <div className="heading-title my-5">
            <h1>Departments</h1>
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
            <li className="current">Departments</li>
          </ol>
        </div>
      </div>
    </nav>
  </section>
  <section id="departments">
    <div className="container py-5">
      <div className="row g-4">
        {/* Cardiology */}
        <div className="col-md-6">
          <div className="card shadow rounded-4 border-0 h-100 department-card">
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <div className="icon-box me-3">
                  <i className="fas fa-heartbeat" />
                </div>
                <div>
                  <h5 className="fw-bold mb-1">Cardiology</h5>
                  <h6 className="text-uppercase text-muted small mb-0">Heart &amp; Vascular</h6>
                </div>
              </div>
              <p className="mb-3">
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                egestas.
                Vestibulum tortor quam, feugiat vitae.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <span className="badge rounded-pill text-bg-info">24/7 Emergency</span>
                <span className="badge rounded-pill text-bg-info">Advanced Diagnostics</span>
              </div>
            </div>
            <img src="images/cardiology-2.webp" className="department-img object-fit-cover rounded-bottom-4" alt="Cardiology" />
          </div>
        </div>
        {/* Neurology */}
        <div className="col-md-6">
          <div className="card shadow rounded-4 border-0 h-100 department-card">
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <div className="icon-box me-3">
                  <i className="fas fa-brain" />
                </div>
                <div>
                  <h5 className="fw-bold mb-1">Neurology</h5>
                  <h6 className="text-uppercase text-muted small mb-0">Brain &amp; Nervous System</h6>
                </div>
              </div>
              <p className="mb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <span className="badge rounded-pill text-bg-info text-white">MRI Available</span>
                <span className="badge rounded-pill text-bg-info text-white">Specialist Team</span>
              </div>
            </div>
            <img src="images/neurology-3.webp" className="department-img object-fit-cover rounded-bottom-4" alt="Neurology" />
          </div>
        </div>
        {/* Orthopedics */}
        <div className="col-md-6">
          <div className="card shadow rounded-4 border-0 h-100 department-card">
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <div className="icon-box me-3">
                  <i className="fas fa-bone" />
                </div>
                <div>
                  <h5 className="fw-bold mb-1">Orthopedics</h5>
                  <h6 className="text-uppercase text-muted small mb-0">Bones and Joints</h6>
                </div>
              </div>
              <p className="mb-3">
                LUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                ea commodo consequat duis aute.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <span className="badge rounded-pill text-bg-info">Sports Medicine</span>
                <span className="badge rounded-pill text-bg-info">Joint Replacement</span>
              </div>
            </div>
            <img src="images/orthopedics-4.webp" className="department-img object-fit-cover rounded-bottom-4" alt="Orthopedics" />
          </div>
        </div>
        {/* Pediatrics */}
        <div className="col-md-6">
          <div className="card shadow rounded-4 border-0 h-100 department-card">
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <div className="icon-box me-3">
                  <i className="fas fa-baby" />
                </div>
                <div>
                  <h5 className="fw-bold mb-1">Pediatrics</h5>
                  <h6 className="text-uppercase text-muted small mb-0">Children's Health</h6>
                </div>
              </div>
              <p className="mb-3">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum sed.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <span className="badge rounded-pill text-bg-info text-white">Child-Friendly</span>
                <span className="badge rounded-pill text-bg-info text-white">Vaccination Center</span>
              </div>
            </div>
            <img src="images/pediatrics-2.webp" className="department-img object-fit-cover rounded-bottom-4" alt="pediatrics" />
          </div>
        </div>
        {/* Laboratory */}
        <div className="col-md-6">
          <div className="card shadow rounded-4 border-0 h-100 department-card">
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <div className="icon-box me-3">
                  <i className="fas fa-microscope" />
                </div>
                <div>
                  <h5 className="fw-bold mb-1">Laboratory</h5>
                  <h6 className="text-uppercase text-muted small mb-0">Diagnostic Services</h6>
                </div>
              </div>
              <p className="mb-3">
                Nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida
                arcu ac tortor dignissim.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <span className="badge rounded-pill text-bg-info">Quick Results</span>
                <span className="badge rounded-pill text-bg-info">Digital Reports</span>
              </div>
            </div>
            <img src="images/laboratory-3.webp" className="department-img object-fit-cover rounded-bottom-4" alt="laboratory" />
          </div>
        </div>
        {/* Emergency */}
        <div className="col-md-6">
          <div className="card shadow rounded-4 border-0 h-100 department-card">
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <div className="icon-box me-3">
                  <i className="fas fa-heartbeat" />
                </div>
                <div>
                  <h5 className="fw-bold mb-1">Emergency</h5>
                  <h6 className="text-uppercase text-muted small mb-0">24/7 Critical Care</h6>
                </div>
              </div>
              <p className="mb-3">
                Convallis tellus id interdum velit laoreet id donec ultrices tincidunt arcu non sodales
                neque sodales ut etiam.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <span className="badge rounded-pill text-bg-info text-light">Round-the-Clock</span>
                <span className="badge rounded-pill text-bg-info text-light">Trauma Center</span>
              </div>
            </div>
            <img src="images/emergency-4.webp" className="department-img object-fit-cover rounded-bottom-4" alt="Emergency" />
          </div>
        </div>
      </div>
    </div>
  </section>
</div>


  )
}

export default Department
