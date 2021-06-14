import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              <i class='fas fa-terminal' /> &nbsp;Elijah C.
            </Link>
          </div>
          <div class='social-icons'>
            <Link
              class='social-icon-link github'
              to='/github-rd'
              target='_blank'
              aria-label='Github'
            >
              <i class='fab fa-github' />
            </Link>
            <Link
              class='social-icon-link email'
              to='/email-rd'
              target='_blank'
              aria-label='Mail'
            >
              <i class='fas fa-envelope' />
            </Link>
            <Link
              class='social-icon-link linkedin'
              to='/linkedin-rd'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;