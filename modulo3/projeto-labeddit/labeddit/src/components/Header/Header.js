import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { StyledToolbar } from './styles';
import { goToFeed, goToLogin } from '../../routes/cordinator';
import { useNavigate } from 'react-router-dom';


const Header = ({rightButtonText, setRightButtonText}) => {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  const logout = () => {
    localStorage.removeItem('token')
  }

  const rightButtonAction = () => {
    if (token){
      logout()
      setRightButtonText('Login')
      goToLogin(navigate)  
    } else {
      goToLogin(navigate) 
    }
  }

  return (
      <AppBar position="static">
        <StyledToolbar>
          <Button onClick={() => goToFeed(navigate)} color="inherit">LabEddit</Button>
          <Button onClick={rightButtonAction} color="inherit">{rightButtonText}</Button>
        </StyledToolbar>
      </AppBar>
  );
}

export default Header