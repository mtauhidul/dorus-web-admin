// routes
import { createContext, useState } from 'react';
import { BaseOptionChartStyle } from './components/charts/BaseOptionChart';
// components
import ScrollToTop from './components/ScrollToTop';
import Router from './routes';
// theme
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';

// ----------------------------------------------------------------------

export const AuthContext = createContext();

export default function App() {
  const [auth, setAuth] = useState({
    status: false,
    token: ''
  });

  if (auth)
    return (
      <ThemeConfig>
        <ScrollToTop />
        <GlobalStyles />
        <BaseOptionChartStyle />
        <AuthContext.Provider value={[auth, setAuth]}>
          <Router />
        </AuthContext.Provider>
      </ThemeConfig>
    );
}
