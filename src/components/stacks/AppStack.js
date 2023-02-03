import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from '../screens/IndexScreen';
import ShowScreen from '../screens/ShowScreen';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name='Index'
        component={IndexScreen}
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
        component={ShowScreen}
        options={({ route }) => ({
          title: route.params.label,
        })}
      ></Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>;
};

export default AppStack;
