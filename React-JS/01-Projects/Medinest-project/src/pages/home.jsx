import React from 'react'

const Home = () => {
    return (
    <div>
  <div className="container pt-5">
    <div className="row align-items-center g-5">
      <div className="col-lg-6 text-center mb-4 position-relative shifted">
        <img src="images/staff-8.webp" alt="Doctor" className="doctor_img   " />
        <div className="info-card position-absolute top-0 start-0 m-3 d-flex align-items-center gap-2">
          <i className="bi bi-telephone-fill text-info fs-4" />
          <div>
            <small className="d-block text-muted">24/7 Emergency</small>
            <strong>+1 (555) 911-2468</strong>
          </div>
        </div>
        <div className="info-card info-card2 position-absolute mb-3 d-flex justify-content-between w-80">
          <div className="text-center px-3">
            <h5 className="mb-0 text-info fw-bold fs-3">25K+</h5>
            <small className="text-muted fs-6">Patients Treated</small>
          </div>
          <div className="text-center px-3">
            <h5 className="mb-0 text-success   fw-bold fs-3">98%</h5>
            <small className="text-muted fs-6">Satisfaction Rate</small>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <span className="badge bg-info text-dark mb-3 px-4 py-2 fs-6 rounded-pill">
          TRUSTED HEALTHCARE PROVIDER
        </span>
        <h1 className="fw-bold display-5 mb-3">
          Excellence in Medical Care Since 1985
        </h1>
        <p className="text-muted fs-5 mb-4">
          Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Pellentesque in
          ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget consectetur sed,
          convallis at tellus.
        </p>
        <div className="row g-3 mb-4">
          <div className="col-4 col-md-3">
            <div className="bg-light rounded-4 p-3 text-center shadow h-100">
              <i className="bi bi-award text-info fs-2 mb-2 d-block" />
              <h5 className="fw-bold mb-1">35+</h5>
              <small className="text-muted">Years Experience</small>
            </div>
          </div>
          <div className="col-4 col-md-3">
            <div className="bg-light rounded-4 p-3 text-center shadow h-100">
              <i className="bi bi-people text-info fs-2 mb-2" />
              <h5 className="fw-bold mb-1">150+</h5>
              <small className="text-muted">Medical Specialists</small>
            </div>
          </div>
          <div className="col-4 col-md-3">
            <div className="bg-light rounded-4 p-3 text-center shadow h-100">
              <i className="bi bi-geo-alt text-info fs-2 mb-2" />
              <h5 className="fw-bold mb-1">12</h5>
              <small className="text-muted">Clinic Locations</small>
            </div>
          </div>
        </div>
        <div className="d-flex gap-3">
          <a href="#" className="btn btn-info text-white fw-bold px-4 py-2 rounded-3 shadow-sm">
            Schedule Consultation
          </a>
          <a href="#" className="btn btn-outline-dark px-4 py-2 rounded-3">
            <i className="bi bi-play-circle me-2" /> Watch Our Story
          </a>
        </div>
        <div className="container">
          <div className="row service-row mt-3">
            <div className="col-md-auto">
              <div className="service-box">
                <i className="bi bi-calendar-check" />
                <span>Find Available Times</span>
              </div>
            </div>
            <div className="col-md-auto">
              <div className="service-box">
                <i className="bi bi-chat-dots" />
                <span>Chat with Support</span>
              </div>
            </div>
            <div className="col-md-auto">
              <div className="service-box">
                <i className="bi bi-file-earmark-medical" />
                <span>Patient Portal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section className="home">
    <div className="container">
      <div className="row">
        <div className="col-12 text-center mt-5 mb-5">
          <h1 className="display-5 fw-semibold mb-4 custom-text">Excellence in Healthcare Since 1985</h1>
          <p className="text-muted fs-5">We are committed to providing world-class medical care through</p>
          <p className="text-muted fs-5">innovation, compassion, and unwavering dedication to our</p>
          <p className="text-muted fs-5">patients' wellbeing and recovery.</p>
        </div>
      </div>
      <div className="container mb-5">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-12 mb-3 col-sm-12 image-large">
            <div className="image-card">
              <img src="images/facilities-6.webp" alt="facilities" className="rounded-4 img-fluid" />
            </div>
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12">
            <div className="row g-3">
              <div className="col-lg-12 col-md-6">
                <div className="image-card">
                  <img src="images/consultation-3.webp" alt="consultation" className="img-fluid rounded-4" />
                </div>
              </div>
              <div className="col-lg-12 col-md-6 mb-3">
                <div className="image-card">
                  <img src="images/surgery-2.webp" alt="surgery" className="img-fluid rounded-4" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt-md-3">
            <div className="info-box mb-4">
              <div className="d-flex align-items-start gap-3">
                <i className="bi bi-heart-pulse text-info fs-2" />
                <div>
                  <h5 className="fw-bold">Patient-Centered Approach</h5>
                  <p className="text-muted">Every treatment plan is carefully customized to meet
                    individual
                    patient needs and medical history.</p>
                </div>
              </div>
            </div>
            <ul className="list-unstyled mb-4 ms-2">
              <li className="mb-2"><i className="bi bi-check-circle-fill text-info me-3" />Advanced diagnostic
                technology and imaging</li>
              <li className="mb-2"><i className="bi bi-check-circle-fill text-info me-3" />Board-certified
                physicians
                and specialists</li>
              <li className="mb-2"><i className="bi bi-check-circle-fill text-info me-3" />Comprehensive
                rehabilitation
                programs</li>
              <li className="mb-2"><i className="bi bi-check-circle-fill text-info me-3" />24/7 emergency and
                critical
                care services</li>
            </ul>
            <div className="d-flex align-items-center mb-4 gap-5 ms-2">
              <div className="align-items-center d-flex flex-column">
                <h1 className="text-info fw-normal mb-0">98%</h1>
                <small className="text-muted fs-6">Patient Satisfaction</small>
              </div>
              <div className="align-items-center d-flex flex-column">
                <h1 className="text-info fw-normal mb-0">35K+</h1>
                <small className="text-muted fs-6">Lives Improved</small>
              </div>
            </div>
            <div className="d-flex gap-3 mb-4 ms-2">
              <a href="#" className="btn btn-info text-white fw-bold px-4">Explore Our Services</a>
              <a href="#" className="btn btn-outline-secondary px-4">
                <i className="bi bi-telephone me-2" /> Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div></section>
  <section className="featured-departments">
    <div className="container">
      <div className="row text-center">
        <div className="col-lg-12">
          <h1>Featured Departments</h1>
          <p className="text-muted mt-2 mb-5">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit</p>
        </div>
      </div>
    </div>
    <div className="container mt-3">
      <div className="row align-items-center my-4">
        <div className="col-lg-6 mb-4 mt-4">
          <h6 className="text-uppercase text-info fw-bold mb-4" style={{letterSpacing: 1}}>Emergency Medicine
          </h6>
          <h2 className="fw-bold mt-2 mb-4">24/7 Emergency Care Services</h2>
          <p className="mb-4 lh-md">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.</p>
          <ul className="list-unstyled mt-4 mb-4">
            <li className="mb-3"><i className="bi bi-check-circle-fill me-3" />24/7 Emergency Response</li>
            <li className="mb-3"><i className="bi bi-check-circle-fill me-3" />Advanced Life Support</li>
            <li className="mb-3"><i className="bi bi-check-circle-fill me-3" />Trauma Care Specialists</li>
          </ul>
          <a href="#" className="learn-more mt-2 mb-3">Learn More </a>
        </div>
        <div className="col-lg-6 services-img">
          <div className="image-card">
            <img src="images/emergency-3.webp" alt="emergency-3" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
    <div className="container py-5">
      <div className="row g-4">
        <div className="col-lg-4 col-md-6">
          <div className="card service-card1 h-100">
            <div className="icon-circle">
              <i className="bi bi-heart-pulse" />
            </div>
            <div className="card-content text-start mt-2">
              <h5 className="fs-3">Cardiology</h5>
              <p className="text-muted mb-3">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia
                consequuntur magni dolores.</p>
            </div>
            <div className="row stats text-start mt-4">
              <div className="col-6">
                <strong className="d-block fs-4">15+</strong>
                <small className="text-muted">SPECIALISTS</small>
              </div>
              <div className="col-6">
                <strong className="d-block fs-4">500+</strong>
                <small className="text-muted">PROCEDURES</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="card service-card1 h-100">
            <div className="icon-circle">
              <i className="fa-solid fa-brain" />
            </div>
            <div className="card-content text-start mt-2">
              <h5 className="fs-3">Neurology</h5>
              <p className="text-muted mb-3">Eos qui ratione voluptatem sequi nesciunt neque porro quisquam
                est, qui dolorem ipsum quia dolor sit amet.</p>
            </div>
            <div className="row stats text-start mt-4">
              <div className="col-6">
                <strong className="d-block fs-4">8+</strong>
                <small className="text-muted">SPECIALISTS</small>
              </div>
              <div className="col-6">
                <strong className="d-block fs-4">200+</strong>
                <small className="text-muted">TREATMENTS</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="card service-card1 h-100">
            <div className="icon-circle">
              <i className="bi bi-scissors" />
            </div>
            <div className="card-content text-start mt-2">
              <h5 className="fs-3">Surgery</h5>
              <p className="text-muted mb-3">Consectetur adipisci velit sed quia non numquam eius modi tempora
                incidunt ut labore et dolore magnam aliquam.</p>
            </div>
            <div className="row stats text-start mt-4">
              <div className="col-6">
                <strong className="d-block fs-4">12+</strong>
                <small className="text-muted">SURGEONS</small>
              </div>
              <div className="col-6">
                <strong className="d-block fs-4">1000+</strong>
                <small className="text-muted">OPERATIONS</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="card service-card1 h-100">
            <div className="icon-circle">
              <i className="fas fa-baby" />
            </div>
            <div className="card-content text-start mt-2">
              <h5 className="fs-3">Pediatrics</h5>
              <p className="text-muted mb-3">Quaerat voluptatem ut enim ad minima veniam quis nostrum
                exercitationem ullam corporis suscipit laboriosam.</p>
            </div>
            <div className="row stats text-start mt-4">
              <div className="col-6">
                <strong className="d-block fs-4">10+</strong>
                <small className="text-muted">PEDIATRICIANS</small>
              </div>
              <div className="col-6">
                <strong className="d-block fs-4">2000+</strong>
                <small className="text-muted">YOUNG PATIENTS</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="card service-card1 h-100">
            <div className="icon-circle">
              <i className="fas fa-eye" />
            </div>
            <div className="card-content text-start mt-2">
              <h5 className="fs-3">Ophthalmology</h5>
              <p className="text-muted mb-3">Nisi ut aliquid ex ea commodi consequatur quis autem vel eum iure
                reprehenderit qui in ea voluptate velit esse.</p>
            </div>
            <div className="row stats text-start mt-4">
              <div className="col-6">
                <strong className="d-block fs-4">6+</strong>
                <small className="text-muted">EYE DOCTORS</small>
              </div>
              <div className="col-6">
                <strong className="d-block fs-4">800+</strong>
                <small className="text-muted">EYE EXAMS</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="card service-card1 h-100">
            <div className="icon-circle">
              <i className="fas fa-band-aid" />
            </div>
            <div className="card-content text-start mt-2">
              <h5 className="fs-3">Dermatology</h5>
              <p className="text-muted mb-3">Quam nihil molestiae consequatur vel illum qui dolorem eum fugiat
                quo voluptas nulla pariatur at vero eos.</p>
            </div>
            <div className="row stats text-start mt-4">
              <div className="col-6">
                <strong className="d-block fs-4">7+</strong>
                <small className="text-muted">DERMATOLOGIST</small>
              </div>
              <div className="col-6">
                <strong className="d-block fs-4">600+</strong>
                <small className="text-muted">SKIN TREATMENTS</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container py-2">
      <div className="row text-center">
        <div className="col-lg-12">
          <div className="department-all">
            <div className="department-content">
              <h3 className="mb-4">Explore all Our Medical Departments</h3>
              <p>Et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentiumv
              </p><p className="mb-2"> voluptatum deleniti atque corrupti quos dolores.</p>
              <p />
              <a href="#" className="btn btn-info text-light p-3 rounded-11">View All Departments</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="featured-services">
    <div className="container">
      <div className="row text-center mt-5">
        <div className="col-lg-12">
          <h1>Featured Services</h1>
          <p className="text-muted mt-2 mb-5">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit</p>
        </div>
      </div>
    </div>
    <div className="container py-3">
      <div className="row g-4 mb-5">
        <div className="col-lg-4 col-md-6">
          <div className="card service-card2 h-100">
            <div className="service-img">
              <img src="images/cardiology-2.webp" alt="Cardiology" />
              <div className="icon-badge">
                <i className="bi bi-heart-pulse text-white" />
              </div>
            </div>
            <div className="service-body mt-3">
              <h5>Cardiology Excellence</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in
                faucibus orci luctus et ultrices posuere cubilia curae.</p>
              <a href="#" className="learn-more">Learn More </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="card service-card2 h-100">
            <div className="service-img">
              <img src="images/neurology-3.webp" alt="Cardiology" />
              <div className="icon-badge">
                <i className="fa-solid fa-brain text-white" />
              </div>
            </div>
            <div className="service-body mt-3">
              <h5>Neurology Care</h5>
              <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi.</p>
              <a href="#" className="learn-more">Learn More </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="card service-card2 h-100">
            <div className="service-img">
              <img src="images/orthopedics-1.webp" alt="Cardiology" />
              <div className="icon-badge">
                <i className="fas fa-bone text-white" />
              </div>
            </div>
            <div className="service-body mt-3">
              <h5>Orthopedic Surgery</h5>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
              <a href="#" className="learn-more">Learn More </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="card service-card2 h-100">
            <div className="service-img">
              <img src="images/pediatrics-4.webp" alt="Cardiology" />
              <div className="icon-badge">
                <i className="fas fa-baby text-white" />
              </div>
            </div>
            <div className="service-body mt-3">
              <h5>Pediatric Care</h5>
              <p>Sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde
                omnis iste natus error sit voluptatem accusantium.</p>
              <a href="#" className="learn-more">Learn More </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="card service-card2 h-100">
            <div className="service-img">
              <img src="images/oncology-2.webp" alt="Cardiology" />
              <div className="icon-badge">
                <i className="fas fa-ribbon text-white" />
              </div>
            </div>
            <div className="service-body mt-3">
              <h5>Oncology Treatment</h5>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                voluptatum deleniti atque corrupti quos dolores et quas molestias.</p>
              <a href="#" className="learn-more">Learn More </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="card service-card2 h-100">
            <div className="service-img">
              <img src="images/laboratory-3.webp" alt="Cardiology" />
              <div className="icon-badge">
                <i className="fas fa-flask text-white" />
              </div>
            </div>
            <div className="service-body mt-3">
              <h5>Laboratory Services</h5>
              <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet
                ut et voluptates repudiandae sint et molestiae non recusandae.</p>
              <a href="#" className="learn-more">Learn More </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="find-a-doctor">
    <div className="container">
      <div className="row text-center my-5">
        <div className="col-lg-12">
          <h2>Find A Doctor</h2>
          <p className="text-muted mt-2 mb-5">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit</p>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <div className="search-header">
            <h2 className="fw-bold">Discover Your Ideal Medical Specialist</h2>
            <p className="fs-6 text-muted">Connect with our network of certified healthcare professionals across
              all medical disciplines</p>
          </div>
        </div>
      </div>
    </div>
    <div className="container my-5">
      <div className="search-box">
        <form>
          <div className="row g-3 align-items-end">
            <div className="col-md-4">
              <label className="fw-semibold fs-6 mb-2">Practitioner Name</label>
              <div className="input-icon">
                <i className="bi bi-search" />
                <input type="text" className="form-control" placeholder="Search by name..." />
              </div>
            </div>
            <div className="col-md-4">
              <label className="fw-semibold fs-6 mb-2">Medical Specialty</label>
              <div className="input-icon">
                <i className="bi bi-plus-lg" />
                <select className="form-control">
                  <option>Select specialty</option>
                  <option>Cardiovascular Medicine</option>
                  <option>Neurological Sciences</option>
                </select>
              </div>
            </div>
            <div className="col-md-3">
              <label className="fw-semibold fs-6 mb-2">Location</label>
              <div className="input-icon">
                <i className="bi bi-geo-alt" />
                <select className="form-control">
                  <option>All locations</option>
                  <option>Ahmedabad</option>
                  <option>Mumbai</option>
                  <option>Delhi</option>
                  <option>Bangalore</option>
                  <option>Jaipur</option>
                  <option>Bhopal</option>
                  <option>Patna</option>
                </select>
              </div>
            </div>
            <div className="col-md-1 col-sm-12 d-flex justify-content-center">
              <button type="submit" className="btn-search">
                <i className="bi bi-arrow-right text-white" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div className="container py-5">
      <div className="row g-4">
        <div className="col-lg-4 col-md-6">
          <div className="doctor-card h-100">
            <div className="d-flex align-items-center mb-3">
              <div className="position-relative">
                <img src="images/staff-1.webp" className="doctor-img me-3 img-fluid rounded-4" />
                <div className="badge active-class text-bg-success text-success rounded-circle">1</div>
              </div>
              <div>
                <h5 className="mb-0 fw-bold">Dr. Jennifer Morgan</h5>
                <small className="text-muted">Senior Cardiologist</small>
                <div>
                  <span className="badge bg-info text-dark mb-2 me-1">MD, FACC</span>
                  <span className="text-muted">18 years</span>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center my-2">
              <span className="text-warning">★★★★★</span>
              <span className="fw-bold ms-2">4.9</span>
              <small className="text-muted ms-2">(142 patients)</small>
            </div>
            <div className="d-flex justify-content-start mt-3 gap-2">
              <button className="btn btn-outline-secondary btn-custom w-100">Profile</button>
              <button className="btn btn-info text-white btn-custom w-100">Consult</button>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="doctor-card h-100">
            <div className="d-flex align-items-center mb-3">
              <div className="position-relative">
                <img src="images/staff-12.webp" className="doctor-img me-3 rounded-4" />
                <div className="badge active-class text-bg-warning text-warning rounded-circle">1</div>
              </div>
              <div>
                <h5 className="mb-0 fw-bold">Dr. Robert Kim</h5>
                <small className="text-muted">Neurosurgeon</small>
                <div>
                  <span className="badge bg-info text-dark mb-2 me-1">MD, PhD</span>
                  <span className="text-muted">24 years</span>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center my-2">
              <span className="text-warning">★★★★★</span>
              <span className="fw-bold ms-2">4.8</span>
              <small className="text-muted ms-2">(98 patients)</small>
            </div>
            <div className="d-flex justify-content-start mt-3 gap-2">
              <button className="btn btn-outline-secondary btn-custom w-100">Profile</button>
              <button className="btn btn-info text-white btn-custom w-100">Schedule</button>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="doctor-card h-100">
            <div className="d-flex align-items-center mb-3">
              <div className="position-relative">
                <img src="images/staff-3.webp" className="doctor-img me-3 rounded-4" />
                <div className="badge active-class text-bg-dark text-dark rounded-circle">1</div>
              </div>
              <div>
                <h5 className="mb-0 fw-bold">Dr. Sarah Thompson</h5>
                <small className="text-muted">Pediatric Specialist</small>
                <div>
                  <span className="badge bg-info text-dark mb-2 me-1">MD, FAAP</span>
                  <span className="text-muted">12 years</span>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center my-2">
              <span className="text-warning">★★★★★</span>
              <span className="fw-bold ms-2">5.0</span>
              <small className="text-muted ms-2">(156 patients)</small>
            </div>
            <div className="d-flex justify-content-start mt-3 gap-2">
              <button className="btn btn-outline-secondary btn-custom w-100">Profile</button>
              <button className="btn btn-info text-white btn-custom w-100">Book Now</button>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="doctor-card h-100">
            <div className="d-flex align-items-center mb-3">
              <div className="position-relative">
                <img src="images/staff-5.webp" className="doctor-img me-3 rounded-4" />
                <div className="badge active-class text-bg-success text-success rounded-circle">1</div>
              </div>
              <div>
                <h5 className="mb-0 fw-bold">Dr. Michael Rivera</h5>
                <small className="text-muted">Orthopedic Surgeon</small>
                <div>
                  <span className="badge bg-info text-dark mb-2 me-1">MD, FAAOS</span>
                  <span className="text-muted">20 years</span>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center my-2">
              <span className="text-warning">★★★★★</span>
              <span className="fw-bold ms-2">4.7</span>
              <small className="text-muted ms-2">(134 patients)</small>
            </div>
            <div className="d-flex justify-content-start mt-3 gap-2">
              <button className="btn btn-outline-secondary btn-custom w-100">Profile</button>
              <button className="btn btn-info text-white btn-custom w-100">Request</button>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="doctor-card h-100">
            <div className="d-flex align-items-center mb-3">
              <div className="position-relative">
                <img src="images/staff-7.webp" className="doctor-img me-3 rounded-4" />
                <div className="badge active-class text-bg-success text-success rounded-circle">1</div>
              </div>
              <div>
                <h5 className="mb-0 fw-bold">Dr. Lisa Garcia</h5>
                <small className="text-muted">Dermatologist</small>
                <div>
                  <span className="badge bg-info text-dark mb-2 me-1">MD, FAAD</span>
                  <span className="text-muted">15 years</span>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center my-2">
              <span className="text-warning">★★★★★</span>
              <span className="fw-bold ms-2">4.6</span>
              <small className="text-muted ms-2">(89 patients)</small>
            </div>
            <div className="d-flex justify-content-start mt-3 gap-2">
              <button className="btn btn-outline-secondary btn-custom w-100">Profile</button>
              <button className="btn btn-info text-white btn-custom w-100">Consult</button>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="doctor-card h-100">
            <div className="d-flex align-items-center mb-3">
              <div className="position-relative">
                <img src="images/staff-9.webp" className="doctor-img me-3 rounded-4" />
                <div className="badge active-class text-bg-success text-success rounded-circle">1</div>
              </div>
              <div>
                <h5 className="mb-0 fw-bold">Dr. Daniel Wong</h5>
                <small className="text-muted">Oncology Expert</small>
                <div>
                  <span className="badge bg-info text-dark mb-2 me-1">MD, FASCO</span>
                  <span className="text-muted">21 years</span>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center my-2">
              <span className="text-warning">★★★★★</span>
              <span className="fw-bold ms-2">4.9</span>
              <small className="text-muted ms-2">(211 patients)</small>
            </div>
            <div className="d-flex justify-content-start mt-3 gap-2">
              <button className="btn btn-outline-secondary btn-custom w-100">Profile</button>
              <button className="btn btn-info text-white btn-custom w-100">Appointment</button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <button className="btn btn-outline-info text-dark px-4 py-2 btn-custom">
          Browse Complete Directory →
        </button>
      </div>
    </div>
  </section>
  <section className="call-to-action">
    <div className="container-fluid bg-color-cta my-4">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6">
            <h1 className="fw-normal mt-2 mb-4 display-4">Exceptional Care for Your Health Journey</h1>
            <p className="mb-4 lh-md fs-5 text-muted">Discover comprehensive healthcare services delivered with
              compassion and
              expertise. Our dedicated team is committed to providing personalized medical care that puts
              you first.</p>
            <a href="#" type="button" className="btn btn-info mt-2 mb-3 btn-lg text-white">Schedule
              Consultation</a>
            <a href="#" className="learn-more mb-5 mx-4 fs-5">Explore Services </a>
          </div>
          <div className="col-lg-6">
            <div className="image-showcase">
              <img src="images/showcase-2.webp" alt="emergency-3" className="img-fluid rounded-3 " />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container my-5">
      <div className="row border-top border-bottom py-4">
        <div className="col-lg-3 col-md-6 col-sm-6 mb-2">
          <div className="align-items-center d-flex flex-column">
            <h1 className="text-info fw-normal mb-0">25+</h1>
            <small className="text-muted fs-6">Years Experienc</small>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 mb-2">
          <div className="align-items-center d-flex flex-column">
            <h1 className="text-info fw-normal mb-0">15K+</h1>
            <small className="text-muted fs-6">Happy Patients</small>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 mb-2">
          <div className="align-items-center d-flex flex-column">
            <h1 className="text-info fw-normal mb-0">50+</h1>
            <small className="text-muted fs-6">Medical Experts</small>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 mb-2">
          <div className="align-items-center d-flex flex-column">
            <h1 className="text-info fw-normal mb-0">24/7</h1>
            <small className="text-muted fs-6">Emergency Care</small>
          </div>
        </div>
      </div>
    </div>
    <div className="container py-3">
      <div className="row g-4">
        <div className="col-lg-4 col-md-6">
          <div className="card h-100 service-card3 text-center p-3">
            <div className="icon-circle2 mb-3">
              <i className="bi bi-heart-pulse fs-1" />
            </div>
            <div className="card-body">
              <h5 className="card-title fs-3">Cardiology</h5>
              <p className="card-text text-muted">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores.
              </p>
            </div>
            <div className="card-footer bg-transparent border-0">
              <a href="#" className="s3-learn-more fs-5 text-decoration-none">Learn More</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="card h-100 service-card3 text-center p-3">
            <div className="icon-circle2 mb-3">
              <i className="fa-solid fa-brain fs-1" />
            </div>
            <div className="card-body">
              <h5 className="card-title fs-3">Neurology Center</h5>
              <p className="card-text text-muted">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores.
              </p>
            </div>
            <div className="card-footer bg-transparent border-0">
              <a href="#" className="s3-learn-more fs-5 text-decoration-none">Learn More</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="card h-100 service-card3 text-center p-3">
            <div className="icon-circle2 mb-3">
              <i className="fas fa-shield-alt fs-1" />
            </div>
            <div className="card-body">
              <h5 className="card-title fs-3">Preventive Care</h5>
              <p className="card-text text-muted">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores.
              </p>
            </div>
            <div className="card-footer bg-transparent border-0">
              <a href="#" className="s3-learn-more fs-5 text-decoration-none">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container my-5">
      <div className="assistance-box">
        <div className="row align-items-center">
          <div className="col-md-8 d-flex align-items-center mb-3 mb-md-0">
            <div className="contact-icon bg-white bg-opacity-25 me-3">
              <i className="fas fa-phone fs-4 text-white" />
            </div>
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
  </section>
 </div>

  )
}

export default Home
