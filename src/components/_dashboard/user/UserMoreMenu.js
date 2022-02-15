/* eslint-disable react/prop-types */
import editFill from '@iconify/icons-eva/edit-fill';
import moreVerticalFill from '@iconify/icons-eva/more-vertical-fill';
import { Icon } from '@iconify/react';
// material
import { IconButton, ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material';
import axios from 'axios';
import { useContext, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../../App';

// ----------------------------------------------------------------------

export default function UserMoreMenu({ blog, fetchData }) {
  const navigate = useNavigate();
  const [global, setGlobal] = useContext(GlobalContext);
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const changeStatus = async (data) => {
    toast.loading('Updating...');

    try {
      const id = data.page_id;
      const newData = { status: data.is_published === 1 ? '0' : '1' };
      const token = window.sessionStorage.getItem('token');
      const headers = {
        Authorization: token,
        integrity: '2H7g8BG75Zsc1NJTdljBBmr79KI3qEMrefR0LZQ'
      };
      const response = await axios.put(
        `https://sandboxuat.centralindia.cloudapp.azure.com/admin/post/status/publish/${id}`,
        newData,
        { headers }
      );

      toast.dismiss();
      toast.success('Successfully updated');
    } catch (error) {
      toast.dismiss();
      if (error.response.status === 401) {
        toast.error('Authentication failed, Login again');
        navigate('/login');
      } else {
        toast.error('Error! Try again');
      }
    }
    fetchData();
  };

  return (
    <>
      <IconButton ref={ref} onClick={() => setIsOpen(true)}>
        <Icon icon={moreVerticalFill} width={20} height={20} />
      </IconButton>

      <Menu
        open={isOpen}
        anchorEl={ref.current}
        onClose={() => setIsOpen(false)}
        PaperProps={{
          sx: { width: 200, maxWidth: '100%' }
        }}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem sx={{ color: 'text.secondary' }}>
          <ListItemIcon>
            <Icon icon={editFill} width={24} height={24} />
          </ListItemIcon>
          <ListItemText
            onClick={() => changeStatus(blog)}
            primary="Change Status"
            primaryTypographyProps={{ variant: 'body2' }}
          />
        </MenuItem>

        <MenuItem
          component={RouterLink}
          to={`/dashboard/edit/${blog?.page_id}`}
          sx={{ color: 'text.secondary' }}
        >
          <ListItemIcon>
            <Icon icon={editFill} width={24} height={24} />
          </ListItemIcon>
          <ListItemText primary="Edit" primaryTypographyProps={{ variant: 'body2' }} />
        </MenuItem>
      </Menu>
    </>
  );
}
