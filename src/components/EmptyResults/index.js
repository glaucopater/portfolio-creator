import React from 'react';
import { StyledEmptyResults } from './styled';
const EmptyResults = () => {
  return (
    <StyledEmptyResults className="EmptyResults">
      {'No results'}
    </StyledEmptyResults>
  );
};
export default EmptyResults;
