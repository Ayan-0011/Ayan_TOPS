import React from 'react'

const Home = () => {
    return (
        <div className='container'>
                {/*main page*/}
                <div className="row mt-3">
                    <div className="col-md-6 col-sm-12 main-img">
                        <img src="img/staff-8.webp" className="img mt-5" width="85%" />
                    </div>
                    {/*main part 2*/}
                    <div className="col-md-6 col-sm-12">
                        <span className="badge rounded-pill bg-primary mt-4" style={{ fontSize: 18 }}>Trusted Healthcare
                            Provider</span>
                        <h1 className="display-3" style={{ fontWeight: 500 }}> Excellence in Medical Care Since 1985</h1>
                        <p className="mt-4" style={{ fontSize: 21, fontWeight: 300 }}><small>Mauris blandit aliquet elit, eget
                            tincidunt nibh pulvinar a. Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo,
                            lacinia eget consectetur sed, convallis at tellus.</small></p>
                        <div className="row mt-5">
                            <div className="col-md-4 col-sm-12">
                                <div className="card mb-3" id="card-1">
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src="img/award.svg" className="img-fluid rounded-start ms-3 mt-3 p-2" style={{ width: 55, border: '2px solid', height: 80, backgroundColor: 'rgba(19, 159, 177, 0.292)', color: 'rgb(63, 170, 184)' }} />
                                        </div>
                                        <div className="col-md">
                                            <div className="card-body">
                                                <h5 className="card-title">35+</h5>
                                                <p className="card-text">Years Experience</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-3" id="card-1">
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src="img/people-fill.svg" className="img-fluid rounded-start ms-3 mt-3 p-2" style={{ width: 55, border: '2px solid', height: 80, backgroundColor: 'rgba(19, 159, 177, 0.292)', color: 'rgb(63, 170, 184)' }} />
                                        </div>
                                        <div className="col-md">
                                            <div className="card-body">
                                                <h5 className="card-title">150+</h5>
                                                <p className="card-text">Medical Specialists</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-3" id="card-1">
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src="img/geo-alt-fill.svg" className="img-fluid rounded-start ms-3 mt-3 p-2" style={{ width: 55, border: '2px solid', height: 80, backgroundColor: 'rgba(19, 159, 177, 0.292)', color: 'rgb(63, 170, 184)' }} />
                                        </div>
                                        <div className="col-md">
                                            <div className="card-body">
                                                <h5 className="card-title">12</h5>
                                                <p className="card-text">Clinic Locations</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4">
                            <button type="button" className="btn btn-primary me-3 " style={{ width: 180, height: 50 }}>schedule
                                Consulation</button>
                            <button type="button" className="btn btn-outline-info" style={{ width: 180, height: 50, color: 'black' }}> <i className="bi bi-play-circle-fill" /> Watch
                                our story</button>
                        </div>
                        <div className="row mt-3 mb-5">
                            <div className="col-md-4 p-2 col-sm-5" style={{ fontSize: 18 }}>
                                <i className="bi bi-calendar-check text-primary" />
                                Find Available Times
                            </div>
                            <div className="col-md-4 p-2 col-sm-5" style={{ fontSize: 18 }}>
                                <i className="bi bi-chat-dots text-primary" /> Chat
                                with Support</div>
                            <div className="col-md-4 p-2 col-sm-5" style={{ fontSize: 18 }}>
                                <i className="bi bi-journal-medical text-primary" /> Patient Portal</div>
                        </div>
                    </div>
                </div>
                {/*second page*/}
                <div className="row mt-3 mb-4">
                    <div className="offset-md-2 col-md-8 col-sm-12 text-center">
                        <h1 className="display-5" style={{ fontWeight: 700, color: 'rgb(15, 62, 62)' }}>Excellence in Healthcare Since
                            1985</h1>
                        <p className="h5" style={{ fontWeight: 300 }}>We are committed to providing world-class medical care through
                            <br /> innovation, compassion, and unwavering dedication to our<br /> patients' wellbeing and recovery.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5 pt-3 col-sm-12">
                        <div className="img-card">
                            <img src="img/facilities-6.webp" />
                        </div>
                    </div>
                    <div className="col-md-3 pt-3 col-sm-12">
                        <div className="first">
                            <img src="img/surgery-2.webp" width="100%" />
                        </div>
                        <div className="two">
                            <img src="img/consultation-3.webp" width="100%" />
                        </div>
                    </div>
                    <div className="col-md-4 mt-3">
                        <div className="box">
                            <div className="row">
                                <div className="col-md-2">
                                    <i className="bi bi-heart-pulse-fill" />
                                </div>
                                <div className="col-md-10">
                                    <h4>Patient-Centered Approach</h4>
                                    <p>Every treatment plan is carefully customized to meet individual patient needs and medical
                                        history.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="title">
                                <div className="col-md-12 d-flex">
                                    <i className="bi bi-check-circle-fill" />
                                    <p style={{ marginLeft: 10 }}>Advanced diagnostic technology and imaging</p>
                                </div>
                                <div className="row mt-1">
                                    <div className="col-md-12 d-flex">
                                        <i className="bi bi-check-circle-fill" />
                                        <p style={{ marginLeft: 10 }}>Board-certified physicians and specialists</p>
                                    </div>
                                </div>
                                <div className="row mt-1">
                                    <div className="col-md-12 d-flex">
                                        <i className="bi bi-check-circle-fill" />
                                        <p style={{ marginLeft: 10 }}>Comprehensive rehabilitation programs</p>
                                    </div>
                                </div>
                                <div className="row mt-1">
                                    <div className="col-md-12 d-flex">
                                        <i className="bi bi-check-circle-fill" />
                                        <p style={{ marginLeft: 10 }}>24/7 emergency and critical care services</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="num">
                            <div className="row">
                                <div className="col-md-5 col-5">
                                    <span style={{ paddingLeft: 45, fontSize: 25, color: 'rgb(39, 166, 166)' }}>98%</span>
                                    <p style={{ fontWeight: 400 }}>Patient Satisfaction</p>
                                </div>
                                <div className="col-md-5 col-6">
                                    <span style={{ paddingLeft: 45, fontSize: 25, color: 'rgb(39, 166, 166)' }}>35K+</span>
                                    <p style={{ paddingLeft: 20, fontWeight: 400 }}>Lives Improved</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-6 batan">
                                <button type="button" className="btn btn-primary">Explore our services</button>
                            </div>
                            <div className="col-md-6 col-6 batan2">
                                <button type="button" className="btn btn-outline-info">schedule Consulation</button>
                            </div>
                        </div>
                    </div>
                    {/*third page*/}
                    <div className="row mt-5">
                        <div className="col-md-12 text-center">
                            <h2 style={{ fontFamily: '"Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif' }}>
                                Featured Departments</h2>
                            <p style={{ fontWeight: 50 }}>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
                                consectetur velit</p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className=" offset-md-1 col-md-5">
                            <p style={{ color: 'rgb(20, 153, 153)', fontSize: 20 }}>Emergency Medicine</p>
                            <h1>24/7 Emergency Care Services</h1>
                            <p className="mt-4 mb-3" style={{ fontWeight: 400, fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', fontSize: 17 }}>Sed
                                ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                                dicta sunt explicabo</p>
                            <div className="con">
                                <div className="col-md-12 mt-5 d-flex">
                                    <i className="bi bi-check-circle-fill" />
                                    <p style={{ marginLeft: 10 }}>24/7 Emergency Response</p>
                                </div>
                                <div className="col-md-12 d-flex">
                                    <i className="bi bi-check-circle-fill" />
                                    <p style={{ marginLeft: 10 }}>Advanced Life Support</p>
                                </div>
                                <div className="col-md-12 d-flex">
                                    <i className="bi bi-check-circle-fill" />
                                    <p style={{ marginLeft: 10 }}>Trauma Care Specialists</p>
                                </div>
                            </div>
                            <div className="link">
                                <a href="#">Learn More <i className="fa-solid fa-arrow-right" /> </a>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="img-card2">
                                <img src="img/emergency-3.webp" width="100%" />
                            </div>
                        </div>
                    </div>
                    {/*fourth page*/}
                    <div className="row mt-5">
                        <div className="offset-md-1 col-md-3 p-3">
                            <div className="card" id="card-2">
                                <div className="icon"><i className="bi bi-heart-pulse-fill" /></div>
                                <div className="card-body">
                                    <h3 className="card-title">Cardiology</h3>
                                    <p className="card-text">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                                        fugit, sed quia consequuntur magni dolores.</p>
                                    <div className="row">
                                        <div className="col-md-6 col-6 dr">
                                            <span>15+</span>
                                            <p>Specialists</p>
                                        </div>
                                        <div className="col-md-6 col-6 dr">
                                            <span>500+</span>
                                            <p>Procedures</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 p-3">
                            <div className="card" id="card-2">
                                <div className="icon"><i className="fa-solid fa-brain" /></div>
                                <div className="card-body">
                                    <h3 className="card-title">Neurology</h3>
                                    <p className="card-text">Eos qui ratione voluptatem sequi nesciunt neque porro quisquam est, qui
                                        dolorem ipsum quia dolor sit amet..</p>
                                    <div className="row">
                                        <div className="col-md-6 col-6 dr">
                                            <span>8+</span>
                                            <p>Specialists</p>
                                        </div>
                                        <div className="col-md-6 col-6 dr">
                                            <span>200+</span>
                                            <p>Treatments</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 p-3">
                            <div className="card" id="card-2">
                                <div className="icon"><i className="fa-solid fa-scissors" /></div>
                                <div className="card-body">
                                    <h3 className="card-title">Surgery</h3>
                                    <p className="card-text">Consectetur adipisci velit sed quia non numquam eius modi tempora
                                        incidunt ut labore et dolore magnam aliquam.</p>
                                    <div className="row">
                                        <div className="col-md-6 col-6 dr">
                                            <span>12+</span>
                                            <p>Surgeons</p>
                                        </div>
                                        <div className="col-md-6 col-6 dr">
                                            <span>1000+</span>
                                            <p>Operations</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5 mb-5">
                        <div className="offset-md-1 col-md-3  p-3">
                            <div className="card" id="card-2">
                                <div className="icon"><i className="fa-solid fa-person-circle-check" /></div>
                                <div className="card-body">
                                    <h3 className="card-title">Pediatrics</h3>
                                    <p className="card-text">Quaerat voluptatem ut enim ad minima veniam quis nostrum exercitationem
                                        ullam corporis suscipit laboriosam.</p>
                                    <div className="row">
                                        <div className="col-md-6 col-6 dr">
                                            <span>10+</span>
                                            <p>Pediatricians</p>
                                        </div>
                                        <div className="col-md-6 col-6 dr">
                                            <span>2000+</span>
                                            <p>Young Patients</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 p-3">
                            <div className="card" id="card-2">
                                <div className="icon"><i className="fa-solid fa-eye" /></div>
                                <div className="card-body">
                                    <h3 className="card-title">Ophthalmology</h3>
                                    <p className="card-text">Nisi ut aliquid ex ea commodi consequatur quis autem vel eum iure
                                        reprehenderit qui in ea voluptate velit esse.</p>
                                    <div className="row">
                                        <div className="col-md-6 col-6 dr">
                                            <span>6+</span>
                                            <p>Eye Doctors</p>
                                        </div>
                                        <div className="col-md-6 col-6 dr">
                                            <span>800+</span>
                                            <p>Eye Exam</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 p-3">
                            <div className="card" id="card-2">
                                <div className="icon"><i className="fa-solid fa-bandage" /></div>
                                <div className="card-body">
                                    <h3 className="card-title">Dermatology</h3>
                                    <p className="card-text">Quam nihil molestiae consequatur vel illum qui dolorem eum fugiat quo
                                        voluptas lorum nulla pariatur at vero eos.</p>
                                    <div className="row">
                                        <div className="col-md-6 col-6 dr">
                                            <span>7+</span>
                                            <p>Dermatologist</p>
                                        </div>
                                        <div className="col-md-6 col-6 dr">
                                            <span>600+</span>
                                            <p style={{ fontSize: 15 }}>Skin Treatments</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3 mb-5">
                        <div className="offset-md-1 col-md-10 text-center bg-light pt-4">
                            <h2 className="mb-3">Explore All Our Medical Departments</h2>
                            <p>Et accusamus et iusto odio dignissimos ducimus qui blanditiis <br />
                                praesentium voluptatum deleniti atque corrupti quos dolores.</p>
                            <button type="button" className="btn batan3 mt-4 mb-3">View All Departments</button>
                        </div>
                    </div>
                    {/*fifth page*/}
                    <div className="row">
                        <div className="col-md-12 text-center mt-3">
                            <h1 style={{ fontFamily: '"Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif' }}>
                                Featured Services</h1>
                            <p style={{ fontWeight: 400 }}>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
                                consectetur velit</p>
                        </div>
                    </div>
                    <div className="row mt-5 mb-5">
                        <div className="col-md-4">
                            <div className="card mb-3 cards">
                                <div className="imageee"><img src="img/cardiology-2.webp" className="card-img-top" width="100%" /></div>
                                <div className="icon2"><i className="bi bi-heart-pulse-fill" /></div>
                                <div className="card-body">
                                    <h5 className="card-title">Cardiology Excellence</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
                                        ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
                                    <p className="card-text">
                                    </p><div className="link">
                                        <a href="#">Learn More <i className="fa-solid fa-arrow-right" /> </a>
                                    </div>
                                    <p />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-3 cards">
                                <div className="imageee"><img src="img/neurology-3.webp" className="card-img-top" width="100%" /></div>
                                <div className="icon2"><i className="fa-solid fa-brain" /></div>
                                <div className="card-body">
                                    <h5 className="card-title">Neurology Care</h5>
                                    <p className="card-text">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
                                    <p className="card-text">
                                    </p><div className="link">
                                        <a href="#">Learn More <i className="fa-solid fa-arrow-right" /> </a>
                                    </div>
                                    <p />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-3 cards">
                                <div className="imageee"><img src="img/orthopedics-1.webp" className="card-img-top" width="100%" /></div>
                                <div className="icon2"><i className="fa-solid fa-bone" /></div>
                                <div className="card-body">
                                    <h5 className="card-title">Orthopedic Surgery</h5>
                                    <p className="card-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                                    <p className="card-text">
                                    </p><div className="link">
                                        <a href="#">Learn More <i className="fa-solid fa-arrow-right" /> </a>
                                    </div>
                                    <p />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-3 cards">
                                <div className="imageee"><img src="img/pediatrics-4.webp" className="card-img-top" width="100%" /></div>
                                <div className="icon2"><i className="fa-solid fa-person-circle-check" /></div>
                                <div className="card-body">
                                    <h5 className="card-title">Pediatric Care</h5>
                                    <p className="card-text">Sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut
                                        perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
                                    <p className="card-text">
                                    </p><div className="link">
                                        <a href="#">Learn More <i className="fa-solid fa-arrow-right" /> </a>
                                    </div>
                                    <p />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-3 cards">
                                <div className="imageee"><img src="img/oncology-2.webp" className="card-img-top" width="100%" /></div>
                                <div className="icon2"><i className="fa-solid fa-bone" /></div>
                                <div className="card-body">
                                    <h5 className="card-title">Oncology Treatment</h5>
                                    <p className="card-text">At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                        blanditiis praesentium voluptatum corrupti quos dolores et quas molestias.</p>
                                    <p className="card-text">
                                    </p><div className="link">
                                        <a href="#">Learn More <i className="fa-solid fa-arrow-right" /> </a>
                                    </div>
                                    <p />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-3 cards">
                                <div className="imageee"><img src="img/laboratory-3.webp" className="card-img-top" width="100%" /></div>
                                <div className="icon2"><i className="fa-solid fa-flask" /></div>
                                <div className="card-body">
                                    <h5 className="card-title">Laboratory Services</h5>
                                    <p className="card-text">Temporibus autem quibusdam et aut officiis debitis aut rerum
                                        necessitatibus saepe eveniet repudiandae sint et molestiae non recusandae.</p>
                                    <p className="card-text">
                                    </p><div className="link">
                                        <a href="#">Learn More <i className="fa-solid fa-arrow-right" /> </a>
                                    </div>
                                    <p />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*six page*/}
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h2 style={{ fontFamily: '"Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif' }}>
                                Find A Doctor</h2>
                            <p style={{ fontWeight: 300 }} className="mb-4">Necessitatibus eius consequatur ex aliquid fuga eum quidem
                                sint consectetur velit</p>
                            <h1 style={{ fontSize: 35 }} className="mb-3">Discover Your Ideal Medical Specialist</h1>
                            <p style={{ fontWeight: 300 }}>Connect with our network of certified healthcare professionals across
                                all <br />medical disciplines</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="offset-md-1 col-md-10">
                            <div className="info">
                                <div className="row  mt-3 p-3">
                                    <div className="col-md-3 p-2">
                                        <p>Practitioner Name</p>
                                        <div className="form-floating mb-3">
                                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                            <label htmlFor="floatingInput">Serch by name....</label>
                                        </div>
                                    </div>
                                    <div className="col-md-4 p-2">
                                        <p>Medical Specialty</p>
                                        <div className="form-floating">
                                            <select className="form-select" id="floatingSelect">
                                                <option selected>Select specialty</option>
                                                <option value={1}>Cardiovascular Medicine</option>
                                                <option value={2}>Neurological Sciences</option>
                                                <option value={3}>Orthopedic Surgery</option>
                                                <option value={4}>Pediatric Medicine</option>
                                                <option value={5}>Dermatological Care</option>
                                                <option value={6}>Oncological Treatment</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-4 p-2">
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
                                    <div className="col-md-1 pt-3 mt-3 col-12">
                                        <div className="but">
                                            <button type="button" className="btn btn-outline-info w-100 text-center">
                                                <i className="fa-solid fa-arrow-right" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*seventh page*/}
                    <div className="row mt-5">
                        <div className="col-md-4 p-3">
                            <div className="card" id="card-3">
                                <div className="container">
                                    <div className="profile mt-3">
                                        <img src="img/staff-1.webp" className="card-img" />
                                        <h5>Dr. Jennifer Morgan</h5>
                                        <p>Senior Cardiologist</p>
                                        <span className="badge rounded-pill bg-primary">MD, FACC</span>
                                        <p>18 years</p>
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <p>4.9 <small style={{ fontWeight: 300 }}>(142 patients) </small></p>
                                        <div className="row g-2">
                                            <div className="d-grid offset-md-1 col-md-5">
                                                <button className="btn btn-outline-dark" type="button">Profile</button>
                                            </div>
                                            <div className="d-grid col-md-5">
                                                <button className="btn btn-primary" type="button">Consult</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 p-3">
                            <div className="card" id="card-3-0">
                                <div className="container">
                                    <div className="profile mt-3">
                                        <img src="img/staff-3.webp" className="card-img" />
                                        <h5>Dr. Robert Kim</h5>
                                        <p>Neurosurgeon</p>
                                        <span className="badge rounded-pill bg-primary">MD, PhD</span>
                                        <p>24 years</p>
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star-half" />
                                        <p>4.8 <small style={{ fontWeight: 300 }}>(198 patients) </small></p>
                                        <div className="row g-2">
                                            <div className="d-grid offset-md-1 col-md-5">
                                                <button className="btn btn-outline-dark" type="button">Profile</button>
                                            </div>
                                            <div className="d-grid col-md-5">
                                                <button className="btn btn-primary" type="button">Consult</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 p-3">
                            <div className="card" id="card-3-0">
                                <div className="container">
                                    <div className="profile mt-3">
                                        <img src="img/staff-5.webp" className="card-img" />
                                        <h5>Dr. Sarah Thompson</h5>
                                        <p>Senior Cardiologist</p>
                                        <span className="badge rounded-pill bg-primary">MD, FACC</span>
                                        <p>18 years</p>
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <p>4.9 <small style={{ fontWeight: 300 }}>(142 patients) </small></p>
                                        <div className="row g-2">
                                            <div className="d-grid offset-md-1 col-md-5">
                                                <button className="btn btn-outline-dark" type="button">Profile</button>
                                            </div>
                                            <div className="d-grid col-md-5">
                                                <button className="btn btn-primary" type="button">Consult</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 p-3">
                            <div className="card" id="card-3-0">
                                <div className="container">
                                    <div className="profile mt-3">
                                        <img src="img/staff-7.webp" className="card-img" />
                                        <h5>Dr. Michael Rivera</h5>
                                        <p>Orthopedic Surgeon</p>
                                        <span className="badge rounded-pill bg-primary">MD, FAAOS</span>
                                        <p>20 years</p>
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star-half" />
                                        <p>4.7 <small style={{ fontWeight: 300 }}>(134 patients) </small></p>
                                        <div className="row g-2">
                                            <div className="d-grid offset-md-1 col-md-5">
                                                <button className="btn btn-outline-dark" type="button">Profile</button>
                                            </div>
                                            <div className="d-grid col-md-5">
                                                <button className="btn btn-primary" type="button">Consult</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 p-3">
                            <div className="card" id="card-3-0">
                                <div className="container">
                                    <div className="profile mt-3">
                                        <img src="img/staff-9.webp" className="card-img" />
                                        <h5>Dr. Lisa Garcia</h5>
                                        <p>Dermatologist</p>
                                        <span className="badge rounded-pill bg-primary">MD, FACC</span>
                                        <p>18 years</p>
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star-half" />
                                        <i className="fa-solid fa-star-half" />
                                        <p>4.6 <small style={{ fontWeight: 300 }}>(85 patients) </small></p>
                                        <div className="row g-2">
                                            <div className="d-grid offset-md-1 col-md-5">
                                                <button className="btn btn-outline-dark" type="button">Profile</button>
                                            </div>
                                            <div className="d-grid col-md-5">
                                                <button className="btn btn-primary" type="button">Consult</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 p-3">
                            <div className="card" id="card-3-0">
                                <div className="container">
                                    <div className="profile mt-3">
                                        <img src="img/staff-12.webp" className="card-img" />
                                        <h5>Dr. Daniel Wong</h5>
                                        <p>Oncology Expert</p>
                                        <span className="badge rounded-pill bg-primary">MD, FASCO</span>
                                        <p>21 years</p>
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <p>4.9 <small style={{ fontWeight: 300 }}>(152 patients) </small></p>
                                        <div className="row g-2">
                                            <div className="d-grid offset-md-1 col-md-5">
                                                <button className="btn btn-outline-dark" type="button">Profile</button>
                                            </div>
                                            <div className="d-grid col-md-5">
                                                <button className="btn btn-primary" type="button">Consult</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-12 d-block mx-auto mt-4 mb-3">
                            <button type="button" className="btn btn-outline-info">Browse Complete Directory &gt;</button>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <h1 style={{ fontSize: 45 }}>Exceptional Care for Your Health Journey</h1>
                            <p style={{ fontSize: 20, marginTop: 30 }}>Discover comprehensive healthcare services delivered
                                with compassion and expertise. Our dedicated team is committed to providing personalized medical
                                care that puts you first.</p>
                            <div className="batan2">
                                <button type="button" className="btn btn-info me-3">schedule Consulation</button>
                                <button type="button" style={{ border: 'none', backgroundColor: 'aliceblue' }}>Explore
                                    services</button>
                            </div>
                        </div>
                        <div className="col-md-6 mt-3">
                            <img src="img/showcase-2.webp" width="100%" style={{ borderRadius: 15 }} />
                        </div>
                    </div>
                    <div className="rate">
                        <div className="row mt-5 text-center">
                            <hr className="mb-4" />
                            <div className="col-md-3">
                                <span>25+</span>
                                <p>Years Experience</p>
                            </div>
                            <div className="col-md-3">
                                <span>15K+</span>
                                <p>Happy Patients</p>
                            </div>
                            <div className="col-md-3">
                                <span>50+</span>
                                <p>Medical Experts</p>
                            </div>
                            <div className="col-md-3">
                                <span>24/7</span>
                                <p>Emergency Care</p>
                            </div>
                            <hr className="mt-4" />
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-4 text-center p-2">
                            <div className="card" id="card-4">
                                <div className="icon3 mt-4"><i className="bi bi-heart-pulse-fill" /></div>
                                <div className="card-body">
                                    <h3 className="card-title">Cardiology Excellence</h3>
                                    <p className="card-text mt-3">Advanced cardiac care with state-of-the-art diagnostic equipment
                                        and experienced cardiologists dedicated to heart health.</p>
                                    <div className="link mb-5">
                                        <a href="#">Learn More <i className="fa-solid fa-arrow-right" /> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center p-2">
                            <div className="card" id="card-4">
                                <div className="icon3 mt-4"><i className="fa-solid fa-brain" /></div>
                                <div className="card-body">
                                    <h3 className="card-title">Neurology Center</h3>
                                    <p className="card-text mt-3">Comprehensive neurological services including diagnosis and
                                        treatment of brain, spine, and nervous system conditions.</p>
                                    <div className="link mb-5">
                                        <a href="#">Learn More <i className="fa-solid fa-arrow-right" /> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center p-2">
                            <div className="card" id="card-4">
                                <div className="icon3 mt-4"><i className="fa-solid fa-shield-halved" /></div>
                                <div className="card-body">
                                    <h3 className="card-title">Preventive Care</h3>
                                    <p className="card-text mt-3"> Proactive health screenings and wellness programs designed to
                                        prevent illness and maintain optimal health.</p>
                                    <div className="link mb-5">
                                        <a href="#">Learn More <i className="fa-solid fa-arrow-right" /> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5 mb-4">
                        <div className="col-md-12" style={{ backgroundColor: 'rgb(35, 189, 189)', borderRadius: 12 }}>
                            <div className="row text-center pt-4">
                                <div className="col-md-2 col-5">
                                    <div className="icn  pt-2" style={{ display: 'flex', justifyContent: 'center' }}>
                                        <i className="fa-solid fa-phone" />
                                    </div>
                                </div>
                                <div className="col-md-7 col-12">
                                    <h2>Need Immediate Assistance?</h2>
                                    <p>Our medical team is available around the clock for urgent consultations and emergency
                                        support.</p>
                                </div>
                                <div className="col-md-2">
                                    <button type="button" className="btn btn-light mt-3"><i className="fa-solid fa-phone" /> (555)
                                        123-4567</button>
                                </div>
                                <div className="col-md-1 pt-3">
                                    <a href="#" style={{ color: 'white' }}> Directions</a>
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
                    <hr />
                </div>
            </div>
  )
}

export default Home
