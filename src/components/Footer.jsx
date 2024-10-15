import { faGithub, faInstagram, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { width } from '@fortawesome/free-brands-svg-icons/fa42Group'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Footer() {
  return (
    <>
    <footer className="text-white pt-5 pb-4">
      <div className="container text-md-left">
        <div className="row text-md-left">
          {/* Column 1 */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-danger"><FontAwesomeIcon icon={faPlay}/>&nbsp;WatchNow</h5>
            <p>
              Welcome to watchnow here you can explore veriety of trending videos around the world.
            </p>
          </div>
          {/* Column 2 */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-danger">Links</h5>
            <p>
              <a href={'/'} className="text-white" style={{ textDecoration: 'none' }}>
                Landing page
              </a>
            </p>
            <p>
              <a href={'/home'} className="text-white" style={{ textDecoration: 'none' }}>
                Home
              </a>
            </p>
            <p>
              <a href={'/watchhistory'} className="text-white" style={{ textDecoration: 'none' }}>
                Watch history
              </a>
            </p>
            <p>
              <a href="#" className="text-white" style={{ textDecoration: 'none' }}>
                Subscription
              </a>
            </p>
          </div>
          {/* Column 3 */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-danger">Guides</h5>
            <p>
              <a href="#" className="text-white" style={{ textDecoration: 'none' }}>
                Your Account
              </a>
            </p>
            <p>
              <a href="#" className="text-white" style={{ textDecoration: 'none' }}>
                Help Center
              </a>
            </p>
            <p>
              <a href="#" className="text-white" style={{ textDecoration: 'none' }}>
                Privacy Policy
              </a>
            </p>
            <p>
              <a href="#" className="text-white" style={{ textDecoration: 'none' }}>
                Terms of Service
              </a>
            </p>
          </div>
          {/* Column 4 */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-danger">Contact</h5>
            <p> support@watchnow.com
            </p>
            <p>
            +1 (939) 985-8066
            </p>
          </div>
        </div>
        <hr className="mb-4" />
        <div className="row align-items-center">
          {/* Copyright */}
         
          {/* Social Media */}
          <div className="col-md-5 col-lg-4">
            <div className="text-md-right">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <a href="#" className="btn-floating btn-sm text-white" style={{ fontSize: '20px' }}>
                  <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="btn-floating btn-sm text-white" style={{ fontSize: '20px' }}>
                  <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="btn-floating btn-sm text-white" style={{ fontSize: '20px' }}>
                  <FontAwesomeIcon icon={faTelegram} />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="btn-floating btn-sm text-white" style={{ fontSize: '20px' }}>
                  <FontAwesomeIcon icon={faGithub} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}
export default Footer