import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import '.components/Common/Header.styles.scss';

const BottomNav = () => (
  <AppBar position="sticky" className="navbar">
    <Toolbar className="navbar__container">
      <Link to="/" className="navbar__title-link text-white">
        <h1 variant="h4" color="inherit" className='navbar__title'>
          Games Information
        </h1>
      </Link>      
    </Toolbar>
  </AppBar>
)

export default BottomNav;