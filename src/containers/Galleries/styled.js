import styled from 'styled-components';
import { DEFAULT_PADDING } from '../../constants/';
import { device } from '../../constants/devices';

export const StyledGalleries = styled.div`
  padding: ${DEFAULT_PADDING};
`;

export const StyledGalleriesGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  @media ${device.mobileL} {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  }
  grid-gap: 1rem;
  padding: 1rem;

  > li {
    border: 1px solid #e2e2e2;
    border-radius: 0.5rem;
    list-style-type: none;
    box-shadow: 0.125rem 0.125rem 0.125rem #00000030;
    padding: 0.5rem;
  }

  > li:hover {
    box-shadow: 0.25rem 0.25rem 0.25rem #00000030;
    transition: box-shadow 0.3s ease-in-out;
  }

  > li > p {
    font-size: 1rem;
    line-height: 1.5;
    padding: 1rem 0.75rem;
    color: #666666;
    font-weight: 700;
  }

  > li > a {
    padding: 0.5rem 1rem;
    margin: 0.5rem;
  }
`;
