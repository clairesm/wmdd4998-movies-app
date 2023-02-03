import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MoviesContainer from '../containers/MoviesContainer';
import SearchesContainer from '../containers/SearchesContainer';
import TvShowsContainer from '../containers/TvShowsContainer';

const Tab = createMaterialTopTabNavigator();

const MyTabsScreens = ({ navigation }) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Movies'
        component={MoviesContainer}
        navigation={navigation}
      />
      <Tab.Screen
        name='Search Results'
        component={SearchesContainer}
        navigation={navigation}
      />
      <Tab.Screen
        name='TV Shows'
        component={TvShowsContainer}
        navigation={navigation}
      />
    </Tab.Navigator>
  );
};

export default MyTabsScreens;
