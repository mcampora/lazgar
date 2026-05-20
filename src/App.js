import './App.css';
import React from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container, CssBaseline, Typography, Divider } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

/* ── Design tokens (from Lazgar Identity System) ── */
const T = {
  ink:       'oklch(0.22 0.04 252)',
  ink2:      'oklch(0.32 0.06 252)',
  steel:     'oklch(0.52 0.07 245)',
  paper:     'oklch(0.985 0.005 90)',
  bone:      'oklch(0.95 0.008 80)',
  line:      'oklch(0.88 0.008 250)',
  lineSoft:  'oklch(0.92 0.006 250)',
  muted:     'oklch(0.52 0.01 250)',
  accent:    'oklch(0.72 0.16 55)',
};

const FONTS = {
  sans:  '"Inter Tight", system-ui, sans-serif',
  mono:  '"JetBrains Mono", monospace',
  serif: '"Fraunces", serif',
};

let _markId = 0;
/* ── SVG mark (inline, from identity system) ── */
function LazgarMark({ size = 40, color = T.ink, accentColor = T.accent }) {
  const id = React.useRef(`lzg${++_markId}`).current;
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" aria-hidden="true">
      <defs>
        <mask id={`cut-${id}`}>
          <rect width="200" height="200" fill="white"/>
          <rect x="66" y="56" width="22" height="74" fill="black"/>
          <rect x="66" y="118" width="76" height="22" fill="black"/>
        </mask>
      </defs>
      <rect x="28" y="28" width="144" height="144" rx="16" fill={color} mask={`url(#cut-${id})`}/>
      <path d="M 172 28 L 172 60 L 140 28 Z" fill={accentColor}/>
    </svg>
  );
}

/* ── Mono label ── */
function MonoLabel({ children, sx = {} }) {
  return (
    <Box component="span" sx={{
      fontFamily: FONTS.mono,
      fontSize: '11px',
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: T.muted,
      ...sx,
    }}>{children}</Box>
  );
}

/* ── Section heading ── */
function SectionLabel({ children }) {
  return (
    <MonoLabel sx={{ display: 'block', mb: 4, color: T.muted }}>
      {children}
    </MonoLabel>
  );
}

/* ── Photo card (approach images) ── */
function PhotoCard({ image }) {
  return (
    <Box sx={{
      width: '100%',
      aspectRatio: '1 / 1',
      borderRadius: '12px',
      overflow: 'hidden',
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }} />
  );
}

/* ── Service card ── */
function ServiceCard({ num, title, desc, featured }) {
  return (
    <Box sx={{
      border: `1px solid ${featured ? T.ink : T.line}`,
      borderRadius: '14px',
      p: 3.5,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      backgroundColor: featured ? T.ink : T.paper,
      color: featured ? T.paper : T.ink,
    }}>
      <MonoLabel sx={{ color: T.accent }}>{num}</MonoLabel>
      <Typography sx={{
        fontFamily: FONTS.sans,
        fontWeight: 600,
        fontSize: '18px',
        letterSpacing: '-0.01em',
        lineHeight: 1.2,
        color: featured ? T.paper : T.ink,
      }}>{title}</Typography>
      <Typography sx={{
        fontFamily: FONTS.sans,
        fontSize: '13px',
        lineHeight: 1.65,
        color: featured ? 'rgba(255,255,255,0.65)' : T.muted,
        flexGrow: 1,
      }}>{desc}</Typography>
    </Box>
  );
}

/* ── Publication row ── */
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
  { num: '01 / strategy', title: 'Technology Alignment', desc: 'Identify the need for modernisation, define the target architecture, and map out the trajectories to get there — bridging business intent with technical direction.' },
  { num: '02 / delivery', title: 'Solutions', desc: 'Prototype and validate ideas, find or develop the right skills within your teams, and lead end-to-end transformations from inception to delivery.', featured: true },
  { num: '03 / cloud',    title: 'FinOps', desc: 'Extensive hands-on experience with AWS cost management — designing governance frameworks, rightsizing workloads, and embedding financial accountability into engineering culture.' },
  { num: '04 / ops',      title: 'Infrastructure', desc: 'Automate and optimise cloud infrastructure at scale — from CI/CD pipelines and IaC to platform reliability, observability, and operational excellence.' },
];

function PublicationRow({ type, date, title, url }) {
  const isArticle = type === 'article';
  return (
    <Box component="a" href={url} target="_blank" rel="noopener noreferrer" sx={{
      display: 'flex',
      alignItems: 'center',
      gap: 2,
      py: 1.5,
      px: 2,
      borderRadius: '8px',
      textDecoration: 'none',
      color: 'inherit',
      transition: 'background 0.15s',
      '&:hover': { backgroundColor: T.bone },
    }}>
      <MonoLabel sx={{ minWidth: 72, fontSize: '10px', color: T.muted, opacity: 0.7 }}>{date}</MonoLabel>
      <Box sx={{ width: 5, height: 5, borderRadius: '50%', flexShrink: 0, backgroundColor: isArticle ? T.steel : T.accent }} />
      <Typography sx={{ fontFamily: FONTS.sans, fontSize: '14px', color: T.ink2, lineHeight: 1.5, flexGrow: 1, textAlign: 'left' }}>
        {title}
      </Typography>
      <MonoLabel sx={{ ml: 'auto', flexShrink: 0, fontSize: '9px', opacity: 0.5 }}>
        {isArticle ? 'Article' : 'Talk'}
      </MonoLabel>
    </Box>
  );
}

/* ── MUI theme (minimal, light) ── */
const theme = createTheme({
  palette: {
    mode: 'light',
    background: { default: T.bone, paper: T.paper },
    text: { primary: T.ink, secondary: T.muted },
  },
  typography: { fontFamily: FONTS.sans },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* ── Nav ── */}
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: { xs: 3, md: 6 },
        py: 2.5,
        borderBottom: `1px solid ${T.lineSoft}`,
        backgroundColor: T.paper,
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <LazgarMark size={44} />
          <Box sx={{ width: '1px', alignSelf: 'stretch', backgroundColor: T.line }} />
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <Typography sx={{ fontFamily: FONTS.sans, fontWeight: 600, fontSize: '22px', letterSpacing: '-0.025em', lineHeight: 1, color: T.ink }}>
              LAZGAR
            </Typography>
            <Box component="span" sx={{ fontFamily: FONTS.mono, fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', color: T.muted }}>
              IT strategy &amp; solutions
            </Box>
          </Box>
        </Box>
        <Box component="a"
          href="mailto:marc.campora@lazgar.net?subject=Please tell me more...&body=Hello, I'd like to know more about your expertise and the type of services you are offering. Please come back to me. Regards."
          sx={{
            fontFamily: FONTS.sans,
            fontSize: '13px',
            fontWeight: 500,
            color: T.paper,
            backgroundColor: T.ink,
            px: 2.5,
            py: 1.25,
            borderRadius: '999px',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 1,
            '&:after': { content: '""', width: 6, height: 6, borderRadius: '50%', backgroundColor: T.accent },
          }}>
          Contact
        </Box>
      </Box>

      {/* ── Hero / approach images ── */}
      <Box sx={{ px: { xs: 2, md: 4 }, pt: 4, pb: 2 }}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Box sx={{ flex: 1, minWidth: 0 }}><PhotoCard image="archi1.jpg" /></Box>
          <Box sx={{ flex: 1, minWidth: 0 }}><PhotoCard image="archi2.jpg" /></Box>
          <Box sx={{ flex: 1, minWidth: 0 }}><PhotoCard image="archi3.jpg" /></Box>
        </Box>
      </Box>

      <Container maxWidth="xl" sx={{ py: 6 }}>

        {/* ── Who am I ── */}
        <Box sx={{ mb: 8 }}>
          <SectionLabel>Who am I</SectionLabel>
          <Typography sx={{
            fontFamily: FONTS.sans,
            fontWeight: 500,
            fontSize: { xs: '22px', md: '32px' },
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
            maxWidth: '26ch',
            color: T.ink,
            mb: 3,
          }}>
            Enterprise architect,{' '}
            <Box component="em" sx={{ fontFamily: FONTS.serif, fontStyle: 'italic', fontWeight: 700, color: T.steel }}>
              cloud specialist
            </Box>
            , and independent consultant.
          </Typography>
          <Typography sx={{
            fontFamily: FONTS.sans,
            fontSize: '17px',
            lineHeight: 1.7,
            color: T.ink2,
            maxWidth: '62ch',
          }}>
            Marc Campora is a French enterprise architect, technical leader, and software executive
            recognized for his expertise in high-scale cloud platforms, data architectures, and
            serverless computing. He currently operates as an independent technical consultant
            and is an official AWS Community Builder.
          </Typography>
        </Box>

        <Divider sx={{ borderColor: T.line, mb: 8 }} />

        {/* ── Services ── */}
        <Box sx={{ mb: 8 }}>
          <SectionLabel>Services</SectionLabel>
          <Grid container spacing={3}>
            {SERVICES.map((s) => (
              <Grid key={s.title} item xs={12} sm={6} lg={3}>
                <ServiceCard {...s} />
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider sx={{ borderColor: T.line, mb: 8 }} />

        {/* ── Publications & Talks ── */}
        <Box sx={{ mb: 8 }}>
          <SectionLabel>Recent Publications &amp; Talks</SectionLabel>
          <Box sx={{ maxWidth: '860px' }}>
            {PUBLICATIONS.map((p) => (
              <PublicationRow key={p.url} {...p} />
            ))}
          </Box>
        </Box>

        <Divider sx={{ borderColor: T.line, mb: 8 }} />

        {/* ── Certifications ── */}
        <Box sx={{ mb: 4 }}>
          <SectionLabel>AWS Certifications</SectionLabel>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
            {['ccp','caip','csap','css','cdas'].map(c => (
              <img key={c} style={{ width: '80px' }} src={`${c}.png`} alt={c} />
            ))}
          </Box>
        </Box>

      </Container>

      {/* ── Footer ── */}
      <Box sx={{ borderTop: `1px solid ${T.line}`, px: { xs: 3, md: 6 }, py: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <LazgarMark size={24} />
          <MonoLabel sx={{ fontSize: '10px' }}>© 2026 Lazgar, all rights reserved</MonoLabel>
        </Box>
        <MonoLabel sx={{ fontSize: '9px', opacity: 0.5 }}>
          Photo by{' '}
          <a href="https://unsplash.com/@bady" style={{ color: 'inherit' }}>bady abbas</a>,{' '}
          <a href="https://unsplash.com/@lucabravo" style={{ color: 'inherit' }}>Luca Bravo</a> and{' '}
          <a href="https://unsplash.com/@joelfilip" style={{ color: 'inherit' }}>Joel Filipe</a> on Unsplash
        </MonoLabel>
      </Box>

    </ThemeProvider>
  );
}
