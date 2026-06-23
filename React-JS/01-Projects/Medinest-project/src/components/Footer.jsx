import React from 'react'

const Footer = () => {
    return (
        <div> <footer>
            <div className="container py-3 mt-5 border-top border-bottom">
                <div className="row gy-5">
                    <div className="col-lg-3 col-md-6">
                        <h5 className="fw-bold fs-4 mb-4 text-primary   ">MediNest</h5>
                        <p>A108 Adam Street <br />
                            New York, NY 535022</p>
                        <p><strong>Phone: </strong>+1 5589 55488 55</p>
                        <p><strong>Email:</strong> info@example.com</p>
                        <div className="footer-social d-flex gap-2 mt-3">
                            <a href="#" className="bg-dark text-decoration-none"><i className="fab fa-x-twitter text-white" /></a>
                            <a href="#" className="bg-primary text-decoration-none"><i className="fab fa-facebook-f text-white" /></a>
                            <a href="#" className="bg-danger text-decoration-none"><i className="fab fa-instagram text-white" /></a>
                            <a href="#" className="bg-info text-decoration-none"><i className="fab fa-linkedin-in text-white" /></a>
                        </div>
                    </div>
                    <div className="offset-lg-1 col-lg-2 col-md-6">
                        <h6 className="fw-bold fs-5 mb-3">Useful Links</h6>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-decoration-none d-block mb-2 text-muted">Home</a></li>
                            <li><a href="#" className="text-decoration-none d-block mb-2 text-muted">About</a></li>
                            <li><a href="#" className="text-decoration-none d-block mb-2 text-muted">Services</a></li>
                            <li><a href="#" className="text-decoration-none d-block mb-2 text-muted">Terms Of Service</a></li>
                            <li><a href="#" className="text-decoration-none d-block mb-2 text-muted">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <h6 className="fw-bold fs-5 mb-3">Our Services</h6>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-decoration-none d-block mb-2 text-muted">Web Design</a></li>
                            <li><a href="#" className="text-decoration-none d-block mb-2 text-muted">Web Developement</a></li>
                            <li><a href="#" className="text-decoration-none d-block mb-2 text-muted">Product Management</a></li>
                            <li><a href="#" className="text-decoration-none d-block mb-2 text-muted">Marketing</a></li>
                            <li><a href="#" className="text-decoration-none d-block mb-2 text-muted">Graphic Design</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <h6 className="fw-bold fs-5 mb-3">Hic solutasetp</h6>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-decoration-none d-block mb-2 text-muted">Molestiae accusamus
                                iure</a></li>
                            <li><a href="#" className="text-decoration-none d-block mb-2 text-muted">Excepturi dignissimos</a>
                            </li>
                            <li><a href="#" className="text-decoration-none d-block mb-2 text-muted">Suscipit distinctio</a>
                            </li>
                            <li><a href="#" className="text-decoration-none d-block mb-2 text-muted">Dilecta</a></li>
                            <li><a href="#" className="text-decoration-none d-block mb-2 text-muted">Sit quas consectetur</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <h6 className="fw-bold fs-5 mb-3">Nobis illum</h6>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-decoration-none d-block mb-2 text-muted">Ipsam</a></li>
                            <li><a href="#" className="text-decoration-none d-block mb-2 text-muted">Laudantium dolorum</a></li>
                            <li><a href="#" className="text-decoration-none d-block mb-2 text-muted">Dinera</a></li>
                            <li><a href="#" className="text-decoration-none d-block mb-2 text-muted">Trodelas</a></li>
                            <li><a href="#" className="text-decoration-none d-block mb-2 text-muted">Flexo</a></li>
                        </ul>
                    </div>
                    <div className="text-center border-top mt-4 pt-3">
                        <p className="mb-1">© Copyright <strong>MediNest</strong> All Rights Reserved</p>
                        <p className="mb-0">Designed by <a href="https://bootstrapmade.com/" target="_blank" className="text-primary fw-semibold text-decoration-none">BootstrapMade</a></p>
                    </div>
                </div>
            </div>
        </footer>

        </div>
    )
}

export default Footer
