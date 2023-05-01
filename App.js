import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { Provider } from 'react-redux';

import Login from './screens/Login';
import Signup from './screens/Signup';
import Inventory from './screens/Inventory';
import Grocery from './screens/Grocery';
import Profile from './screens/Profile';
import ManageItem from './screens/ManageItem.js';
import store from './store/store';

const BottomTabs = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  // const isLogIn = useSelector((state) => state.user.isLogIn);

  function InventoryOverview() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name='Inventory List'
          component={Inventory}
          options={{ headerShown: false }}
        />
        <Stack.Screen name='Add Item' component={ManageItem} />
      </Stack.Navigator>
    );
  }

  function GroceryOverview() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name='Grocery List'
          component={Grocery}
          options={{ headerShown: false }}
        />
        <Stack.Screen name='Add Item' component={ManageItem} />
      </Stack.Navigator>
    );
  }

  function AuthenticatedNavigator() {
    return (
      <BottomTabs.Navigator
        screenOptions={({ navigation }) => ({
          headerTintColor: 'black',
          tabBarActiveTintColor: '#007838',
        })}
      >
        <BottomTabs.Screen
          name='Inventory'
          component={InventoryOverview}
          options={{
            title: 'Inventory',
            tabBarLabel: 'Inventory',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name='home' size={size} color={color} />
            ),
          }}
        />
        <BottomTabs.Screen
          name='Grocery'
          component={GroceryOverview}
          options={{
            title: 'Grocery',
            tabBarLabel: 'Grocery',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name='cart' size={size} color={color} />
            ),
          }}
        />
        <BottomTabs.Screen
          name='Profile'
          component={Profile}
          options={{
            title: 'Profile',
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name='user' size={size} color={color} />
            ),
          }}
        />
      </BottomTabs.Navigator>
    );
  }

  function AuthNavigator() {
    return (
      <Stack.Navigator>
        <Stack.Screen name='Log in' component={Login} />
        <Stack.Screen name='Sign up' component={Signup} />
      </Stack.Navigator>
    );
  }

  function Navigation() {
    const isLogIn = useSelector((state) => state.user.isLogIn);

    return (
      <NavigationContainer>
        {!isLogIn && <AuthNavigator />}
        {isLogIn && <AuthenticatedNavigator />}
      </NavigationContainer>
    );
  }

  return (
    <>
      <StatusBar style='dark' />
      <Provider store={store}>
        <Navigation />
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
