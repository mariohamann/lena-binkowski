/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors: {
        'primary': {
          '50': '#fff0f3',
          '100': '#ffe1e9',
          '200': '#ffc8d8',
          '300': '#ff9bb8',
          '400': '#ff6394',
          '500': '#ff2c73',
          '600': '#f60862',
          '700': '#db0058',
          '800': '#ae034d',
          '900': '#940748',
          '950': '#530023',
        },
        'secondary': {
          '50': '#fdf7ec',
          '100': '#fbefd9',
          '200': '#f6dcb2',
          '300': '#f0c481',
          '400': '#e9a24e',
          '500': '#e3882c',
          '600': '#d56f21',
          '700': '#b1561d',
          '800': '#8d441f',
          '900': '#723a1c',
          '950': '#3d1b0d',
        },

      }
    },
	},
	plugins: [],
}
