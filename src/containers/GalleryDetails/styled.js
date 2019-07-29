import styled from 'styled-components';
import { DEFAULT_PADDING } from '../../constants/';
import { device } from '../../constants/devices';

export const StyledGalleryDetails = styled.div`
  padding: ${DEFAULT_PADDING};
`;

export const StyledGalleryDetailsGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  @media ${device.mobileL} {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  }
  grid-gap: 1rem;
  padding: 1rem;
  list-style-type: none;
`;
