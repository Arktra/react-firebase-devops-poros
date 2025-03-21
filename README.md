# Bookstore App with CI/CD Pipeline

This repository contains a React bookstore application with automated CI/CD pipeline using GitHub Actions for deployment to Firebase Hosting.

## Project Structure

The project follows a feature-branch workflow with CI/CD integration:

- `main` branch: Production-ready code
- `dev` branch: Development and integration branch
- Feature branches: For developing new features

## Features

- React-based bookstore application
- Custom Navbar and Footer components
- Automated testing and deployment
- Firebase hosting integration

## CI/CD Pipeline

This project uses GitHub Actions for continuous integration and deployment:

1. Automatic build triggered on push to `main` branch
2. Unit tests run to validate code quality
3. Successful builds are automatically deployed to Firebase Hosting

## Development Workflow

1. Create a feature branch from `dev`:
git checkout dev
git checkout -b feature-name

2. Make changes and commit:
git add .
git commit -m "Message"
git push origin feature-name

3. Create a Pull Request to merge into `dev`

4. After PR approval and merge, create a PR from `dev` to `main` for production deployment

## Setup Instructions

### Prerequisites
- Node.js and npm
- Firebase account
- GitHub account

### Local Development
1. Clone the repository
git clone https://github.com/Arktra/react-firebase-devops.git
cd react-firebase-devops

2. Install dependencies
npm install

3. Start development server
npm start

### Firebase Setup
1. Install Firebase CLI
npm install -g firebase-tools

2. Login to Firebase
firebase login

3. Initialize Firebase in your project
firebase init

## Deployment

Deployments happen automatically when changes are pushed to the `main` branch.

To deploy manually:
npm run build
firebase deploy

## Live Demo

The live application is available at: [https://react-firebase-devops-poros.web.app/](https://react-firebase-devops-poros.web.app/)
