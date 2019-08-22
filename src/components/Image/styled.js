import styled from 'styled-components';
import { size } from '../../constants/devices';
import { DEFAULT_PADDING } from '../../constants/';
import RImage from 'react-image';

export const StyledPlaceHolder = styled.div`
  width: 100%;
  height: auto;
  background: grey;
  height: 200px;
`;

export const StyledImg = styled(RImage)`
  height: auto;
  min-height: 200px;
  width: 100%;
  background: @media (max-width: ${size.laptop}) {
    width: calc(${size.tablet} - 6 * ${DEFAULT_PADDING});
  }

  @media (max-width: ${size.tablet}) {
    width: ${size.mobileL};
  }

  @media (max-width: ${size.mobileL}) {
    width: ${size.mobileM};
  }
`;
