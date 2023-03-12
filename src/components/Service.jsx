import styled from "styled-components"

const Service = ({ icon, title, text }) => {
  return (
    <ServiceWrapper>
      <span className="service-icon">
        {icon}
      </span>
      <div className="service-info">
        <h4 className="service-title">{title}</h4>
        <p className="service-text">{text}</p>
      </div>
    </ServiceWrapper>
  )
}

const ServiceWrapper = styled.article`
text-align: center;
  margin-bottom: 3rem;
.service-icon {
  background: var(--clr-primary-5);
  color: var(--clr-primary-1);
  padding: 0.5rem;
  display: inline-block;
  font-size: 2rem;
  margin-bottom: 1.5rem;
}
.service-text {
  max-width: 20rem;
  margin-left: auto;
  margin-right: auto;
}
@media screen and (min-width: 576px) {
  .service {
    margin-bottom: 0rem;
  }
}

@media screen and (min-width: 992px) {
  .services-center {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
@media screen and (min-width: 1170px) {
  .service {
    display: flex;
    text-align: left;
  }
  .service-icon {
    align-self: start;
  }
  .service-info {
    padding-left: 1rem;
  }
  .service-title {
    margin-bottom: 0.5rem;
  }
}

`;

export default Service