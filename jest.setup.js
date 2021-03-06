/* global jest fetch */

fetch = jest.fn(() => new Promise(resolve => resolve()));

jest.mock('react-native-fs', () => ({
  writeFile: jest.fn(() => Promise.resolve()),
  ExternalStorageDirectoryPath: 'package-path',
}));

jest.mock('react-native-splash-screen', () => ({
  hide: jest.fn(),
}));

jest.mock('react-native-device-info', () => ({
  getVersion: jest.fn(),
}));

jest.mock('react-native-fetch-blob', () => ({
  DocumentDir: () => {},
  polyfill: () => {},
  config() {
    return this;
  },
  fetch() {
    return this;
  },
  progress() {
    return this;
  },
  then() {
    return this;
  },
  catch() {
    return this;
  },
  fs: {
    dirs: {},
  },
}));

jest.mock('react-native-simple-toast', () => (jest.fn()));

jest.mock('ScrollView', () => jest.genMockFromModule('ScrollView'));

jest.mock('Linking', () =>
  ({
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    openURL: jest.fn(),
    canOpenURL: jest.fn(
      () => new Promise(resolve => resolve(true)),
    ),
    getInitialURL: jest.fn(),
  }),
);

jest.mock('WebView', () => 'WebView');

jest.mock('react-native-zip-archive', () => ({
  unzip: jest.fn(),
}));
