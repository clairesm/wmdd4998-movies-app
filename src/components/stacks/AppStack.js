import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShowContainer from '../containers/ShowContainer';
import MyTabsScreens from '../screens/MyTabsScreens';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Tabs'
          component={MyTabsScreens}
          options={{
            title: 'Movies App',
            headerStyle: {
              backgroundColor: '#2c3e50',
            },
            headerTitleStyle: {
              color: '#fff',
            },
          }}
        ></Stack.Screen>
        <Stack.Screen
          name='Show'
          component={ShowContainer}
          options={({ route }) => ({
            title: route.params.id,
          })}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
