import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div >
      <div>
        <div className="row">
          <div className="col-md-12 text-center pt-5 pb-5 mb-4">
            <h1>About</h1>
            <p>Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur
              ut a odio voluptatem.<br /> Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit
              quaerat ipsum dolorem.</p>
          </div>
          <div className="container-fluid">
            <nav aria-label="breadcrumb" className="bg-body-secondary ps-5 pt-4 pb-3">
              <ol className="breadcrumb joint">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">About</li>
              </ol>
            </nav>
          </div>
          <div className="col-md-12 text-center mt-5">
            <h1 style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}>Excellence in Healthcare Since 1985</h1>
            <p style={{ fontSize: 22, paddingTop: 10, fontWeight: 300 }}>We believe that exceptional medical care
              begins with understanding.<br /> Our dedicated team of professionals combines cutting-edge technology with
              compassionate,<br /> personalized treatment to ensure every patient receives the highest standard of care.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="row mt-5 mb-3">
            <div className="col-md-7">
              <div className="img-card">
                <img src="img/facilities-3.webp" width="80%" />
              </div>
              <div className="row mt-3">
                <div className="col-md-6 one-img">
                  <img src="img/staff-12 (1).webp" className="rounded-4" width="100%" height="250px" />
                </div>
                <div className="col-md-6 two-img">
                  <img src="img/consultation-4.webp" className="rounded-4" width="100%" height="250px" />
                </div>
              </div>
            </div>
            <div className="col-md-5 mt-5">
              <h1 style={{ fontFamily: '"Times New Roman", Times, serif' }}>Trusted Healthcare<br /> Provider</h1>
              <p style={{ fontSize: 20, marginTop: 20, fontFamily: 'sans-serif' }}>Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation.</p>
              <div className="row mt-5">
                <div className="col-md-2 rate ps-3 ms-3 col-2">
                  <p style={{ fontSize: 30, color: 'rgb(47, 201, 150)', fontWeight: 400 }}>22000</p>
                </div>
                <div className="col-md-8 ps-5 col-8">
                  <h3 style={{ fontFamily: 'serif', fontWeight: 500 }}>Successful Treatments</h3>
                  <p style={{ fontWeight: 300 }}>Completed with excellent patient outcomes</p>
                </div>
                <div className="col-md-2 rate ps-3 ms-3 col-2">
                  <p style={{ fontSize: 30, color: 'rgb(47, 201, 150)', fontWeight: 400 }}>95%</p>
                </div>
                <div className="col-md-8 ps-5 col-8">
                  <h3 style={{ fontFamily: 'serif', fontWeight: 500 }}>Patient Satisfaction</h3>
                  <p style={{ fontWeight: 300 }}>Based on comprehensive feedback surveys</p>
                </div>
                <div className="col-md-2 rate ps-3 ms-3 col-2">
                  <p style={{ fontSize: 30, color: 'rgb(47, 201, 150)', fontWeight: 400 }}>85</p>
                </div>
                <div className="col-md-8 ps-5 col-8">
                  <h3 style={{ fontFamily: 'serif', fontWeight: 500 }}>Medical Professionals</h3>
                  <p style={{ fontWeight: 300 }}>Specialists across various departments</p>
                </div>
              </div>
            </div>
          </div>
          <di className="row mt-5 mb-5">
            <div className="col-md-4 mt-4">
              <div className="card text-center " id="about-card">
                <i className="bi bi-heart" />
                <h3>Our Mission</h3>
                <p style={{ fontSize: 18 }}>To provide comprehensive, patient-centered healthcare that combines
                  medical excellence with genuine compassion, ensuring every individual receives personalized care
                  tailored to their unique needs.</p>
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <div className="card text-center " id="about-card">
                <i className="bi bi-eye" />
                <h3>Our Vision</h3>
                <p style={{ fontSize: 18 }}>To be the leading healthcare provider in our region, recognized for
                  innovative treatments, exceptional outcomes, and our unwavering commitment to improving lives in
                  our community.</p>
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <div className="card text-center " id="about-card">
                <i className="bi bi-star" />
                <h3>Our Promise</h3>
                <p style={{ fontSize: 18, padding: '0 10px' }}>Every patient will receive the highest our promise
                  quality care in a comfortable, our supportive environment where their health, dignity, our and
                  well-being are our top priorities..</p>
              </div>
            </div>
          </di>
          <div className="row mt-5">
            <div className="col-md-12 text-center mt-5">
              <h1>Areas of Excellence</h1>
              <p>Our specialized departments work together to provide comprehensive care across multiple medical
                disciplines</p>
            </div>
            <div className="col-md col-sm-4 Areas mt-4">
              <i className="bi bi-activity" />
              <p>Cardiology</p>
            </div>
            <div className="col-md col-sm-4  Areas mt-4">
              <i className="fa-solid fa-brain" />
              <p>Neurology</p>
            </div>
            <div className="col-md col-sm-3 Areas mt-4">
              <i className="bi bi-person" />
              <p>Pediatrics</p>
            </div>
            <div className="col-md col-sm-4 Areas mt-4">
              <i className="fa-solid fa-scissors" />
              <p>Surgery</p>
            </div>
            <div className="col-md col-sm-4 Areas mt-4">
              <i className="bi bi-heart-pulse-fill" />
              <p>Oncology</p>
            </div>
            <div className="col-md col-sm-3 Areas mt-4">
              <i className="fa-solid fa-file" />
              <p>Emergency</p>
            </div>
          </div>
          <div className="row mt-5 mb-5">
            <div className="col-md-12 mt-5 mb-2 text-center">
              <h1>Recognized Excellence</h1>
              <p style={{ fontWeight: 300 }}>Our commitment to quality is validated by prestigious healthcare
                organizations</p>
            </div>
            <div className="row">
              <div className="offset-md-3 col-md-1 col-sm-4">
                <div className="card" id="Excellence">
                  <img src="img/clients-6.webp" width="100%" />
                </div>
              </div>
              <div className="col-md-1 col-sm-4">
                <div className="card" id="Excellence">
                  <img src="img/clients-7.webp" width="100%" />
                </div>
              </div>
              <div className="col-md-1 col-sm-4">
                <div className="card" id="Excellence">
                  <img src="img/clients-8.webp" width="100%" />
                </div>
              </div>
              <div className="col-md-1 col-sm-4">
                <div className="card" id="Excellence">
                  <img src="img/clients-9.webp" width="100%" />
                </div>
              </div>
              <div className="col-md-1 col-sm-4">
                <div className="card" id="Excellence">
                  <img src="img/clients-10.webp" width="100%" />
                </div>
              </div>
              <div className="col-md-1 col-sm-4">
                <div className="card" id="Excellence">
                  <img src="img/clients-11.webp" width="100%" />
                </div>
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

export default About
