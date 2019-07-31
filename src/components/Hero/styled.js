import styled from 'styled-components';

import backgroundImage from '../../assets/images/hero.jpg';

export const StyledHero = styled.section`
  background: url(${backgroundImage});
  background-size: cover;
  padding: 4rem 2rem;
  /* grid styles */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  align-items: center;

  > * {
    color: white;
  }

  > h1 {
    font-size: 4rem;
    padding-bottom: 1rem;
    text-shadow: #333 3px 3px;
  }

  > article > p {
    font-size: 1.5rem;
    font-weight: 200;
    text-shadow: #333 3px 3px;
  }

  > article > a {
    padding: 1rem;
    margin-top: 0.75rem;
  }

  a {
    background-color: blue;
  }
`;
