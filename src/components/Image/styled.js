import styled from 'styled-components';
import { size } from '../../constants/devices';
import { DEFAULT_PADDING } from '../../constants/';

export const StyledImg = styled.img`
  height: auto;
  @media (max-width: ${size.laptop}) {
    width: calc(${size.tablet} - 6 * ${DEFAULT_PADDING});
  }

  @media (max-width: ${size.tablet}) {
    width: ${size.mobileL};
  }

  @media (max-width: ${size.mobileL}) {
    width: ${size.mobileM};
  }
`;
