import React from 'react'
import { Link } from 'react-router-dom'

const Doctor = () => {
  return (
   <div>
   <section id="heading">
  <div className="container my-5">
    <div className="row d-flex justify-content-center text-center">
      <div className="col-lg-8">
        <div className="heading-title my-5">
          <h1>Doctors</h1>
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
          <li className="current">Doctors</li>
        </ol>
      </div>
    </div>
  </n>
</section>



  <section>
    <div className="container my-5">
      <div className="search-box">
        <form>
          <div className="row g-3 align-items-end">
            <div className="col-md-3">
              <label className="fw-semibold fs-6 mb-2">Search Doctors</label>
              <div className="input-icon">
                <i className="bi bi-search" />
                <input type="text" className="form-control" placeholder="Search by name..." />
              </div>
            </div>
            <div className="col-md-3">
              <label className="fw-semibold fs-6 mb-2">Departments</label>
              <div className="input-icon">
                <i className="bi bi-plus-lg" />
                <select className="form-control">
                  <option hidden>All Departments</option>
                  <option>Cardiology</option>
                  <option>Pediatrics</option>
                  <option>Dermatology</option>
                  <option>Orthopedics</option>
                </select>
              </div>
            </div>
            <div className="col-md-3">
              <label className="fw-semibold fs-6 mb-2">Location</label>
              <div className="input-icon">
                <i className="bi bi-geo-alt" />
                <select className="form-control">
                  <option hidden>All locations</option>
                  <option>Downtown Clinic</option>
                  <option>Westside Center</option>
                  <option>Riverside Center</option>
                </select>
              </div>
            </div>
            <div className="col-md-3 col-sm-12 d-flex justify-content-center">
              <button type="submit" className="btn-search1 w-100">
                Apply Filters
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
  <section>
    <div className="container">
      <h2 className="text-center mb-4">Our Doctors</h2>
      {/* Filter Buttons */}
      <div className="row gap-5 mb-4">
        <div className="col-lg-12 col-md-12 col-sm-6">
          <button className="btn filter-btn active" data-filter="all">All</button>
          <button className="btn filter-btn" data-filter="pediatrics">Pediatrics</button>
          <button className="btn filter-btn" data-filter="dermatology">Dermatology</button>
          <button className="btn filter-btn" data-filter="orthopedics">Orthopedics</button>
          <button className="btn filter-btn" data-filter="cardiology">Cardiology</button>
        </div>
      </div>
      {/* Doctors Grid */}
      <div className="row g-4">
        {/* Cardiology Doctor */}
        <div className="col-lg-3 col-md-6 doctor-item cardiology">
          <div className="card doctor-card2 h-100">
            <img src="images/staff-3.webp" className="card-img-top" alt="Doctor 1" />
            <div className="card-body">
              <h5 className="card-title">Dr. Amelia Brooks</h5>
              <p className="text-muted">Cardiologist • MD, FACC</p>
              <p>Nostrud tempor magna minim excepteur, id cillum laboris aute proident.</p>
              <span className="badge bg-info text-dark">Cardiology</span>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <a href="#" className="btn btn-primary btn-sm">Book Appointment</a>
              <a href="#" className="btn btn-outline-secondary btn-sm">View Profile</a>
            </div>
          </div>
        </div>
        {/* Pediatrics Doctor */}
        <div className="col-lg-3 col-md-6 doctor-item pediatrics">
          <div className="card doctor-card2 h-100">
            <img src="images/staff-7.webp" className="card-img-top" alt="Doctor 2" />
            <div className="card-body">
              <h5 className="card-title">Dr. John Smith</h5>
              <p className="text-muted">Pediatrician • MD</p>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
              <span className="badge bg-success">Pediatrics</span>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <a href="#" className="btn btn-primary btn-sm">Book Appointment</a>
              <a href="#" className="btn btn-outline-secondary btn-sm">View Profile</a>
            </div>
          </div>
        </div>
        {/* Dermatology Doctor */}
        <div className="col-lg-3 col-md-6 doctor-item dermatology">
          <div className="card doctor-card2 h-100">
            <img src="images/staff-12.webp" className="card-img-top" alt="Doctor 3" />
            <div className="card-body">
              <h5 className="card-title">Dr. Sarah Lee</h5>
              <p className="text-muted">Dermatologist • MD</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <span className="badge bg-warning text-dark">Dermatology</span>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <a href="#" className="btn btn-primary btn-sm">Book Appointment</a>
              <a href="#" className="btn btn-outline-secondary btn-sm">View Profile</a>
            </div>
          </div>
        </div>
        {/* Orthopedics Doctor */}
        <div className="col-lg-3 col-md-6 doctor-item orthopedics">
          <div className="card doctor-card2 h-100">
            <img src="images/staff-5.webp" className="card-img-top" alt="Doctor 4" />
            <div className="card-body">
              <h5 className="card-title">Dr. Kevin White</h5>
              <p className="text-muted">Orthopedic Surgeon • MD</p>
              <p>Curabitur blandit tempus porttitor.</p>
              <span className="badge bg-danger">Orthopedics</span>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <a href="#" className="btn btn-primary btn-sm">Book Appointment</a>
              <a href="#" className="btn btn-outline-secondary btn-sm">View Profile</a>
            </div>
          </div>
        </div>
        {/* Cardiology Doctor */}
        <div className="col-lg-3 col-md-6 doctor-item cardiology">
          <div className="card doctor-card2 h-100">
            <img src="images/staff-6.webp" className="card-img-top" alt="Doctor 1" />
            <div className="card-body">
              <h5 className="card-title">Dr. Amelia Brooks</h5>
              <p className="text-muted">Cardiologist • MD, FACC</p>
              <p>Nostrud tempor magna minim excepteur, id cillum laboris aute proident.</p>
              <span className="badge bg-info text-dark">Cardiology</span>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <a href="#" className="btn btn-primary btn-sm">Book Appointment</a>
              <a href="#" className="btn btn-outline-secondary btn-sm">View Profile</a>
            </div>
          </div>
        </div>
        {/* Pediatrics Doctor */}
        <div className="col-lg-3 col-md-6 doctor-item pediatrics">
          <div className="card doctor-card2 h-100">
            <img src="images/staff-10.webp" className="card-img-top" alt="Doctor 2" />
            <div className="card-body">
              <h5 className="card-title">Dr. John Smith</h5>
              <p className="text-muted">Pediatrician • MD</p>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
              <span className="badge bg-success">Orthopedics</span>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <a href="#" className="btn btn-primary btn-sm">Book Appointment</a>
              <a href="#" className="btn btn-outline-secondary btn-sm">View Profile</a>
            </div>
          </div>
        </div>
        {/* Dermatology Doctor */}
        <div className="col-lg-3 col-md-6 doctor-item dermatology">
          <div className="card doctor-card2 h-100">
            <img src="images/staff-2.webp" className="card-img-top" alt="Doctor 3" />
            <div className="card-body">
              <h5 className="card-title">Dr. Sarah Lee</h5>
              <p className="text-muted">Dermatologist • MD</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <span className="badge bg-warning text-dark">Orthopedics</span>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <a href="#" className="btn btn-primary btn-sm">Book Appointment</a>
              <a href="#" className="btn btn-outline-secondary btn-sm">View Profile</a>
            </div>
          </div>
        </div>
        {/* Orthopedics Doctor */}
        <div className="col-lg-3 col-md-6 doctor-item orthopedics">
          <div className="card doctor-card2 h-100">
            <img src="images/staff-9.webp" className="card-img-top" alt="Doctor 4" />
            <div className="card-body">
              <h5 className="card-title">Dr. Kevin White</h5>
              <p className="text-muted">Orthopedic Surgeon • MD</p>
              <p>Curabitur blandit tempus porttitor.</p>
              <span className="badge bg-danger">Pediatrics</span>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <a href="#" className="btn btn-primary btn-sm">Book Appointment</a>
              <a href="#" className="btn btn-outline-secondary btn-sm">View Profile</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Filter Script */}
  </section>
  <section className="my-5 bg-light">
    <div className="container py-3">
      <div className="row g-4">
        <div className="col-md-5">
          <div>
            <img src="images/staff-12.webp" alt className="img-fluid rounded-4" />
          </div>
        </div>
        <div className="col-md-7">
          <div className="row mt-5">
            <div className="col-lg-12 col-md-12 col-sm-6 upper-badges gap-3">
              <small className="badge rounded-pill p-2 first">Chief Surgeonp</small>
              <small className="badge rounded-pill p-2 second">12+ Years Experience</small>
              <small className="badge rounded-pill p-2 third">Board Certified</small>
            </div>
          </div>
          <div className="row">
            <h3 className="mt-5">Dr. Natalia Rivera</h3>
            <p className="text-muted lh-1">General Surgery | MD, FACS</p>
            <p>Commodo incididunt aliqua minim, eiusmod in laboris nulla. Amet do occaecat quis, excepteur
              in magna id dolore incididunt. Tempor in aute ullamco, irure officia aliqua nostrud.</p>
          </div>
          <div className="row">
            <ul className="list-unstyled highlights mb-4">
              <li className="middle-li"><i className="bi bi-mortarboard me-3" />Residency: St. Mary's Medical
                Center</li>
              <li className="middle-li"><i className="bi bi-hospital me-3" />Fellowship: Advanced Laparoscopy
              </li>
              <li className="middle-li"><i className="bi bi-award me-3" />Publications: 14 peer-reviewed
                articles</li>
            </ul>
          </div>
          <div className="row">
            <div className="lower-buttons d-flex flex-wrap gap-3">
              <a href className="btn btn-appointment"><i className="bi bi-calendar2-check me-1" />Book
                Appointment</a>
              <a href className="btn soft"><i className="bi bi-file-earmark-text me-1" />View CV</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="my-5">
    <div className="container">
      <div className="row g-4">
        <div className="col-6 col-md-4 col-lg-2">
          <div className="minimal-card text-center">
            <img src="images/staff-2.webp" alt className="img-fluid avatar mb-2" />
            <div className="info lh-1">
              <h6>Dr. Oliver Hayes</h6>
              <small> Pediatrics </small>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <div className="minimal-card text-center">
            <img src="images/staff-7.webp" alt className="img-fluid avatar mb-2" />
            <div className="info lh-1">
              <h6>Dr. Noah Turner</h6>
              <small> Pediatrics </small>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <div className="minimal-card text-center">
            <img src="images/staff-6.webp" alt className="img-fluid avatar mb-2" />
            <div className="info lh-1">
              <h6>Dr. Liam Carter</h6>
              <small> Orthopedics </small>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <div className="minimal-card text-center">
            <img src="images/staff-3.webp" alt className="img-fluid avatar mb-2" />
            <div className="info lh-1">
              <h6>Dr. Amelia Brooks</h6>
              <small> Cardiology </small>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <div className="minimal-card text-center">
            <img src="images/staff-9.webp" alt className="img-fluid avatar mb-2" />
            <div className="info lh-1">
              <h6>Dr. Harper Lane</h6>
              <small> Dermatology </small>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <div className="minimal-card text-center">
            <img src="images/staff-11.webp" alt className="img-fluid avatar mb-2" />
            <div className="info lh-1">
              <h6>Dr. Lucas Grant</h6>
              <small> Pulmonology </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="my-5 bg-light">
    <div className="container py-4">
      <div className="row g-4">
        <div className="col-lg-4">
          <div className="profile-card2">
            <img src="images/staff-4.webp" alt className="rounded-4 img-fluid object-fit-cover" />
            <div className="pt-3">
              <h3 className="mb-1">Dr. Henry James</h3>
              <p className="mb-2 text-muted">Oncology | MBBS, MD</p>
              <div className="d-flex gap-2">
                <span className="badge p-2 rounded-pill">Board Certified</span>
                <span className="badge p-2 rounded-pill">8 Years</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8 mt-5">
          <div className="profile-card-lower">
            <ul className="mb-3 nb list-unstyled d-flex gap-3 px-4 py-3">
              <li><a href className="text-decoration-none badge  px-4 py-3 rounded-pill">Bio</a></li>
              <li><a href className="text-decoration-none badge p-3 rounded-pill" id="lower2">Schedule
                </a>
              </li>
              <li><a href className="text-decoration-none badge p-3 rounded-pill" id="lower2">Reviews</a>
              </li>
            </ul>
            <div className="px-4 lowertext-profilecard-section">
              <p>Fugiat proident aliqua laboris, excepteur sunt ad pariatur occaecat. Veniam minim eu
                laboris,
                magna irure velit anim excepteur exercitation.</p>
              <ul className="list-unstyled">
                <li><i className="bi bi-check2-circle me-2" /> Special interest in immunotherapy</li>
                <li><i className="bi bi-check2-circle me-2" /> Member of ASCO</li>
                <li><i className="bi bi-check2-circle me-2" /> Community outreach programs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>


  )
}

export default Doctor
