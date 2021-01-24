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
  },
  grid: {
  },
  item: {
    alignItems: "center",
    padding: '10px',
  },
  contact: {
    textAlign: 'right',
    paddingBottom: '25px',
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
    minWidth: 200,
    minHeight: 360,
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
  //component="h2"
  return (
    <Paper classes={classes.paper}>
    <Card className={classes.card}>
      <CardMedia className={classes.cover} image={props.image} />
      <Box py={3} px={2} className={classes.content}>
        <Typography variant="h5">{props.title}</Typography>
        <Typography variant="caption" color="textSecondary">{props.desc}</Typography>
      </Box>
    </Card>
    </Paper>
  );
}

const Mailto = ({ email, subject = '', body = '', children }) => {
  let params = subject || body ? '?' : '';
  if (subject) params += `subject=${encodeURIComponent(subject)}`;
  if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
  //return <a href={`mailto:${email}${params}`}>{children}</a>;
  return <Link href={`mailto:${email}${params}`} color="inherit">{children}</Link>
};

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
        <Grid className={classes.grid} container spacing={0}>
          <Grid className={classes.logo} item xs={12}>
            <img className={classes.logo} src="logo-title.png" alt="logo" />
          </Grid>
          <Grid className={classes.item} item xs={4}>
            <Pillar 
              image='city1.png'
              title='Understand'
              desc='Where you are starting from, the need for modernisation...'
            />
          </Grid>
          <Grid className={classes.item} item xs={4}>
            <Pillar 
              image='city2.png'
              title='Define'
              desc='Where you want to be, identity the solutions and trajectories...'
            />
          </Grid>
          <Grid className={classes.item} item xs={4}>
            <Pillar 
              image='city3.png'
              title='Transform'
              desc='Find or develop the right skills, help with the transformation, 
                ...'
            />
          </Grid>
          <Grid className={classes.contact} item xs={12}>
            <Mailto email="marc.campora@lazgar.net" subject="Hello & please tell me more" body="...">
              <Typography>Mail me to know more...</Typography>
            </Mailto>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
