import './App.css';

import React, { useEffect } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { Container, CssBaseline, Typography, Divider } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

const BLUE = 'rgb(79,116,153)';
const BLUE_DARK = 'rgb(79,116,153)';
const BLUE_LIGHT = 'rgb(108,148,186)';
const BLUE_DEEPER = 'rgb(95,135,170)';

const PUBLICATIONS = [
  { type: 'article', date: 'Apr 2026', title: 'SageMaker Unified Studio: how to manage connections to an existing database', url: 'https://medium.com/aws-tip/sagemaker-unified-studio-how-to-manage-connections-to-an-existing-database-0fc472fc3551' },
  { type: 'article', date: 'Apr 2026', title: 'A CDK Primer', url: 'https://medium.com/aws-in-plain-english/a-cdk-primer-6b596dcf38e1' },
  { type: 'talk',    date: 'Jan 2026', title: 'AWS re:Invent 2025 Recap – Lightning Talk Edition — Montréal AWS User Group', url: 'https://www.meetup.com/montreal-aws-users-united/events/312370185/' },
  { type: 'article', date: 'Jan 2026', title: 'Eliminating Lambda Cold Starts', url: 'https://medium.com/aws-in-plain-english/eliminating-lambda-cold-starts-25e3b8412b92' },
  { type: 'article', date: 'Jan 2026', title: 'SageMaker Unified Studio — new features in 2026', url: 'https://medium.com/aws-in-plain-english/sagemaker-unified-studio-new-features-in-2026-5592ad0e8e41' },
  { type: 'talk',    date: 'Nov 2025', title: 'Lambda vs. Containers: Understanding the Trade-offs — Montréal AWS User Group', url: 'https://www.meetup.com/montreal-aws-users-united/events/311710974/' },
  { type: 'article', date: 'Nov 2025', title: 'External connection to SageMaker Unified Studio data', url: 'https://medium.com/aws-in-plain-english/external-connection-to-sagemaker-unified-studio-data-ad6c434b50ad' },
  { type: 'article', date: 'Oct 2025', title: 'SageMaker Studio: how to automate everything (part 2)', url: 'https://medium.com/aws-in-plain-english/sagemaker-studio-how-to-automate-everything-part-2-bf0ef41e8ad0' },
  { type: 'article', date: 'Sep 2025', title: 'SageMaker Studio: how to automate everything (part 1)', url: 'https://medium.com/aws-in-plain-english/sagemaker-studio-how-to-automate-everything-part-1-467f0ba031a6' },
  { type: 'article', date: 'Aug 2025', title: 'Tame the Data Beast', url: 'https://medium.com/aws-tip/tame-the-data-beast-170dfa08238e' },
  { type: 'article', date: 'Jul 2025', title: 'Isolating Changes: Branching and Versioning with Iceberg on S3Tables', url: 'https://medium.com/aws-tip/isolating-changes-branching-and-versioning-with-iceberg-on-s3tables-b11e41705736' },
  { type: 'article', date: 'Jul 2025', title: 'Implementing Fine-Grained Access Control with AWS Glue and S3 Tables', url: 'https://medium.com/aws-in-plain-english/implementing-fine-grained-access-control-with-aws-glue-and-s3-tables-ce22cbc6a8fb' },
  { type: 'talk',    date: 'Jun 2025', title: 'Beyond Kubernetes: Serverless Execution Models for Variable Workloads — KubeFM Podcast', url: 'https://kube.fm/kubernetes-vs-lambda-marc' },
  { type: 'article', date: 'Jun 2025', title: 'I discovered recently that DuckDB integrates with S3Tables API', url: 'https://medium.com/@marccampora/i-discovered-recently-that-duckdb-integrates-with-this-api-0514996480d0' },
];

const SERVICES = [
  {
    title: 'Technology Alignment',
    desc: 'Identify the need for modernisation, define the target architecture, and map out the trajectories to get there — bridging business intent with technical direction.',
  },
  {
    title: 'Solutions',
    desc: 'Prototype and validate ideas, find or develop the right skills within your teams, and lead end-to-end transformations from inception to delivery.',
  },
  {
    title: 'FinOps',
    desc: 'Extensive hands-on experience with AWS cost management — designing governance frameworks, rightsizing workloads, and embedding financial accountability into engineering culture.',
  },
  {
    title: 'Infrastructure',
    desc: 'Automate and optimise cloud infrastructure at scale — from CI/CD pipelines and IaC to platform reliability, observability, and operational excellence.',
  },
];

function Pillar(props) {
  return (
    <Card sx={{
      borderRadius: '0.75rem',
      boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
      position: 'relative',
      minWidth: 180,
      minHeight: 380,
      overflow: 'hidden',
      '&:after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        width: '100%',
        height: '70%',
        bottom: 0,
        zIndex: 1,
        background: 'linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0))',
      },
    }}>
      <CardMedia sx={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        zIndex: 0,
        backgroundColor: props.bgColor || 'rgba(0,0,0,0.08)',
        backgroundPosition: props.bgPosition || 'center',
      }} image={props.image} />
    </Card>
  );
}

function ServiceCard({ title, desc }) {
  return (
    <Box sx={{
      backgroundColor: BLUE_DEEPER,
      borderRadius: '0.75rem',
      p: 3.5,
      height: '100%',
      boxShadow: '0 2px 12px rgba(0,0,0,0.2)',
      borderTop: `3px solid rgba(255,255,255,0.25)`,
      textAlign: 'left',
    }}>
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5 }}>{title}</Typography>
      <Typography variant="body2" sx={{ opacity: 0.8, lineHeight: 1.7 }}>{desc}</Typography>
    </Box>
  );
}

function PublicationRow({ type, date, title, url }) {
  const isArticle = type === 'article';
  return (
    <Box component="a" href={url} target="_blank" rel="noopener noreferrer" sx={{
      display: 'flex',
      alignItems: 'center',
      gap: 2,
      py: 1.5,
      px: 2.5,
      borderRadius: '0.5rem',
      textDecoration: 'none',
      color: 'inherit',
      transition: 'background 0.2s',
      '&:hover': { backgroundColor: 'rgba(255,255,255,0.08)' },
    }}>
      <Typography variant="caption" sx={{
        minWidth: 70,
        opacity: 0.5,
        fontSize: '0.7rem',
        letterSpacing: 1,
        textTransform: 'uppercase',
      }}>{date}</Typography>
      <Box sx={{
        width: 6, height: 6, borderRadius: '50%', flexShrink: 0,
        backgroundColor: isArticle ? BLUE_LIGHT : 'rgba(255,255,255,0.5)',
      }} />
      <Typography variant="body2" sx={{ opacity: 0.85, textAlign: 'left', lineHeight: 1.5 }}>
        {title}
      </Typography>
      <Typography variant="caption" sx={{
        ml: 'auto', flexShrink: 0, opacity: 0.4, fontSize: '0.7rem',
        textTransform: 'uppercase', letterSpacing: 1,
      }}>{isArticle ? 'Article' : 'Talk'}</Typography>
    </Box>
  );
}

function SectionLabel({ children }) {
  return (
    <Typography variant="overline" sx={{ opacity: 0.6, letterSpacing: 3, display: 'block', mb: 3 }}>
      {children}
    </Typography>
  );
}

function App() {
  const prefersDarkMode = true;
  const [darkMode, setDarkMode] = React.useState(prefersDarkMode);
  useEffect(() => {
    setDarkMode(prefersDarkMode);
  }, [prefersDarkMode]);

  const theme = React.useMemo(() =>
    createTheme({
      palette: {
        mode: darkMode ? "dark" : "light",
        primary: { main: BLUE_LIGHT },
        background: {
          default: BLUE,
          paper: BLUE,
        },
      },
      typography: {
        fontFamily: "'Montserrat', sans-serif",
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
      },
      components: {
        MuiButton: {
          styleOverrides: {
            containedPrimary: {
              backgroundColor: 'rgba(255,255,255,0.15)',
              border: '1px solid rgba(255,255,255,0.6)',
              color: '#fff',
              backdropFilter: 'blur(4px)',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.25)',
              },
            },
          },
        },
      },
    }), [darkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>

      {/* Header */}
      <Box sx={{
        backgroundColor: BLUE_DARK,
        borderBottom: `2px solid rgba(255,255,255,0.2)`,
        px: 4,
        height: '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <img style={{ maxHeight: '72px', display: 'block' }} src="logo-title.png" alt="logo" />
        <Button variant="contained" color="primary"
          href="mailto:marc.campora@lazgar.net?subject=Please tell me more...&body=Hello, I'd like to know more about your expertise and the type of services you are offering. Please come back to me. Regards."
        >
          Contact me
        </Button>
      </Box>

      <Container maxWidth="xl" sx={{ py: 5 }}>

        {/* Approach */}
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Grid container justifyContent="center" spacing={2}>
            <Grid size={{ xs: 12, lg: 4 }}>
              <Pillar image='archi1.jpg' title='Understand' />
            </Grid>
            <Grid size={{ xs: 12, lg: 4 }}>
              <Pillar image='archi2.jpg' title='Define' />
            </Grid>
            <Grid size={{ xs: 12, lg: 4 }}>
              <Pillar image='archi3.jpg' title='Transform' />
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', mb: 6 }} />

        {/* Who am I */}
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <SectionLabel>Who am I</SectionLabel>
          <Typography variant="body1" sx={{
            maxWidth: '780px',
            mx: 'auto',
            lineHeight: 1.9,
            opacity: 0.9,
            fontSize: '1rem',
          }}>
            Marc Campora is a French enterprise architect, technical leader, and software
            executive recognized for his expertise in high-scale cloud platforms, data architectures,
            and serverless computing. He currently operates as an independent technical consultant
            and is an official AWS Community Builder.
          </Typography>
        </Box>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', mb: 6 }} />

        {/* Services */}
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <SectionLabel>Services</SectionLabel>
          <Grid container spacing={3} justifyContent="center">
            {SERVICES.map((s) => (
              <Grid key={s.title} size={{ xs: 12, sm: 6, lg: 3 }}>
                <ServiceCard title={s.title} desc={s.desc} />
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', mb: 6 }} />

        {/* Publications & Talks */}
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <SectionLabel>Recent Publications &amp; Talks</SectionLabel>
          <Box sx={{ maxWidth: '860px', mx: 'auto' }}>
            {PUBLICATIONS.map((p) => (
              <PublicationRow key={p.url} {...p} />
            ))}
          </Box>
        </Box>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', mb: 5 }} />

        {/* Certifications */}
        <Box sx={{ textAlign: 'center' }}>
          <SectionLabel>AWS Certifications</SectionLabel>
          <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 1 }}>
            <img style={{ width: '90px' }} src="ccp.png" alt="ccp"/>
            <img style={{ width: '90px' }} src="caip.png" alt="caip"/>
            <img style={{ width: '90px' }} src="csap.png" alt="csap"/>
            <img style={{ width: '90px' }} src="css.png" alt="css"/>
            <img style={{ width: '90px' }} src="cdas.png" alt="cdas"/>
          </Box>
        </Box>

      </Container>

      {/* Footer */}
      <Box sx={{ textAlign: 'center', pb: 3 }}>
        <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', mb: 2 }} />
        <Typography variant="caption" sx={{ opacity: 0.4, display: 'block' }}>
          Photo by <a href="https://unsplash.com/@bady?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">bady abbas</a>, <a href="https://unsplash.com/@lucabravo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Luca Bravo</a> and <a href="https://unsplash.com/@joelfilip?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Joel Filipe</a> on <a href="https://unsplash.com/photos/white-cubby-shelf-hxi_yRxODNc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
        </Typography>
        <Typography variant="caption" sx={{ opacity: 0.7, display: 'block', mt: 0.5 }}>
          © 2026 Lazgar, all rights reserved
        </Typography>
      </Box>

    </ThemeProvider>
  );
}

export default App;
