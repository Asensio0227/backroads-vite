import React from 'react'
import Title from "./Title";
import styled from "styled-components"
import { services } from "../data";
import Service from "./Service";

const Services = () => {
  return (
    <ServicesWrapper className="page services" id="services">
      <Title name="our" title="services" />
      <div className='section-center services-center'>
        {services.map((service) => {
          return (
            <Service key={service.id} {...service}/> 
          )
        })}
      </div>
    </ServicesWrapper>
  )
}

const ServicesWrapper = styled.section`
background: var(--clr-grey-10);
.services-center{
  display:grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}
@media screen and (min-width: 576px) {
  .services-center {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
}
@media screen and (min-width: 992px) {
  .services-center {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
`;

export default Services
