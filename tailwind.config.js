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
        '917': '917px',
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
        '100': '100px',
        '18': '18px',
        '13': '13px',
      },
      height: {
        '144': '144px',
        '100': '100px',
        '56': '56px',
      },
      padding: {
        '250': '250px',
        '140': '140px',
        '100': '100px',
        '76': '76px',
        '73': '73px',
        '70': '70px',
        '60': '60px',
      },
      borderRadius: {
        '24': '24px',
      },
      spacing: {
        '265': '265px',
        '250': '250px',
        '165': '165px',
        '140': '140px',
      },
      opacity: {
        '8': '8',
      },
      gap: {
        '30px': '30px',
      },
      zIndex: {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
      },
      margin: {
        '56px': '56px',
        '52': '52px',
        '79': '79px',
        '30': '30px',
      },
      lineHeight: {
        '100': '100px',
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
    },
  },
  plugins: [],
}