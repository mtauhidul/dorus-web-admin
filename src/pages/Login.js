import { Card, Container, Link, Stack, Typography } from '@mui/material';
// material
import { styled } from '@mui/material/styles';
import axios from 'axios';
import { useContext, useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../App';
import { MHidden } from '../components/@material-extend';
import { LoginForm } from '../components/authentication/login';
// components
import Page from '../components/Page';
// layouts
import AuthLayout from '../layouts/AuthLayout';
import { baseUrl, integrity } from '../utils/api';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex'
  }
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2)
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 0)
}));

// ----------------------------------------------------------------------

export default function Login() {
  const [auth, setAuth] = useContext(AuthContext);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const { localStorage, sessionStorage } = window;

  const openDashboard = () => {
    const storedToken = sessionStorage.getItem('token');

    if (storedToken && storedToken.startsWith('Bearer ')) {
      navigate('/dashboard/app', { replace: true });
    }
  };

  const storeTokenData = (response, values) => {
    sessionStorage.setItem('status', response.data.status);
    sessionStorage.setItem('token', response.data.message);

    openDashboard();
  };

  const getAuthToken = async (values) => {
    const loginData = {
      email: values.email,
      password: values.password
    };
    const headers = {
      integrity
    };

    try {
      const response = await axios.post(`${baseUrl}/admin/login`, loginData, { headers });
      storeTokenData(response, values);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <RootStyle title="Login | Minimal-UI">
      <AuthLayout>
        Don’t have an account? &nbsp;
        <Link underline="none" variant="subtitle2" component={RouterLink} to="/register">
          Get started
        </Link>
      </AuthLayout>

      <MHidden width="mdDown">
        <SectionStyle>
          <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
            Hi, Welcome Back
          </Typography>
          <img src="/static/illustrations/illustration_login.png" alt="login" />
        </SectionStyle>
      </MHidden>

      <Container maxWidth="sm">
        <ContentStyle>
          <Stack sx={{ mb: 5 }}>
            <Typography variant="h4" gutterBottom>
              Sign in to Dorus Admin
            </Typography>
            {error ? (
              <Typography sx={{ color: 'red' }}>Wrong credentials, please try again.</Typography>
            ) : (
              <Typography sx={{ color: 'transparent' }}>Input your credentials</Typography>
            )}
          </Stack>

          <LoginForm getAuthToken={getAuthToken} />

          <MHidden width="smUp">
            <Typography variant="body2" align="center" sx={{ mt: 3 }}>
              Don’t have an account?&nbsp;
              <Link variant="subtitle2" component={RouterLink} to="register">
                Get started
              </Link>
            </Typography>
          </MHidden>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
