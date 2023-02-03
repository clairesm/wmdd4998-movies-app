import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  NativeBaseProvider,
  Container,
  Text,
} from 'native-base';
import Header from './src/components/layout/Header';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AppStack from './src/components/stacks/AppStack';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar style='light' />
      {/* <Header /> */}
      <AppStack />
    </NativeBaseProvider>
  );
}
