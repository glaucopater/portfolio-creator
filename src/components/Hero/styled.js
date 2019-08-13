import styled from 'styled-components';
import { device } from '../../constants/devices';
import backgroundImage from '../../assets/images/hero.jpg';

export const StyledHero = styled.section`
  background: url(${backgroundImage});
  background-size: cover;

  @media ${device.laptop} {
    background: url(${backgroundImage}) center 35%;
    background-size: cover;
  }

  padding: 4rem 2rem;
  /* grid styles */
  display: grid;
  align-items: center;

  > * {
    color: white;
  }

  > h1 {
    font-size: 4rem;
    padding-bottom: 1rem;
    text-shadow: #333 3px 3px;
    opacity: 0.7;
  }

  > article > p {
    font-size: 1.5rem;
    text-shadow: #333 3px 3px;
    text-transform: capitalize;
    display: inline-grid;
  }

  > article > a {
    font-size: 1.5rem;
    padding: 1rem;
    margin-top: 0.75rem;
    margin-right: 1rem;
  }

  a {
    background-color: blue;
  }
`;
