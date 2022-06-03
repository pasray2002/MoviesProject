import * as React from 'react';
import { NavigationContainer,DefaultTheme,DarkTheme
 } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  View,
  ScrollView,Image,
  LogBox
} from 'react-native'
import { NativeBaseProvider } from 'native-base';
import Login from "./component/Login";
import Home from "./component/Home";
import Search from './component/Search';
import VideoPlayer from './component/VideoPlayer';
import Suscribe from './component/Suscribe';
import Explore from './component/Explore'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Reducer } from './reducer/Reducer';
// <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
const store = createStore(Reducer)
const Stack = createNativeStackNavigator();
const Bottom = createBottomTabNavigator();
const Root = () => {
  return (
    <Bottom.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color}) => {
          let iconName;

          if (route.name === 'Home') {
            //iconName = require('./asset/accueil.png')
            iconName = 'https://cdn-icons-png.flaticon.com/128/1946/1946488.png'
              
          } else if (route.name === 'Explore') {
            //iconName = require('./asset/boussole.png')
            iconName = 'https://cdn-icons-png.flaticon.com/128/876/876752.png'
          }else if(route.name === 'Suscribe'){
            //iconName = require('./asset/subscribe.png')
            iconName = 'https://cdn-icons.flaticon.com/png/128/2989/premium/2989849.png?token=exp=1653512645~hmac=c7e69c2198167a214c7be7e70ed96b10'
          }

          // You can return any component that you like here!
          return <Image source={{uri:iconName}} style={{height:30,width:30,tintColor:color}}/>;
        },
        tabBarActiveTintColor: 'skyblue',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Bottom.Screen name='Home' component={Home} options={{ headerShown: false }} />
      <Bottom.Screen name='Explore' component={Explore} options={{ headerShown: false }} />
      <Bottom.Screen name='Suscribe' component={Suscribe} options={{ headerShown: false }} />
    </Bottom.Navigator>
  );

}
const App = () => {
  const customDarkTheme = {
    ...DarkTheme,
    color:{
      ...DarkTheme.colors,
      headerColor:"#404040"
    }
  }

  const customDefaultTheme = {
    ...DefaultTheme,
    color:{
      ...DefaultTheme.colors,
      headerColor:"white"
    }
  }
  return (
    //<FirebaseContext.Provider value={new Firebase()}>
    <Provider store={store}>
      <NavigationContainer initialRouteName="Home"
      screenOptions={{ headerShown: false }} >
      <Stack.Navigator>
        <Stack.Screen name='Root' component={Root} options={{ headerShown: false }} />
        <Stack.Screen name='Search' component={Search} options={{ headerShown: false }} />
        <Stack.Screen name='VideoPlayer' component={VideoPlayer} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
    // </FirebaseContext.Provider>
  );
};
LogBox.ignoreLogs(['Warning: Async Storage has been extracted from react-native core']);
export default App;
