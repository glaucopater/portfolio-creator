import styled from 'styled-components';
import { device, size } from '../../constants/devices';
import backgroundImage from '../../assets/images/headers/hero_1.jpg';

export const StyledHeroHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;

  > h1 > a {
    @media (max-width: ${size.mobileL}) {
      font-size: 2rem;
    }
    font-size: 4rem;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    text-shadow: 5px 10px 5px #121212;
    ${({ isSmall }) => isSmall && `font-size: 2rem;`}
    :hover {
      text-shadow: 5px 10px 5px #12121250;
    }
  }
`;

export const StyledHero = styled.section`
  background-size: cover;
  background: url(${backgroundImage}) 0 35%;
  ${({ isSmall }) => (isSmall ? `padding: 1rem 1rem;` : `padding: 2rem 2rem;`)}

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

  display: flex;
  flex-direction: row; 
  align-items: center; 
  justify-content: space-between;

  > * {
    color: white;
  }

  > div {
    display: flex;
    flex-direction: row;
    align-items: baseline;
  }

  > div > p {
    @media (max-width: ${size.mobileL}) {
      font-size: 1rem;
    }
    font-size: 1.5rem;
    text-shadow: #333 3px 3px;
    text-transform: capitalize;
    padding: 1rem;
  }

  > div > a {
    @media (max-width: ${size.mobileL}) {
      font-size: 1rem;
    }
    font-size: 1.5rem;
    margin-right: 1rem;
    text-shadow: 5px 10px 5px #121212;
    
    :hover {
      text-shadow: 5px 10px 5px #12121250;
    }
  }
  
`;
