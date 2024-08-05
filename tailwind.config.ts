import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/containers/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [
    daisyui,
    require('tailwindcss-gradients'),
    function ({ addUtilities }) {
      const newUtilities = {
        '.theme-primary-color': {
          color: 'var(--primary-color)',
        },
        '.theme-secondary-color': {
          color: 'var(--secondary-color)',
        },
        '.theme-primary-bg': {
          backgroundColor: 'var(--primary-color)',
        },
        '.theme-secondary-bg': {
          backgroundColor: 'var(--secondary-color)',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
  daisyui: {},
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['Georgia', 'Times New Roman', 'serif'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
      'seoul': ['SeoulHangang', 'ui-sans-serif', 'system-ui'],
    }
  }
};

export default config;
