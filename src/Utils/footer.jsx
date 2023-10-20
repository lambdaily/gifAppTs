import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, List, ListItem, SvgIcon } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: '#f0f0f0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
  section: {
    padding: '20px',
  },
  name: {
    fontSize: '3rem',
    color: '#333',
    fontWeight: 'bold',
    paddingBottom: '6px',
  },
  socialIcon: {
    fontSize: '2rem',
    color: 'currentColor',
    cursor: 'pointer',
    '&:hover': {
      color: '#3498db',
    },
  },
  title: {
    fontSize: '2rem',
    color: '#333',
    fontWeight: 'bold',
    paddingBottom: '4px',
  },
  link: {
    color: '#888',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    '&:hover': {
      color: '#ff69b4',
    },
  },
  copyright: {
    color: '#333',
    fontWeight: 'bold',
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <div className={classes.flexContainer}>
        <div className={classes.section}>
          <Typography className={classes.name}>
            Margarita<span className={classes.socialIcon}>Ruiz</span>
          </Typography>
          <List>
            <ListItem>
              <SvgIcon className={classes.socialIcon}>
                {/* Icon code */}
              </SvgIcon>
              <SvgIcon className={classes.socialIcon}>
                {/* Icon code */}
              </SvgIcon>
              <SvgIcon className={classes.socialIcon}>
                {/* Icon code */}
              </SvgIcon>
            </ListItem>
          </List>
        </div>
        <div className={classes.section}>
          <Typography className={classes.title}>Tienda</Typography>
          <List>
            <ListItem className={classes.link}>Acerca de</ListItem>
            <ListItem className={classes.link}>Contáctenos</ListItem>
            <ListItem className={classes.link}>Tu cuenta</ListItem>
            <ListItem className={classes.link}>Términos y condiciones</ListItem>
          </List>
        </div>
        <div className={classes.section}>
          <Typography className={classes.title}>Servicio al cliente</Typography>
          <List>
            <ListItem className={classes.link}>Seguimiento de mi pedido</ListItem>
            <ListItem className={classes.link}>Plazo de entrega</ListItem>
            <ListItem className={classes.link}>Gastos de envío</ListItem>
            <ListItem className={classes.link}>Devoluciones</ListItem>
          </List>
        </div>
      </div>
      <div className={classes.footer}>
        <Typography className={classes.copyright}>
          © 2023 All rights reserved | Build with ❤ by{' '}
          <span className={classes.link}>The Romers</span>
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
