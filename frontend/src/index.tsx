import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollTop from "./components/ScrollTop";
import { Web3ReactProvider } from '@web3-react/core';
import { WalletProvider } from "./Context/wallet_context";
import { ToastContainer, toast } from 'react-toastify';
import { SnackbarProvider } from 'notistack'

import 'react-toastify/dist/ReactToastify.css';
import getLibrary from './utils/get_library';
import { Provider } from 'react-redux'
// import AuthProvider from "./Context/globaltContext";
// import configureStore from './redux/store/configureStore.dev';
import store from "./redux/store/configureStore";
// import DevTools from "./redux/containers/DevTools";
import AuthProvider from "./Context/globaltContext";
import { AlertContextProvider } from "./Context/alert_context";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <Web3ReactProvider getLibrary={getLibrary}>
          <AlertContextProvider>
            <WalletProvider>
                <CssBaseline />
                <SnackbarProvider maxSnack={3}>

                <BrowserRouter>
                  <AuthProvider>
                    <ScrollTop/>
                    <App />
                  </AuthProvider>
                </BrowserRouter>
                </SnackbarProvider>

              </WalletProvider>
            </AlertContextProvider>
          </Web3ReactProvider>
        <ToastContainer />
      </ThemeProvider>
    
    {/* <DevTools /> */}
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
