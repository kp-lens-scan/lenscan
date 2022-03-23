import './assets/styles/App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Web3ReactProvider } from '@web3-react/core';
import { getWeb3Provider } from './helpers/Wallet';
import Header from './components/Header';
import Footer from './components/Footer';
import ScanningPage from './pages/ScanningPage';

const theme = createTheme({
  palette: {
    primary: {
      main: '#913fdd',
    },
    secondary: {
      main: '#3a3238',
    }
  },
  typography: {
    fontFamily: [
      'Open Sans',
      'sans-serif'
    ].join(','),
  },
  components: {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          width: 100
        }
      }
    }
  }
});

function App() {
  return (
    <Web3ReactProvider getLibrary={getWeb3Provider}>
      <ThemeProvider theme={theme}>
          <div className="AppWrapper">
            <HashRouter>
              <Routes>
                <Route path="/" element={
                  <>
                    <Header />
                    <div className="AppContainer">
                      <div className="AppRoutingContainer">
                        <ScanningPage />
                      </div>
                    </div>
                  </>
                } />
              </Routes>
            </HashRouter>
            <Footer />
          </div>
      </ThemeProvider>
    </Web3ReactProvider>
  );
}

export default App;
