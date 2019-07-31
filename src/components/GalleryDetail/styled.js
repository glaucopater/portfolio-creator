import styled from 'styled-components';

export const StyledGalleryDetail = styled.li`
  border: 1px solid #e2e2e2;
  border-radius: 0.5rem;
  background: #ffffff;

  > figure {
    overflow: hidden;
    border-radius: 0.5rem;
    position: relative;
  }

  > figure > img {
    width: 100%;
  }

  > figure > figcaption {
    position: absolute;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    width: 100%;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }

  > figure > figcaption > h3 {
    color: white;
    padding: 0.75rem;
    font-size: 1.25rem;
  }

  > p {
    font-size: 1rem;
    line-height: 1.5;
    padding: 1rem 0.75rem;
    color: #666666;
  }

  > a {
    padding: 0.5rem 1rem;
    margin: 0.5rem;
  }
`;
