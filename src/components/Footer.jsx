import React from 'react'
import styled from "styled-components";
import PageLinks from './PageLinks'
import SocialLink from './SocialLink'
import { socialLinks } from '../data';

const Footer = () => {
  
  return (
    <FooterWrapper>
     <PageLinks parentClass='footer-links' itemClass='footer-link' />
      <ul className='footer-icons'>
        {socialLinks.map((link) => {
          return <SocialLink key={link.id} {...link} itemClass='footer-icon' />
        })}
      </ul>
      <p className='copyright'>
        copyright &copy; Backroads travel tours company
        <span id='date'>{new Date().getFullYear()}</span>. all rights reserved
      </p>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  background: var(--clr-grey-1);
  text-align: center;
  /* padding-left: 2rem;
  padding-right: 2rem; */
  padding: 2rem;
.footer-links,
.footer-icons {
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}
.footer-link {
  color: var(--clr-white);
  text-transform: capitalize;
  font-size: 1rem;
  margin-right: 1rem;
  letter-spacing: var(--spacing);
  transition: var(--transition);
}
.footer-link:hover {
  color: var(--clr-primary-5);
}
.footer-icon {
  font-size: 2rem;
  margin-right: 1rem;
  color: var(--clr-white);
  transition: var(--transition);
}
.footer-icon:hover {
  color: var(--clr-primary-5);
}
.copyright {
  text-transform: capitalize;
  letter-spacing: var(--spacing);
  color: var(--clr-white);
}
.copyright span {
  margin-left: 0.5rem;
}
`;

export default Footer
