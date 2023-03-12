import React from 'react'
import Title from "./Title";
import styled from "styled-components"
import aboutImg from "../assets/images/about.jpeg";

const About = () => {
  return (
    <AboutWrapper id="about" className='section-center page'>
      <Title name="About" title="us" />
     <div className='section-center about-center'>
        <div className='about-img'>
          <img src={aboutImg} className='about-photo' alt='awesome beach' />
        </div>
        <article className='about-info'>
          <h3>explore the difference</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <a href='#' className='btn'>
            read more
          </a>
        </article>
      </div>
    </AboutWrapper>
  )
};

const AboutWrapper = styled.section`
.about-img,
.about-info {
  margin-bottom: 2rem;
}

@media screen and (min-width: 992px) {
  .about-center {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
  }
  .about-img,
  .about-info {
    margin-bottom: 0;
  }
}
@media screen and (min-width: 1170px) {
  .about-img::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border: 0.5rem solid var(--clr-primary-5);
    box-sizing: border-box;
    top: -1.5rem;
    left: -1.5rem;
  }

  .about-img {
    position: relative;
  }
  .about-photo {
    position: relative;
  }
}
.btn {
  display: inline-block;
}
`;

export default About
