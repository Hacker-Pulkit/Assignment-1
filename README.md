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
│   │                   
├──components/
│   ├── ui/
│   │    ├──Spotlight.tsx
│   │    ├──animated-tooltip.tsx
│   │    ├──aurora-background.tsx
│   │    ├──background-gradient.tsx
│   │    ├──moving-border.tsx
│   │    ├──navbarmenu.tsx
│   │    ├──wavy-background.tsx
│   │
│   ├── ApplicationProcess.tsx
│   ├── Application_Form.tsx
│   ├── Banner.tsx
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   │                                     
├── data/
│   ├── step-required.json
│   
├── utils/
│   ├── cn.ts
├── next-enc.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── README.md

## Technologies Used
1.Next.js
2.TypeScript
3.Material-UI
4.React Hook Form
5.Yup

## Features
1.Landing Page: Includes sections like About Us, Application Process, and FAQ.
2.Application Form: A form with validation using React Hook Form and Yup.
3.Responsive Design: Uses Material-UI and Aceternity-UI for a responsive and accessible design.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
