import styled from 'styled-components';
import { DEFAULT_PADDING } from '../../constants';
import { device } from '../../constants/devices';

export const StyledGalleries = styled.div`
  padding: ${DEFAULT_PADDING};
`;

export const StyledGalleriesGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  grid-gap: 1rem;
  list-style-type: none;
  padding-inline-start: 0;
  @media ${device.mobileL} {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  }
`;
