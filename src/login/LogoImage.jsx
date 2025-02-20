import React from 'react';
import { makeStyles } from '@mui/styles';
import Logo from '../resources/images/logo.png';

const useStyles = makeStyles((theme) => ({
  image: {
    alignSelf: 'center',
    maxWidth: '500px',
    maxHeight: '240px',
    width: '100%',
    height: 'auto',
    margin: theme.spacing(2),
  },
}));

const LogoImage = () => {
  const classes = useStyles();

  return (
    <img
      className={classes.image}
      src={Logo}
      alt="Logo"
    />
  );
};

export default LogoImage;
