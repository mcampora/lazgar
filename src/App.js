//import logo from './logo.svg';
import './App.css';

import React, { useEffect } from "react";
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container, CssBaseline, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
//import List from '@material-ui/core/List';
//import ListItem from '@material-ui/core/ListItem';
//import ListItemText from '@material-ui/core/ListItemText';
//import CloudIcon from '@material-ui/icons/Cloud';
//import ListItemIcon from '@material-ui/core/ListItemIcon';
//import SecurityIcon from '@material-ui/icons/Security';
//import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
//import PeopleIcon from '@material-ui/icons/People';
//import FiberNewIcon from '@material-ui/icons/FiberNew';
//import AssessmentIcon from '@material-ui/icons/Assessment';
//import FastForwardIcon from '@material-ui/icons/FastForward';
//import TrackChangesIcon from '@material-ui/icons/TrackChanges';

// - select the right font

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100vw',
    flexGrow: 1,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    textAlign: 'center',
    padding: '10px',
  },
  grid: {
  },
  item: {
    //alignItems: "center",
    padding: '10px',
  },
  skill: {
    textAlign: 'left',
  },
  skills: {
    padding: '50px',
    margin: '10px',
    //background: 'rgba(79,116,154,1)',
    background: 'rgba(89,126,164,1)',
    borderRadius: '0.5rem',
  },
  bullet: {
    padding: '10px',
    fontSize: '2rem',
  },
  contact: {
    textAlign: 'right',
    paddingBottom: '25px',
    paddingRight: '10px',
  },
  paper: {
    //padding: theme.spacing(1),
    //textAlign: 'center',
  },
  logo: {
    maxHeight: '80px',
    textAlign: 'left',
  },
  card: {
    borderRadius: '0.5rem',
    boxShadow: 'none',
    position: 'relative',
    minWidth: 180,
    //minHeight: 200,
    minHeight: 360,
    //maxWidth: 300,
    '&:after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      width: '100%',
      height: '64%',
      bottom: 0,
      zIndex: 1,
      background: 'linear-gradient(to top, #000, rgba(0,0,0,0))',
    },
  },
  content: {
    position: 'absolute',
    zIndex: 2,
    bottom: 0,
    width: '100%',
  },
  cover: ({ bgColor = 'rgba(0, 0, 0, 0.08)', bgPosition = 'center' }) => ({
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    zIndex: 0,
    backgroundColor: bgColor,
    backgroundPosition: bgPosition,
  }),
}));

function Pillar(props) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.cover} image={props.image} />
      <Box py={3} px={2} className={classes.content}>
        <Typography variant="h5">{props.title}</Typography>
        <Typography variant="caption" color="textSecondary">{props.desc}</Typography>
      </Box>
    </Card>
  );
}

function App() {
  const classes = useStyles();

  const prefersDarkMode = true; //useMediaQuery("(prefers-color-scheme: dark)");
  const [darkMode, setDarkMode] = React.useState(prefersDarkMode);
  console.log(darkMode);
  useEffect(() => {
    setDarkMode(prefersDarkMode);
  }, [prefersDarkMode]);

  const theme = React.useMemo(() =>
    createTheme({
      palette: {
        type: darkMode ? "dark" : "light",
        background: {
          default: 'rgba(79,116,153)',
          paper: 'rgba(79,116,153)',
        },
        typography: {
          "fontFamily": "'Montserrat', sans-serif",
          "fontSize": 14,
          "fontWeightLight": 300,
          "fontWeightRegular": 400,
          "fontWeightMedium": 500
        },
      }
    }), [darkMode]
  );
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Container className={classes.root}>
        <Grid className={classes.grid} container alignItems="flex-end" justify="center" spacing={0}>
          <Grid className={classes.logo} item xs={12} md={6}>
            <img className={classes.logo} src="logo-title.png" alt="logo" />
          </Grid>
          <Grid className={classes.contact} item xs={12} md={6}>
            <Button
              variant="contained"
              className={classes.button}
              endIcon={<Icon>send</Icon>}
              href="mailto:marc.campora@lazgar.net?subject=Please tell me more...&body=Hello, I'd like to know more about your expertise and the type of services you are offering. Please come back to me. Regards."
            >
              Contact us
            </Button>
          </Grid>
          <Grid className={classes.item} item xs={12} lg={4}>
            <Pillar 
              image='city1.png'
              title='Understand'
              desc='Where you are starting from, the need for modernisation...'
            />
          </Grid>
          <Grid className={classes.item} item xs={12} lg={4}>
            <Pillar 
              image='city2.png'
              title='Define'
              desc='Where you want to be, identity the solutions and trajectories...'
            />
          </Grid>
          <Grid className={classes.item} item xs={12} lg={4}>
            <Pillar 
              image='city3.png'
              title='Transform'
              desc='Find or develop the right skills, lead the transformation, 
                ...'
            />
          </Grid>
          <Grid className={classes.item} item xs={12}>
            <img className={classes.logo} src="logo-mini.png" alt="logo" /><br/>
            <Typography variant="caption">All right reserved Lazgar, 2021</Typography>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

          /*
            <List>
              <ListItem>
                <ListItemIcon><CloudIcon/></ListItemIcon>
                <ListItemText primary="Cloud strategy" />
              </ListItem>
              <ListItem>
                <ListItemIcon><SecurityIcon/></ListItemIcon>
                <ListItemText primary="Security review" />
              </ListItem>
              <ListItem>
                <ListItemIcon><AttachMoneyIcon/></ListItemIcon>
                <ListItemText primary="Cost optimisation" /></ListItem>
              <ListItem>
                <ListItemIcon><PeopleIcon/></ListItemIcon>
                <ListItemText primary="Recruitment" /></ListItem>
              <ListItem>
                <ListItemIcon><FiberNewIcon/></ListItemIcon>
                <ListItemText primary="Emerging technologies" /></ListItem>
              <ListItem>
                <ListItemIcon><AssessmentIcon/></ListItemIcon>
                <ListItemText primary="Due diligence" /></ListItem>
              <ListItem>
                <ListItemIcon><FastForwardIcon/></ListItemIcon>
                <ListItemText primary="Modernisation" /></ListItem>
              <ListItem>
                <ListItemIcon><TrackChangesIcon/></ListItemIcon>
                <ListItemText primary="Project management" /></ListItem>
              <ListItem>
                <ListItemText primary="..." /></ListItem>
            </List>
          */

export default App;
