import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.dermidog.app',
  appName: 'Dermidog',
  webDir: 'out',
  server: {
    androidScheme: 'https'
  }
};

export default config;
