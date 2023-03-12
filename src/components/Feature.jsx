import styled from "styled-components";
import { FaMap } from "react-icons/fa";

const Feature = ({ image,date,title,info,location,duration,cost}) => {
  return (
    <FeatureWrapper>
      <div className="feature-img-container">
        <img src={image} className="feature-img" alt={title} />
        <p className="feature-date">{date}</p>
      </div>
      <div className="feature-info">
        <div className="feature-title">
          <h4>{title}</h4>
        </div>
        <p>{info}</p>
        <div className="feature-footer">
          <p>
            <span>
              <FaMap/>
            </span>
            { location}
          </p>
          <p>from ${cost}</p>
          <p>{duration} days</p>
        </div>
      </div>
    </FeatureWrapper>
  )
}

const FeatureWrapper = styled.article`
  transition: var(--transition);
  background: var(--clr-grey-10);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
    &:hover {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transform: scale(1.02);
}
.feature-img-container {
  position: relative;
}
.feature-img {
  height: 15rem;
  object-fit: cover;
}
.feature-date {
  position: absolute;
  right: 0;
  bottom: 0;
  background: var(--clr-primary-8);
  color: var(--clr-primary-1);
  text-transform: capitalize;
  padding: 0.25rem 0.5rem;
  margin-bottom: 0;
}
.feature-info {
  padding: 1.25rem 1.5rem;
}
/* additional css for different layout*/
.feature-title {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.feature-title p,
.feature-title h4 {
  margin-bottom: 0.75rem;
  line-height: 1.25;
}
.feature-title p {
  color: var(--clr-grey-7);
}
/* end of additional css for different layout*/
.feature-footer {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
}
.feature-footer p {
  line-height: 0;
  margin-bottom: 0;
  text-transform: capitalize;
  color: var(--clr-primary-5);
}
.feature-footer p span {
  margin-right: 0.25rem;
}
.feature-btn {
  text-align: center;
}
`;

export default Feature;