//import logo from './logo.svg';
import './App.css';

import React, { useEffect } from "react";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container, CssBaseline, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import EmailIcon from '@material-ui/icons/Email';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

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
  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  const theme = React.useMemo(() =>
    createMuiTheme({
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
    })
  );
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      {/*<button onClick={handleDarkModeToggle}>Toggle Dark Mode</button>*/}
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
              href="mailto:marc.campor@lazgar.net?subject=Please tell me more...&body=Hello, I'd like to know more about your expertise and the type of services you are offering. Please come back to me. Regards."
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
              desc='Find or develop the right skills, help with the transformation, 
                ...'
            />
          </Grid>
          <Grid item className={classes.skills} xs={12}>
            <Typography>I can help you: </Typography>
            <Typography>- Refine your Cloud strategy,</Typography>
            <Typography>- Manage your growth, recruiting technical staff or evolving your architecture,</Typography>
            <Typography>- Evaluate emerging technologies and their potential benefit,</Typography>
            <Typography>- Run due diligences,</Typography>
            <Typography>- ...</Typography>
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

export default App;
