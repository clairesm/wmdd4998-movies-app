import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MoviesContainer from '../containers/MoviesContainer';
import SearchesContainer from '../containers/SearchesContainer';
import TvShowsContainer from '../containers/TvShowsContainer';

import { Stack } from 'native-base';
import DetailsContainer from '../containers/DetailsContainer';

const Tab = createMaterialTopTabNavigator();

const MyTabsStack = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name='Movies'
          component={MoviesContainer}
        />
        {/* <Stack.Navigator>
            <Stack.Screen
              name='Show'
              component={DetailsContainer}
            />
          </Stack.Navigator> */}
        {/* </Tab.Screen> */}
        <Tab.Screen
          name='Search Results'
          component={SearchesContainer}
        />
        {/* <Stack.Navigator>
            <Stack.Screen
              name='Show'
              component={DetailsContainer}
            />
          </Stack.Navigator> */}
        {/* </Tab.Screen> */}
        <Tab.Screen
          name='TV'
          component={TvShowsContainer}
        />
        {/* <Stack.Navigator>
            <Stack.Screen
              name='Show'
              component={DetailsContainer}
            />
          </Stack.Navigator> */}
        {/* </Tab.Screen> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MyTabsStack;
