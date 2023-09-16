/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container_width': '1150px',
        '932': '932px',
        '635': '635px',
        '540': '540px',
        '515': '515px',
        '457': '457px',
        '445': '445px',
        '350': '350px',
        '240': '240px',
      },
      width: {
        '160': '160px',
        '72': '72px',
        '56': '56px',
        '50': '50px',
      },
      fontSize: {
        '18': '18px',
      },
      height: {
        '56': '56px',
      },
      padding: {
        '140': '140px',
        '100': '100px',
        '76': '76px',
        '73': '73px',
      },
      borderRadius: {
        '24': '24px',
      },
      margin: {
        '52': '52px',
      },
      lineHeight: {
        '48': '48px',
        '25': '25px',
        '18': '18px',
      },
      colors: {
        primary: {
          'midnight_green': '#014E56',
          'light_coral': '#F67E7E',
        },
        secondary: {
          'rapture_blue': '#79C8C7',
          'police_blue': '#2C6269',
          'deep_jungle_green': '#004047',
          'dark_green': '#002529',
          'sacramento_state_green': '#012F34',
        },
      },
      backgroundColor: {
        'midnight_green': '#014E56',
        'sacramento_state_green': '#012F34',
        'rapture_blue': '#79C8C7',
        'light_coral': '#F67E7E',
      },
      borderColor: {
        'sacramento_state_green': '#012F34',
      },
    },
  },
  plugins: [],
}