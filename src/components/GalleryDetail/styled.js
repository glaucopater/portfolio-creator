import styled from 'styled-components';

export const StyledGalleryDetail = styled.li`
  background: #121212;

  > figure {
    height: 230px;
    overflow: hidden;
    position: relative;
    opacity: 0.8;
    transition: 0.5s ease-in;
  }

  > figure:hover {
    opacity: 1;
    transition: 0.5s ease-out;
    background: #121212;
    cursor: pointer;
  }

  > figure > div {
    text-align: center;
  }

  > figure > img {
    width: 100%;
  }

  > figure > figcaption {
    position: absolute;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    width: 100%;
  }

  > figure > figcaption > a > h3 {
    padding: 0.75rem;
    font-size: 1.25rem;
    text-transform: capitalize;
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
