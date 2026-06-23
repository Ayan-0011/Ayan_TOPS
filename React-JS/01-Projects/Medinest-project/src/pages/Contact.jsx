import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
   <div>
  <section id="heading">
    <div className="container my-5">
      <div className="row d-flex justify-content-center text-center">
        <div className="col-lg-8">
          <div className="heading-title my-5">
            <h1>Contact</h1>
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
            <li className="current">Contact</li>
          </ol>
        </div>
      </div>
    </n>
  </section>
  <section id="contact-page">
    <div className="container mt-5">
      <div className="row g-3">
        <div className="col-lg-4 col-md-6">
          <div className="card contact-card rounded-4">
            <div className="contact-info text-center mb-3">
              <div className="contact-icon mx-auto bg-info-subtle my-4">
                <i className="bi bi-geo-alt fs-3" />
              </div>
              <h4 className="fs-4 fw-bold my-2">Our Address</h4>
              <p className="my-3 fw-medium fs-6">
                4582 Magnolia Avenue
                <br />
                Riverside, CA 92506
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="card contact-card rounded-4">
            <div className="contact-info text-center mb-3">
              <div className="contact-icon mx-auto bg-info-subtle my-4">
                <i className="bi bi-telephone fs-3" />
              </div>
              <h4 className="fs-4 fw-bold my-2">Call Us</h4>
              <p className="my-3 fw-medium fs-6">
                +1 (951) 684-9123
                <br />
                +1 (951) 787-4534
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12">
          <div className="card contact-card rounded-4">
            <div className="contact-info text-center mb-3">
              <div className="contact-icon mx-auto bg-info-subtle my-4">
                <i className="bi bi-envelope fs-3" />
              </div>
              <h4 className="fs-4 fw-bold my-2">Email Us</h4>
              <p className="my-3 fw-medium fs-6">
                contact@example.com
                <br />
                support@example.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="embed-map my-5">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235014.29918344505!2d72.41493260043843!3d23.020158087100274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1757137412900!5m2!1sen!2sin" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
        <div className="col-lg-6 col-md-12 my-1">
          <form action className="my-5">
            <div className="row gy-3">
              <div className="col-md-6">
                <input type="text" name="name" className="form-control" placeholder="Your Name" required />
              </div>
              <div className="col-md-6">
                <input type="email" className="form-control" name="email" placeholder="Your Email" required fdprocessedid="gknxvb" />
              </div>
              <div className="col-md-12">
                <input type="text" className="form-control" name="subject" placeholder="Subject" required />
              </div>
              <div className="col-md-12">
                <textarea className="form-control" name="message" rows={10} placeholder="Message" required defaultValue={""} />
              </div>
              <div className="col-md-12 text-center">
                <button type="submit" className="send-message-button">Send Message</button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-lg-12 col-md-12">
          <div className="social-links text-center mt-5">
            <a href="#" className="twitter"><i className="bi bi-twitter" /></a>
            <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
            <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
            <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
            <a href="#" className="youtube"><i className="bi bi-youtube" /></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

  )
}

export default Contact
