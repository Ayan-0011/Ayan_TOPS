import React from 'react'
import { Link } from 'react-router-dom'

const Doctor = () => {
  return (
    <div>
      <div>
  <div className="row">
    <div className="col-md-12 text-center pt-5 pb-5 mb-4">
      <h1>Doctors</h1>
      <p>Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a
        odio voluptatem.<br /> Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum
        dolorem.</p>
    </div>
    <div className="container-fluid">
      <nav aria-label="breadcrumb" className="bg-body-secondary ps-5 pt-4 pb-3">
        <ol className="breadcrumb joint">
          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
          <li className="breadcrumb-item active" aria-current="page">Doctors</li>
        </ol>
      </nav>
    </div>
  </div>
  <div className="container">
    <div className="row mt-4">
      <div className="col-12" id="serch">
        <div className="row pt-3">
          <div className="col-md-4 p-2 ps-3">
            <p>Search Doctors</p>
            <div className="form-floating mb-3">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
              <label htmlFor="floatingInput">Types a name or keybord</label>
            </div>
          </div>
          <div className="col-md-3 p-2">
            <p>Department</p>
            <div className="form-floating">
              <select className="form-select" id="floatingSelect">
                <option selected>All Department</option>
                <option value={1}>Cardiology</option>
                <option value={2}>Neurological</option>
                <option value={3}>Orthopedic</option>
                <option value={4}>Pediatric</option>
                <option value={5}>Dermatological</option>
                <option value={6}>Oncological</option>
              </select>
            </div>
          </div>
          <div className="col-md-3 p-2">
            <p>Location</p>
            <div className="form-floating">
              <select className="form-select" id="floatingSelect">
                <option selected>All Location</option>
                <option value={1}>All Location</option>
                <option value={2}>Downtoen medical center</option>
                <option value={3}>North side clinic</option>
                <option value={4}>Wesr End hospital</option>
              </select>
            </div>
          </div>
          <div className="col-md-2 pt-3 mt-5 col-12 mb-3">
            <button type="button" className="btn btn-info w-100">Apply filter</button>
          </div>
        </div>
      </div>
      <div className="col-12 mt-3" id="bd">
        <span className="badge rounded-pill bg-primary">All</span>
        <span className="badge rounded-pill bg-light text-dark">Cardiology</span>
        <span className="badge rounded-pill bg-light text-dark">Pediatric</span>
        <span className="badge rounded-pill bg-light text-dark">Dermatorogy</span>
        <span className="badge rounded-pill bg-light text-dark">Orthopedic</span>
      </div>
      {/*-dr profile*/}
      <div className="row mt-3">
        <div className="col-md-3 col-sm-6 mb-3">
          <div className="card" id="dr-card">
            <img src="img/staff-3.webp" className="card-img-top" height="200px" />
            <span className="badge bg-info" style={{position: 'absolute', top: 10, left: 10}}>Cardiology</span><br />
            <div className="card-body">
              <h5 className="card-title">Dr. Amelia Brooks</h5>
              <h5 className="card-title" style={{fontWeight: 300, fontSize: 15}}>Cardiologist • MD, FACC
              </h5>
              <p className="card-text">Nostrud tempor magna minim excepteur, id cillum laboris aute proident.
              </p>
              <span className="badge bg-secondary mb-3">Cardiology</span><br />
              <button type="button" className="btn btn-primary btn-sm me-2">Book Appointment</button>
              <button type="button" className="btn btn-outline-info btn-sm">View Profile</button>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 mb-2">
          <div className="card" id="dr-card">
            <img src="img/staff-7.webp" className="card-img-top" height="200px" />
            <div className="card-body">
              <h5 className="card-title">Dr. Noah Turner</h5>
              <h5 className="card-title" style={{fontWeight: 300, fontSize: 15}}>Pediatrician • DO</h5>
              <p className="card-text">Quis irure pariatur sed eiusmod, elit laboris consequat cupidatat.</p>
              <span className="badge bg-secondary mb-3">Pediatrics</span><br />
              <button type="button" className="btn btn-primary btn-sm me-2">Book Appointment</button>
              <button type="button" className="btn btn-outline-info btn-sm">View Profile</button>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 mb-2">
          <div className="card" id="dr-card">
            <img src="img/staff-12.webp" className="card-img-top" height="200px" />
            <span className="badge bg-info" style={{position: 'absolute', top: 10, left: 10}}>New</span><br />
            <div className="card-body">
              <h5 className="card-title">Dr. Sofia Bennett</h5>
              <h5 className="card-title" style={{fontWeight: 300, fontSize: 15}}>Dermatologist • MBBS, MD
              </h5>
              <p className="card-text">Dolor commodo laboris lorem ad, amet consequat mollit deserunt.</p>
              <span className="badge bg-secondary mb-3">Dermatology</span><br />
              <button type="button" className="btn btn-primary btn-sm me-2">Book Appointment</button>
              <button type="button" className="btn btn-outline-info btn-sm">View Profile</button>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 mb-2">
          <div className="card" id="dr-card">
            <img src="img/staff-5.webp" className="card-img-top" height="200px" />
            <div className="card-body">
              <h5 className="card-title">Dr. Ethan Cole</h5>
              <h5 className="card-title" style={{fontWeight: 300, fontSize: 15}}>Orthopedic Surgeon • MS,
                FRCS</h5>
              <p className="card-text">Velit laborum minim laboris, eiusmod elit irure in exercitation.</p>
              <span className="badge bg-secondary mb-3">Orthopedics</span><br />
              <button type="button" className="btn btn-primary btn-sm me-2">Book Appointment</button>
              <button type="button" className="btn btn-outline-info btn-sm">View Profile</button>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 mb-2">
          <div className="card" id="dr-card">
            <img src="img/staff-6.webp" className="card-img-top" height="200px" />
            <div className="card-body">
              <h5 className="card-title">Dr. Liam Carter</h5>
              <h5 className="card-title" style={{fontWeight: 300, fontSize: 15}}>Sports Medicine • MD</h5>
              <p className="card-text">Deserunt pariatur eiusmod duis, officia aute laboris consectetur.</p>
              <span className="badge bg-secondary mb-3">Orthopedics</span><br />
              <button type="button" className="btn btn-primary btn-sm me-2">Book Appointment</button>
              <button type="button" className="btn btn-outline-info btn-sm">View Profile</button>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 mb-2">
          <div className="card" id="dr-card">
            <img src="img/staff-10.webp" className="card-img-top" height="200px" />
            <div className="card-body">
              <h5 className="card-title">Dr. Maya Patel</h5>
              <h5 className="card-title" style={{fontWeight: 300, fontSize: 15}}>Interventional
                Cardiologist • MD</h5>
              <p className="card-text">Cupidatat fugiat sint enim laboris, sed do ut aliquip dolor.</p>
              <span className="badge bg-secondary mb-3">Cardiology</span><br />
              <button type="button" className="btn btn-primary btn-sm me-2">Book Appointment</button>
              <button type="button" className="btn btn-outline-info btn-sm">View Profile</button>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 mb-2">
          <div className="card" id="dr-card">
            <img src="img/staff-2.webp" className="card-img-top" height="200px" />
            <div className="card-body">
              <h5 className="card-title">Dr. Oliver Hayes</h5>
              <h5 className="card-title" style={{fontWeight: 300, fontSize: 15}}>Pediatric Specialist • MD
              </h5>
              <p className="card-text">Exercitation id ea nisi fugiat, ullamco veniam cillum nostrud.</p>
              <span className="badge bg-secondary mb-3">Pediatrics</span><br />
              <button type="button" className="btn btn-primary btn-sm me-2">Book Appointment</button>
              <button type="button" className="btn btn-outline-info btn-sm">View Profile</button>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 mb-2">
          <div className="card" id="dr-card">
            <img src="img/staff-9.webp" className="card-img-top" height="200px" />
            <div className="card-body">
              <h5 className="card-title">Dr. Harper Lane</h5>
              <h5 className="card-title" style={{fontWeight: 300, fontSize: 15}}>Cosmetic Dermatologist •
                MD</h5>
              <p className="card-text">Aliquip laboris anim minim, irure commodo qui occaecat velit.</p>
              <span className="badge bg-secondary mb-3">Dermatology</span><br />
              <button type="button" className="btn btn-primary btn-sm me-2">Book Appointment</button>
              <button type="button" className="btn btn-outline-info btn-sm">View Profile</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row mt-5 mb-3">
      <div className="col-md-5">
        <img src="img/staff-12.webp" width="95%" className="rounded-4" />
      </div>
      <div className="col-md-7 mt-5">
        <span className="badge bg-secondary">Chief Surgeon</span>
        <span className="badge bg-light" style={{color: 'rgb(24, 194, 216)'}}>12+ Years Experience</span>
        <span className="badge bg-light" style={{color: 'rgb(24, 194, 216)'}}>Board Certified</span>
        <h4 className="mt-3">Dr. Natalia Rivera</h4>
        <p style={{fontSize: 15, fontWeight: 300}}>General Surgery • MD, FACS</p>
        <p className="mb-4">Commodo incididunt aliqua minim, eiusmod in laboris nulla. Amet do occaecat quis,
          excepteur in magna id dolore incididunt. Tempor in aute ullamco, irure officia aliqua nostrud.</p>
        <p><i className="fa-solid fa-graduation-cap text-info" /> Residency: St. Mary’s Medical Center</p>
        <p><i className="fa-solid fa-school text-info" /> Fellowship: Advanced Laparoscopy</p>
        <p><i className="fa-solid fa-award text-info" /> Publications: 14 peer-reviewed articles</p>
        <button type="button" className="btn btn-info me-3">Book Appointment</button>
        <button type="button" className="btn btn-outline-info">View CV</button>
      </div>
    </div>
    <div className="row g-2 mt-3 mb-3">
      <div className="col-md-2 col-sm-6">
        <div className="card" id="dr-profile">
          <img src="img/staff-2.webp" className="rounded-pill m-2" width="35%" />
          <span>Dr. Oliver Hayes</span>
          <p style={{fontWeight: 300}}>Pediatrics</p>
        </div>
      </div>
      <div className="col-md-2 col-sm-6">
        <div className="card" id="dr-profile">
          <img src="img/staff-7.webp" className="rounded-pill m-2" width="35%" />
          <span>Dr. Noah Turner</span>
          <p style={{fontWeight: 300}}>Pediatrics</p>
        </div>
      </div>
      <div className="col-md-2 col-sm-6">
        <div className="card" id="dr-profile">
          <img src="img/staff-6.webp" className="rounded-pill m-2" width="35%" />
          <span>Dr. Liam Carter</span>
          <p style={{fontWeight: 300}}>Orthopedic</p>
        </div>
      </div>
      <div className="col-md-2 col-sm-6">
        <div className="card" id="dr-profile">
          <img src="img/staff-3.webp" className="rounded-pill m-2" width="35%" />
          <span>Dr. Amelia Brooks</span>
          <p style={{fontWeight: 300}}>Cardiology</p>
        </div>
      </div>
      <div className="col-md-2 col-sm-6">
        <div className="card" id="dr-profile">
          <img src="img/staff-9.webp" className="rounded-pill m-2" width="35%" />
          <span>Dr. Harper Lane</span>
          <p style={{fontWeight: 300}}>Dermatology</p>
        </div>
      </div>
      <div className="col-md-2 col-sm-6">
        <div className="card" id="dr-profile">
          <img src="img/staff-11.webp" className="rounded-pill m-2" width="35%" />
          <span>Dr. Lucas Grant</span>
          <p style={{fontWeight: 300}}>Pulmonology</p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-4">
        <div className="card" style={{border: '1px solid'}}>
          <img src="img/staff-4.webp" className="img-thumbnail card-img-top" width="30%" />
          <h4 className="card-title ms-3">Dr. Henry James</h4>
          <p className="card-title ms-3">Oncology • MBBS, MD</p>
          <span className="card-link"><span className="badge bg-primary ms-3 mb-3">Board Certified</span></span>
        </div>
      </div>
      <div className="col-md-8 mt-3">
        <button type="button" className="btn btn-link dr-btn" data-bs-toggle="collapse" data-bs-target="#bio">Bio</button>
        <button type="button" className="btn btn-link dr-btn" data-bs-toggle="collapse" data-bs-target="#Schedule">Schedule</button>
        <button type="button" className="btn btn-link dr-btn" data-bs-toggle="collapse" data-bs-target="#Reviews">Reviews</button>
        <div className="col-md-12 mt-4 collapse show" id="bio">
          <p>Fugiat proident aliqua laboris, excepteur sunt ad pariatur occaecat. Veniam minim eu laboris,
            magna irure velit anim excepteur exercitation.</p>
          <p><i className="fa-solid fa-circle-check" /> Special interest in immunotherapy</p>
          <p><i className="fa-solid fa-circle-check" /> Member of ASCO</p>
          <p><i className="fa-solid fa-circle-check" /> Community outreach programs</p>
        </div>
        <div className="col-md-12  mt-4 mb-3 collapse" id="Schedule">
          <div className="row g-2">
            <div className="col-md-5 sch">
              <span className="ps-3">Mon</span><span className="float-end me-3">9:00 AM - 1:00 PM</span>
            </div>
            <div className="offset-md-1 col-md-5 sch">
              <span className="ps-3">Tue</span><span className="float-end me-3">12:00 PM - 6:00 PM</span>
            </div>
            <div className="col-md-5 sch">
              <span className="ps-3">Wed</span><span className="float-end me-3">9:00 AM - 3:00 PM</span>
            </div>
            <div className="col-md-5 sch">
              <span className="ps-3">Thu</span><span className="float-end me-3">10:00 AM - 4:00 PM</span>
            </div>
            <div className="col-md-5 sch">
              <span className="ps-3">Fri</span><span className="float-end me-3">Closed</span>
            </div>
          </div>
        </div>
        <div className="col-md-12 mt-3" id="Reviews">
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-regular fa-star-half" />
          <span>4.5/5 • 32 reviews</span>
          <p>Id magna consequat minim in, lorem dolore fugiat. Officia irure ex anim, velit nulla cupidatat laboris enim.</p>
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
  </div></div>

    </div>
  )
}

export default Doctor
