import '../styles/globals.css'
import Layout from '../components/layout'
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'next-themes'
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Layout>
        <ToastContainer limit={1} />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
