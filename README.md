# Recruitment Frontend

A frontend application built with React and various tools for recruitment purposes.

## Version

0.1.0

## Setup

To get started with the project, follow these steps:

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and [Yarn](https://yarnpkg.com/) installed.

### Installation

1. Clone the repository: git clone <repository-url>
2. Navigate to the project directory: cd recruitment-frontend
3. Install the dependencies using Yarn: yarn install
4. Run the application in development mode: yarn start

## Technologies

- React `^18.2.0`
- Redux with Redux Toolkit `^1.9.7`
- React-Redux `^8.1.3`
- TypeScript `^4.4.2`
- Sass `^1.69.3`
- React-Icons `^4.11.0`
- Chart.js with React integration `^4.4.0` and `^5.2.0`
- Joi for validation `^17.11.0`
- Redux persist for state persistence `^6.0.0`
- and others...

## Scripts

- `yarn start`: Start the development server
- `yarn test`: Run tests
- `yarn build`: Build the app for production
- `yarn lint`: Lint the code with ESLint
- `yarn format`: Format the code with Prettier

## Custom Webpack Configuration

This project uses [CRACO (Create React App Configuration Override)](https://github.com/gsoft-inc/craco) to customize the default Webpack configuration provided by `create-react-app`. This allows for more flexibility in configuring the build process without ejecting from `create-react-app`.

### Production

- Browsers with more than 0.2% market share
- Browsers that are not considered "dead"
- Excluding Opera Mini

### Development

- Last version of Chrome
- Last version of Firefox
- Last version of Safari

## Development Tools

- ESLint with Prettier integration for linting and formatting.

## License

[MIT](LICENSE)
