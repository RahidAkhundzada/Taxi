// module.exports = {
//   preset: 'react-native',
//   moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
//   jest: {
//     "verbose": true
//   }
// };

module.exports = async () => {
  return {
    preset: 'react-native',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    verbose: true,
    setupFilesAfterEnv: [
      './tests/setupTestFrameworkScriptFile.js'
    ],
  }
};
