import styled from 'styled-components';
import { DEFAULT_PADDING } from '../../constants/';

export const ImageDetailsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;
`;

export const StyledImageDetails = styled.div`
  padding: ${DEFAULT_PADDING};
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid #fff;
  color: #fff;
`;
