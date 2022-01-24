import { Box, Card, Container, Link, Typography } from '@mui/material';
// material
import { styled } from '@mui/material/styles';
import axios from 'axios';
import { Link as RouterLink } from 'react-router-dom';
import { MHidden } from '../components/@material-extend';
import { RegisterForm } from '../components/authentication/register';
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

export default function Register() {
  const headers = {
    integrity
  };

  const registerNewAdmin = async (values) => {
    const data = {
      first_name: values.firstName,
      last_name: values.lastName,
      password: values.password,
      email: values.email,
      role_id: '1'
    };
    const response = await axios.post(`${baseUrl}/users`, data, { headers });

    console.log(response);
  };
  return (
    <RootStyle title="Register | Minimal-UI">
      <AuthLayout>
        Already have an account? &nbsp;
        <Link underline="none" variant="subtitle2" component={RouterLink} to="/login">
          Login
        </Link>
      </AuthLayout>

      <MHidden width="mdDown">
        <SectionStyle>
          <img alt="register" src="/static/illustrations/illustration_register.png" />
        </SectionStyle>
      </MHidden>

      <Container>
        <ContentStyle>
          <Box sx={{ mb: 5 }}>
            <Typography variant="h4" gutterBottom>
              Register a new admin
            </Typography>
          </Box>

          <RegisterForm registerNewAdmin={registerNewAdmin} />

          <Typography variant="body2" align="center" sx={{ color: 'text.secondary', mt: 3 }}>
            By registering, I agree to Minimal&nbsp;
            <Link underline="always" sx={{ color: 'text.primary' }}>
              Terms of Service
            </Link>
            &nbsp;and&nbsp;
            <Link underline="always" sx={{ color: 'text.primary' }}>
              Privacy Policy
            </Link>
            .
          </Typography>

          <MHidden width="smUp">
            <Typography variant="subtitle2" sx={{ mt: 3, textAlign: 'center' }}>
              Already have an account?&nbsp;
              <Link to="/login" component={RouterLink}>
                Login
              </Link>
            </Typography>
          </MHidden>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
