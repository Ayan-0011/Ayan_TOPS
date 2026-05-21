export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#090a11',
        surface: '#11131c',
        primary: '#5de0ff',
        accent: '#60b5ff',
        soft: '#2a2e42',
      },
      boxShadow: {
        glow: '0 0 40px rgba(93,224,255,0.12)',
        card: '0 24px 80px rgba(0,0,0,0.32)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top, rgba(93,224,255,0.18), transparent 28%), radial-gradient(circle at 20% 80%, rgba(96,181,255,0.14), transparent 24%)',
      },
    },
  },
  plugins: [],
};
