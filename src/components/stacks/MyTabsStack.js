import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MoviesContainer from '../containers/MoviesContainer';
import SearchesContainer from '../containers/SearchesContainer';
import TvShowsContainer from '../containers/TvShowsContainer';

import { Stack } from 'native-base';
import DetailsContainer from '../containers/ShowContainer';

const Tab = createMaterialTopTabNavigator();

const MyTabsStack = () => {
  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
};

export default MyTabsStack;
