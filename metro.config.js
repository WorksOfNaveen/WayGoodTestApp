const path = require('path');
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
  reporter: require('./metro.reporter'),
  resolver: {
    resolveRequest: (context, moduleName, platform) => {
      if (moduleName === '@react-navigation/stack') {
        return {
          filePath: path.resolve(__dirname, 'src/navigation/stack.ts'),
          type: 'sourceFile',
        };
      }
      return context.resolveRequest(context, moduleName, platform);
    },
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
