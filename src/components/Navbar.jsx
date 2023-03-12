import React, { useEffect, useRef,useState } from 'react'
import logo from "../logo.jpg";
import { FaBars } from "react-icons/fa"
import styled from "styled-components";
import { pageLinks, socialLinks } from "../data";

const Navbar = () => {
  const linksRef = useRef(null);
  const linksContainerRef = useRef(null);
  const [showLinks, setShowLinks] = useState(false);

  useEffect(() => {
    const containerHeight = linksRef.current.getBoundingClientRect().height;
    console.log(containerHeight);

    if (showLinks) {
      linksContainerRef.current.style.height = `${containerHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  },[showLinks]);

  return (
    <NavWrapper>
      <article className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="skycoding" className="logo" />
          <button
            onClick={()=>setShowLinks(!showLinks)}
            className="nav-btn btn"
          >
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="nav-links"ref={linksRef}>
            {pageLinks.map((link) => {
              const { href, text, id } = link;
              return (
                <li key={id}>
                  <a href={href}>
                    {text}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
        <ul className="social-icons ">
          {
            socialLinks.map((item) => {
              return (
                <li key={item.id}>
                  <a href={item.href}>
                    {item.icon}
                  </a>
                </li>
              )
            })
          }
        </ul>
      </article>
      </NavWrapper>
  );
}

const NavWrapper = styled.nav`
position:sticky;
top:0;
left:0;
z-index:2;
height: 4rem;
align-items: center;
display: flex;
background: var(--clr-white);
box-shadow: var(--shadow-4);
.nav-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav-center {
  width:90vw;
  max-width: 1170px;
  margin: 0 auto;
}
.logo {
  width:3rem;
  height: 3rem;
  object-fit: contain;
  border-radius: 2rem;
  animation: 2s bounce infinite;
}
.nav-toggle {
  border: none;
  outline: none;
  &:hover {
    transform: scale(1.2);
  }
}
.links-container {
  /* height: 0 !important; */
  overflow: hidden;
  transition: var(--transition);
}
.nav-links a{
  color: var(--clr-secondary-3);
  font-size: 1.1rem;
  display: block;
  margin: .5rem 0;
  padding: 1rem;
  text-transform: capitalize;
  font-weight: 400;
  transition: var(--transition);
  cursor: pointer;
  &:hover {
    color: var(--clr-secondary-5);
    background: var(--clr-primary-10);
  }
}
.social-icons {
  display: none;
}
@media screen and (min-width:992px){
  .nav-btn {
    display:none;
  }
  .nav-center {
    max-width: var(--max-width);
    width: 90vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }
   .nav-header {
    padding: 0;
  }
  .links-container {
    height: auto !important;
  }
    .nav-links {
      display: flex;
    }
      .nav-links a{
         margin: .5rem 0;
    padding: 1rem;
        &:hover{
    background: transparent;
        }
      } 
      .social-icons {
        display: flex;
        a {
          margin-right: 1rem;
          color: var(--clr-secondary-3);
          padding: 1rem;
        }
      }
    }

`;

export default Navbar
