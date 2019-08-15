import styled from 'styled-components';
import { device, size } from '../../constants/devices';
import backgroundImage from '../../assets/images/hero.jpg';

export const StyledHero = styled.section`
  background: url(${backgroundImage});

  @media ${device.laptop} {
    background: url(${backgroundImage}) center 35%;
  }

  @media (max-width: ${size.mobileS}) {
    background-attachment: scroll;
    border: 1px solid red;
  }
  border: 1px solid green;

  /* Preserve aspect ratio */
  min-width: 100%;
  min-height: 100%;

  padding: 4rem 2rem;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  > * {
    color: white;
  }

  > h1 {
    font-size: 4rem;
    padding-bottom: 1rem;
    text-shadow: #333 3px 3px;
    opacity: 0.7;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
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
    text-transform: capitalize;
  }

  a {
    background-color: blue;
  }
`;
