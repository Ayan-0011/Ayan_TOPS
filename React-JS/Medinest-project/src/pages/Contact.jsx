import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
      <div >
  <div className="row">
    <div className="col-md-12 text-center pt-5 pb-5 mb-4">
      <h1>Contact</h1>
      <p>Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint<br /> voluptas consequatur
        ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum
        dolorem.</p>
    </div>
    <div className="container-fluid">
      <nav aria-label="breadcrumb" className="bg-body-secondary ps-5 pt-4 pb-3">
        <ol className="breadcrumb joint">
          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
          <li className="breadcrumb-item active" aria-current="page">Contact</li>
        </ol>
      </nav>
    </div>
  </div>
  <div className="container">
    <div className="row mt-5">
      <div className="col-md-4">
        <div className="card text-center" id="con-card">
          <i className="fa-solid fa-location-dot mb-3 mt-3 text-info" />
          <h3>Our Address</h3>
          <span>4582 Magnolia Avenue</span>
          <p>Riverside, CA 92506</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card text-center" id="con-card">
          <i className="fa-solid fa-phone mb-3 mt-3 text-info" />
          <h3>Call Us</h3>
          <span>+1 (951) 684-9123</span>
          <p>+1 (951) 787-4534</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card text-center" id="con-card">
          <i className="fa-solid fa-location-dot mb-3 mt-3 text-info" />
          <h3>Email Us</h3>
          <span>contact@example.com</span>
          <p>support@example.com</p>
        </div>
      </div>
    </div>
    <div className="row mt-5">
      <div className="col-md-6">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117537.39462066356!2d72.53117608776466!3d22.985424815720755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85c2fc005927%3A0x918e69150ca1c935!2sTOPS%20Technologies!5e0!3m2!1sen!2sin!4v1757741540905!5m2!1sen!2sin" width="100%" height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-4" />
      </div>
      <div className="col-md-6 border p-3 rounded-4">
        <form className="row g-3">
          <div className="col-md-6">
            <label htmlFor="text" className="form-label">Name</label>
            <input type="text" placeholder="Your full name" className="form-control" id="text" />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">Email</label>
            <input type="email" placeholder="your.email@example.com" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-12 mt-3">
            <label htmlFor="inputAddress" className="form-label">Subject</label>
            <input type="text" placeholder="What's this about" className="form-control" id="inputAddress" />
          </div>
          <div className="col-md-12 mt-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
          </div>
          <div className="offset-md-4 col-8">
            <button type="submit" className="btn btn-primary w-50 rounded-4">Send message</button>
          </div>
        </form>
      </div>
      <div className="col-md-12 mt-5 mb-3">
        <div className="offset-md-5 col-md-6 icon0">
          <i className="fa-brands fa-square-twitter" />
          <i className="fa-brands fa-square-instagram" />
          <i className="fa-brands fa-square-facebook" />
          <i className="fa-brands fa-linkedin" />
          <i className="fa-brands fa-square-youtube" />
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

export default Contact
