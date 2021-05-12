import React from 'react';
import 'react-native-gesture-handler';
import {ThemeProvider} from 'styled-components/native';
import StatusBarComponent from './core/components/StatusBar/StatusBar.component';
import Routes from './Routes';
import {theme} from './styles/theme';

export default function index() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBarComponent />
      <Routes />
    </ThemeProvider>
  );
}
