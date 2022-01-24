/* eslint-disable no-unused-vars */
// material
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { Helmet } from 'react-helmet-async';

// ----------------------------------------------------------------------

const Page = forwardRef(({ children, title = '', ...other }, ref) => (
  <Box ref={ref} {...other}>
    <Helmet>
      <title>Dorus Web Admin</title>
    </Helmet>
    {children}
  </Box>
));

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string
};

export default Page;
