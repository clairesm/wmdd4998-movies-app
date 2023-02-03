import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import MoviesContainer from './src/components/containers/MoviesContainer';
import SearchesContainer from './src/components/containers/SearchesContainer';
import TvShowsContainer from './src/components/containers/TvShowsContainer';
import Header from './src/components/layout/Header';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MyTabsStack from './src/components/stacks/MyTabsStack';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar style='light' />
      <Header />
      {/* <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name='Movies'
            component={MoviesContainer}
          />
          <Tab.Screen
            name='Search Results'
            component={SearchesContainer}
          />
          <Tab.Screen
            name='TV Shows'
            component={TvShowsContainer}
          />
        </Tab.Navigator>
      </NavigationContainer> */}
      <MyTabsStack />
    </NativeBaseProvider>
  );
}
