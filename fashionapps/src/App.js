import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { LogBox, StyleSheet } from 'react-native';
import Router from './router';

const App = () => {
  LogBox.ignoreAllLogs(['Failed child context type: Invalid child context virtualizedCell.cellKey of type number supplied to CellRenderer, expected string'])
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
