import React from 'react'

function AFooter() {
  return (

    <footer className="bg-dark" id="tempaltemo_footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 pt-5">
            <h2 className="h2 text-success border-bottom pb-3 border-light logo">Zay Shop</h2>
            <ul className="list-unstyled text-light footer-link-list">
              <li>
                <i className="fas fa-map-marker-alt fa-fw" />
                123 Consectetur at ligula 10660
              </li>
              <li>
                <i className="fa fa-phone fa-fw" />
                <a className="text-decoration-none" href="tel:010-020-0340">010-020-0340</a>
              </li>
              <li>
                <i className="fa fa-envelope fa-fw" />
                <a className="text-decoration-none" href="mailto:info@company.com">info@company.com</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 pt-5">
            
          </div>
          <div className="col-md-4 pt-5">
          
          </div>
        </div>
        <div className="row text-light mb-4">
          <div className="col-12 mb-3">
            <div className="w-100 my-3 border-top border-light" />
          </div>
    
        </div>
      </div>
      <div className="w-100 bg-black py-3">
        <div className="container">
          <div className="row pt-2">
            <div className="col-12">
              <p className="text-left text-light">
                Copyright © 2021 Company Name
                | Designed by <a rel="sponsored" href="https://templatemo.com" target="_blank">TemplateMo</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>


  )
}

export default AFooter