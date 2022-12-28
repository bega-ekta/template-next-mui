import CssBaseline from '@mui/material/CssBaseline';
import useRootStore from 'base/store/useRootStore';
import ThemeProviderWrapper, { ThemeContext } from 'contexts/ThemeProviderWrapper';
import MainLayout from 'layouts/MainLayout';
import { observer } from 'mobx-react-lite';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useContext, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DynamicWagmiProvider = dynamic(() => import('components/wallet/WagmiProvider'), { ssr: false });
const DynamicInitContracts = dynamic(() => import('components/init/InitContracts'), { ssr: false });

const App = observer(({ Component, pageProps }: AppProps) => {
  const { commonStore } = useRootStore();
  const context = useContext(ThemeContext);

  // Effects
  useEffect(() => {
    commonStore.getTokens();
    commonStore.getChains();
  }, []);

  // Renders
  return (
    <>
      <Head>
        <title>Ekta Claim</title>
        <link rel="shortcut icon" href="/icons/ekta-logo.svg" />

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Ekta portal claim" key="desc" />
      </Head>

      <ThemeProviderWrapper>
        <CssBaseline />
        <DynamicWagmiProvider>
          <DynamicInitContracts />
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
          <ToastContainer
            position="top-center"
            autoClose={4000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnHover
            theme={context.theme}
          />
        </DynamicWagmiProvider>
      </ThemeProviderWrapper>
    </>
  );
});

export default App;
