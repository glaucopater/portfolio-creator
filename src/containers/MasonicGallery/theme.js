import { styles, system } from './theme';

import system, {
  pad,
  gap,
  radius,
  shadow,
  font,
  browserStyles,
} from '@-ui/system';
import styles from '@-ui/react';

const color = {
  dark: '#1d2326',
  med: '#373b3e',
  light: '#f2fafe',
};

export const variables = {
  color,
};

styles.variables(variables);

system.use({
  pad: pad(),
  gap: gap(),
  font: font(
    {
      color: {
        body: color.dark,
      },
      family: {
        brand: 'Quantico, sans-serif',
        body: 'Nunito, sans-serif',
      },
    },
    {
      logo: ({ font: { color, family } }) => `
          font-size: 1.5rem;
          font-weight: 900;
          font-family: ${family.brand};
          letter-spacing: -0.075em;
          color: ${color.body};
        `,
      body: ({ font: { color, family } }) => `
          font-size: 1rem;
          font-family: ${family.body};
          letter-spacing: -0.025em;
          color: ${color.body};
        `,
    },
  ),
  radius: radius(),
  shadow: shadow(),
});

styles.global(
  ({ color }) => `
      html,
      body {
        ${system.font.css('body')};
        background-color: ${color.light};
      }
  
      ${browserStyles}
    `,
);

export { default as system } from '@-ui/system';
export { default as styles } from '@-ui/react';
