import styled from 'styled-components';

export const Masonic = ({ shadow, color, pad, radius }) => styled.div`
  padding: 8px;
  width: 100%;
  max-width: 960px;
  margin: 163px auto;
`;

export const Container = ({ shadow, color, pad, radius }) => styled.div`
  min-height: 100vh;
  width: 100%;
`;

export const Minify = ({ color, pad }) => styled.div`
  padding: ${pad.md};
  background-color: ${color.dark};
  color: ${color.light};
`;

export const Header = ({ pad }) => styled.div`
  top: 0;
  position: fixed;
  padding: ${pad.xl};
  z-index: 1000;
  width: 100%;
  text-align: center;
  transition: padding 200ms ease-in-out, background-color 200ms 200ms linear;
`;

export const Card = ({ shadow, color, pad, radius }) => styled.div`
  display: flex;
  flex-direction: column;
  background: ${color.dark};
  border-radius: ${radius.lg};
  justify-content: center;
  align-items: center;
  transition: transform 100ms ease-in-out;
  width: 100%;

  span:last-of-type {
    color: #fff;
    padding: ${pad.md};
  }

  &:hover {
    position: relative;
    background: ${color.light};
    transform: scale(1.125);
    z-index: 1000;
    box-shadow: ${shadow.lg};

    span:last-of-type {
      color: ${color.dark};
      padding: ${pad.md};
    }
  }
`;

export const Img = ({ radius }) => styled.img`
  width: 100%;
  display: block;
  border-top-left-radius: ${radius.md};
  border-top-right-radius: ${radius.md};
  display: block;
`;
