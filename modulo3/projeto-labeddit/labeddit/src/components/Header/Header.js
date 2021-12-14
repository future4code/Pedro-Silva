import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { StyledToolbar } from './styles';
import { goToFeed, goToLogin } from '../../routes/cordinator';
import { useNavigate } from 'react-router-dom';


const Header = () => {

    const navigate = useNavigate()

  return (
      <AppBar position="static">
        <StyledToolbar>
          <Button onClick={() => goToFeed(navigate)} color="inherit">LabEddit</Button>
          <Button onClick={() => goToLogin(navigate)} color="inherit">Login</Button>
        </StyledToolbar>
      </AppBar>
  );
}

export default Header