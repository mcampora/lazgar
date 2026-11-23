# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Lazgar is a static React marketing/portfolio site for a consulting company. It's hosted on AWS S3 (eu-west-1) at lazgar.net. There is no backend, no database, and no authentication.

## Commands

```bash
npm install       # Install dependencies
npm start         # Dev server at http://localhost:3000
npm run build     # Production build to ./build/
npm test          # Run tests (Jest, watch mode)
```

## Architecture

Single-page app bootstrapped with Create React App. The entire app lives in `src/App.js` — one `App` component with a nested `Pillar` subcomponent for service cards.

- **UI library:** Material-UI v4 (`@material-ui/core`). Uses `makeStyles` (MUI v4 CSS-in-JS pattern — not upgraded to v5).
- **Dark mode:** Hardcoded `prefersDarkMode = true`, ignoring system preference.
- **Static assets:** Images and certification badges (ccp.png, caip.png, csap.png, etc.) live in `public/`.
- **Contact:** Email-only via `mailto:` link — no contact form.

## Deployment

Every push triggers the GitHub Actions workflow (`.github/workflows/update.yml`), which:
1. Runs `deploy-infra.sh` (CloudFormation stack update)
2. Builds the React app
3. Syncs `./build` to `s3://www.lazgar.net/` with `--delete`

AWS credentials (`AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`) must be set as GitHub repository secrets. The CloudFormation template is `lazgar-infra.yaml`.

## Development Environment

A Vagrant setup (Ubuntu/focal64) is available for isolated development:
```bash
vagrant up    # Start VM (installs all dependencies automatically)
vagrant ssh   # Connect; project files are at /vagrant
vagrant halt  # Stop VM when done
```

Requires VirtualBox and Vagrant installed locally. AWS credentials must be configured inside the VM via `aws configure` for CloudFormation work.
