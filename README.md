# Assignment-1
This is a microfinance website built using Next.js and TypeScript. The website includes a landing page with sections about the organization, the application process, and a FAQ. There is also an application form that users can fill out.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)
## Installation

To get started, clone the repository and install the dependencies:

sh
git clone https://github.com/Hacker-Pulkit/Microfinance-Website.git
cd Microfinance-Website
npm install

## Usage
To run the development server:
 sh : npm run dev
## Folder Structure
Here's a brief overview of the folder structure:
website/src
├── app/
│   ├── favicon.ico
│   │── global.css
│   │── layout.tsx
│   ├── page.tsx
│   │                   ├── ApplicationForm.Module.css
├──components/
│   ├── ui/
│   │   ├── ApplicationProcess.Module.css
│   │                   ├──page.tsx
│   ├── FAQ/
│   │                   ├── FAQ.Module.css
│   │                   ├──page.tsx
│   ├── Footer/
│   │                   ├── Footer.Module.css
│   │                   ├──page.tsx
│   ├── Header/
│                       ├── Header.css
│                       ├──page.tsx
├── pages/
│   ├── _app.tsx
│   ├── index.tsx
├── public/
│   ├── favicon.ico
│   ├── .net.svg
│   ├── .vercel.svg
├── styles/
│   ├── globals.css
│   ├── home.module.css
├── tsconfig.json
├── package.json
└── README.md
