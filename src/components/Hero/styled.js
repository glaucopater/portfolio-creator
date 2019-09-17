import styled from 'styled-components';
import { device, size } from '../../constants/devices';
import backgroundImage from '../../assets/images/headers/hero_1.jpg';

export const StyledHeroHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;

  > h1 {
    @media (max-width: ${size.mobileL}) {
      font-size: 2rem;
    }
    font-size: 4rem;
    text-shadow: #333 3px 3px;
    opacity: 0.7;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    ${({ isSmall }) => isSmall && `font-size: 2rem;`}
  }
`;

export const StyledHero = styled.section`
  background-size: cover;
  ${({ isSmall }) => !isSmall && `background: url(${backgroundImage});`}

  @media ${device.laptop} {
  ${({ isSmall }) =>
    !isSmall &&
    `
    background: url(${backgroundImage}) center 35%;
    background-size: cover;
    `}    
  }

  @media (max-width: ${size.mobileL}) {
    max-height: 450px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 15%;
    padding: 0.5rem;
  }

  padding: 2rem 2rem;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  > * {
    color: white;
  }

  > article {
    display: flex;
    flex-direction: row;
    align-items: baseline;
  }

  > article > p {
    @media (max-width: ${size.mobileL}) {
      font-size: 1rem;
    }
    font-size: 1.5rem;
    text-shadow: #333 3px 3px;
    text-transform: capitalize;
    padding: 1rem;
  }

  > article > a {
    @media (max-width: ${size.mobileL}) {
      font-size: 1rem;
    }
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
