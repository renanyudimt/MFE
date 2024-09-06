# Microfrontend Study Project

This project is a study on Microfrontends, demonstrating how to integrate multiple frameworks, specifically React and Vue, into a single application. The goal is to showcase the benefits and challenges of using Microfrontends in a modern web development environment.

## Table of Contents

- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Microfrontends is an architectural style where independently deliverable frontend applications are composed into a greater whole. This project demonstrates how to use React and Vue together in a single application, leveraging the strengths of both frameworks.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vue**: A progressive framework for building user interfaces.
- **Webpack**: A module bundler to bundle JavaScript files for usage in a browser.
- **Module Federation**: A feature in Webpack 5 that allows the sharing of modules across different builds.

## Project Structure

microfrontend-study/ ├── react-app/ │ ├── src/ │ ├── public/ │ ├── package.json │ └── webpack.config.js ├── vue-app/ │ ├── src/ │ ├── public/ │ ├── package.json │ └── webpack.config.js ├── container/ │ ├── src/ │ ├── public/ │ ├── package.json │ └── webpack.config.js └── README.md

- **react-app**: Contains the React application.
- **vue-app**: Contains the Vue application.
- **container**: The main application that integrates both React and Vue apps.

## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
