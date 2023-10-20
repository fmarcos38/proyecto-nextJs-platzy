import "@styles/tailwind.css"; //nueva forma de importar SIN ../

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
