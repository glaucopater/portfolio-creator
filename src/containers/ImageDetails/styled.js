import styled from 'styled-components';
import { DEFAULT_PADDING } from '../../constants/';

export const StyledImageDetailsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;
  margin: 1rem 0;
`;

export const StyledImageDetails = styled.div`
  padding: ${DEFAULT_PADDING};
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  color: #fff;
`;

export const StyledHeading = styled.h3`
  margin-top: 1rem;
  text-transform: capitalize;
`;
