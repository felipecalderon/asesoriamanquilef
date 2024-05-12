import type { Config } from 'tailwindcss'
const {nextui} = require("@nextui-org/react");

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      animation: {
        'aparecer-1': 'aparecer 1s ease-in-out',
        'aparecer-2': 'aparecer 2s ease-in-out',
        'aparecer-3': 'aparecer 3s ease-in-out',
        'aparecer-arriba-1': 'aparecerDeArriba 1s ease-in-out',
        'aparecer-abajo-1': 'aparecerDeAbajo 1s ease-in-out',
      },
      keyframes: {
        aparecer: {
          '0%': { opacity: '0' },
          '90%': { opacity: '0.9' },
          '100%': { opacity: '1' },
        },
        aparecerDeArriba: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        aparecerDeAbajo: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primario: '#A577F0',
        primarioClaro: '#EAE0FB',
        secundarioClaro: '#90e0ef'
      },
    },
  },
  plugins: [nextui({
    colors: {
      primario: '#A577F0',
      primarioClaro: '#EAE0FB',
      secundarioClaro: '#90e0ef'
    }
  })],
}
export default config
