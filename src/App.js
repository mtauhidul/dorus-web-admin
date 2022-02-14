// routes
import { createContext, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { BaseOptionChartStyle } from './components/charts/BaseOptionChart';
// components
import ScrollToTop from './components/ScrollToTop';
import Router from './routes';
// theme
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';

// ----------------------------------------------------------------------
export const GlobalContext = createContext();

export const AuthContext = createContext();

export const TimeOutContext = createContext();

export default function App() {
  const [auth, setAuth] = useState({
    status: false,
    token: ''
  });
  const [global, setGlobal] = useState([]);
  const [timeout, setTimeout] = useState('');

  if (auth)
    return (
      <ThemeConfig>
        <div>
          <Toaster />
        </div>

        <ScrollToTop />
        <GlobalStyles />
        <BaseOptionChartStyle />
        <GlobalContext.Provider value={[global, setGlobal]}>
          <AuthContext.Provider value={[auth, setAuth]}>
            <TimeOutContext.Provider value={[timeout, setTimeout]}>
              <Router />
            </TimeOutContext.Provider>
          </AuthContext.Provider>
        </GlobalContext.Provider>
      </ThemeConfig>
    );
}
