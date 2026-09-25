import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  mode: 'jit',
  jit: true,
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    container: {
      padding: {
        DEFAULT: '16px',
      },
    },
    colors: {
      transparent: 'transparent',
      'accent': '#B58A60',
      'black': '#20201E',
      'secondary': '#696C70',
      'secondary2': '#A0A0A0',
      'white': '#ffffff',
      'surface': '#F4F1EB',
      'red': '#DB4444',
      'purple': '#8684D4',
      'success': '#3DAB25',
      'yellow': '#ECB018',
      'pink': '#F4407D',
      'line': '#E9E9E9',
      'outline': 'rgba(0, 0, 0, 0.15)',
      'surface2': 'rgba(255, 255, 255, 0.2)',
      'surface1': 'rgba(255, 255, 255, 0.1)',
      // ENSAMA brand palette (brand board): 50 marfil, 200 arena, 400 roble,
      // 600 terracota, 900 carbón; 100 is a derived step between marfil and
      // arena. Mirrored as --ensama-* vars in globals.scss.
      'ensama': {
        50: '#F4F1EB',
        100: '#E9E1D5',
        200: '#D8CCBC',
        400: '#B58A60',
        600: '#8C6246',
        900: '#20201E',
      },
    },
  },
  plugins: [],
}
export default config
