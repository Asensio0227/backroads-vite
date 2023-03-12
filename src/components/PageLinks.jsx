import { pageLinks } from '../data'
import PageLink from './PageLink'
import styled from 'styled-components'

const PageLinks = ({ parentClass, itemClass }) => {
  return (
    <PageWrapper className={parentClass} id='nav-links'>
      {pageLinks.map((link) => {
        return <PageLink key={link.id} link={link} itemClass={itemClass} />
      })}
    </PageWrapper>
  )
}

const PageWrapper = styled.ul``;

export default PageLinks
