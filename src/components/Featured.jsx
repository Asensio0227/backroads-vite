import React from 'react'
import Title from "./Title";
import styled from "styled-components"
import { tours } from "../data";
import Feature from "./Feature";

const Featured = () => {
  return (
    <FeaturedWrapper className='page' id="tours">
      <Title name="Featured" title="Tours" />
      <article className="section-center featured-center">
        {
          tours.map((tour) => {
            return <Feature key={tour.id} {...tour}/>
          })
        }
      </article>
    </FeaturedWrapper>
  )
}

const FeaturedWrapper = styled.section`
@media screen and (min-width: 768px) {
  .featured-center {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
}
@media screen and (min-width: 1170px) {
  .featured-center {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
`;

export default Featured
