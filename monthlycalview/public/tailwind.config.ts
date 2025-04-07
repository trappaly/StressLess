

//ORIGINAL CODE
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config

//SUGGESTED CODE
// tailwind.config.ts
// import type { Config } from 'tailwindcss'
// import defaultTheme from 'tailwindcss/defaultTheme'

// const config: Config = {
//   content: [
//     './app/**/*.{js,ts,jsx,tsx}', // adjust paths as needed
//     './components/**/*.{js,ts,jsx,tsx}',
//   ],
//   theme: {
//     extend: {
//       colors: {
//         gray: {
//           ...defaultTheme.colors.gray,
//           // Add custom grays if needed, just don't replace the whole palette
//         }
//       }
//     }
//   },
//   plugins: [],
// }

// export default config