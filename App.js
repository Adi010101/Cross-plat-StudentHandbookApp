/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HandbookApp from './screens/HomePage';
import Mseufvmg from './screens/Mseufvmg';
import MseufStory from './screens/MseufStory';
import { NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();
export default class App extends Component {

  render (){
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Home"
            component={HandbookApp}
            options={{
              headerShown: false,
            }}/>
          <Stack.Screen
            name="Mseufvmg"
            component={Mseufvmg}
            options={{
              title: "Student Handbook",
              headerStyle:{
                backgroundColor: '#7c0607',
              },
              headerTintColor: 'white',
            }}
          />
          <Stack.Screen
            name="MseufStory"
            component={MseufStory}
            options={{
              title: "Student Handbook",
              headerStyle:{
                backgroundColor: '#7c0607',
              },
              headerTintColor: 'white'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}


