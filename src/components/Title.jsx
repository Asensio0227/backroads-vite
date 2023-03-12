import React from 'react'
import styled from 'styled-components'

const Title = ({name,title}) => {
  return (
    <TitleWrapper>
      <h2>
      {name}
      <span>{title}</span>
      </h2>
    </TitleWrapper>
  )
}

const TitleWrapper = styled.div`
text-align: center;
text-transform: uppercase;
margin-bottom: 2rem;
padding: 1rem;
  color:var(--clr-secondary-1);
span {
  color:var(--clr-secondary-8);
}
`

export default Title
