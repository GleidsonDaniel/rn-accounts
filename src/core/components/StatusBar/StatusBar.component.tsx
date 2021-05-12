import React from 'react';
import {StatusBar} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import styled from 'styled-components/native';
import {theme} from '../../../styles/theme';

interface IStatusBarContainer {
  height: number;
}

const StatusBarContainer = styled.View<IStatusBarContainer>`
  width: 100%;
  height: ${({height}) => `${height}px`};
  background-color: ${theme.colors.purple};
`;

export default function StatusBarComponent() {
  const height = getStatusBarHeight(true);
  return (
    <StatusBarContainer height={height}>
      <StatusBar
        animated={true}
        backgroundColor={theme.colors.purple}
        barStyle="light-content"
      />
    </StatusBarContainer>
  );
}
