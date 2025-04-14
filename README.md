# Aron Szabo's Developer Portfolio

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## About

This portfolio website is based
on [Abu Said's developer-portfolio template](https://github.com/said7388/developer-portfolio) with modifications and
personalization.

## Features

- Updated content for my use case:
    - Modified contact API
    - Updated package dependencies (Next, tailwind, etc...)
    - Updated tailwindcss and postcss config to accommodate the updates
    - Removed Blog portion

## Deployment

### Choose appropriate output mode in your next.config.js file

### Static Export (GitHub Pages)

1. Set in `next.config.js`:
   ```javascript
   output: 'export',
   images: {
     unoptimized: true
   }

2. Add CNAME to public/ if using custom domain: yourdomain.com

# Contribution Guidelines

While this project is primarily a personal portfolio, if you wish to fork or adapt:

1. Please respect the original author's work
2. Follow the attribution requirements
3. Make significant personal modifications


Can simulate github pages local structure for testing by running

### Simulate GitHub Pages structure
1. mkdir -p test/developer-portfolio
2. cp -r out/* test/developer-portfolio/
3. npx serve test -p 3000
