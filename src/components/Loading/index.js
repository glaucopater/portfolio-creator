import React from 'react';
import { StyledLoading } from './styled';
import strings from '../../constants/strings';

const Loading = () => {
  return <StyledLoading className="Loading">{strings.loading}</StyledLoading>;
};

export default Loading;
