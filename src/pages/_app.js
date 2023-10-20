import "@styles/tailwind.css"; //nueva forma de importar SIN ../
import MainLayout from "layout/MainLayout";

function MyApp({ Component, pageProps }) {
  return(
    <>
      <MainLayout>
        <Component {...pageProps} />;
      </MainLayout>      
    </>
  )

}  

export default MyApp;
