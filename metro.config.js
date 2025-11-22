const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Activer le transformer SVG pour importer directement des .svg comme composants React
config.transformer.babelTransformerPath = require.resolve('react-native-svg-transformer');
config.resolver.assetExts = config.resolver.assetExts.filter(ext => ext !== 'svg');
config.resolver.sourceExts.push('svg');

module.exports = config;
