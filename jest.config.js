const { createJestConfig } = require('@knapsack-pro/jest');

// This inherits ALL of Create React App's default Jest configuration
module.exports = createJestConfig({
  // Just use CRA's preset - this gives us JSX support, transforms, etc.
  preset: 'react-scripts',
}); 