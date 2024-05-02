import { View, Text, Modal } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'
import HomePage from './HomePage';
import StartPage from './StartPage';
import HealthPage from './HealthPage';
import MenuPopup from './MenuPopup';
import ChartPage from './ChartPage';
import ChartPageTwo from './ChartPageTwo';


const Stack = createStackNavigator();

const NavigationScreen = () => {
  return (
    
      <NavigationContainer>

      <Stack.Navigator 
       screenOptions={
        {
            headerShown: false,
        }
    }>
      <Stack.Screen name="Start" component={StartPage} />
      <Stack.Screen name="Home" component={HomePage} options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}/>
        <Stack.Screen name="Health" component={HealthPage} options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}/>
        {/* <Stack.Screen name="PMenu" component={MenuPopup} /> */}

        <Stack.Screen name="ChartPage" component={ChartPage}options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }} />

<Stack.Screen name="ChartPageTwo" component={ChartPageTwo}options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }} />

        {/* <Stack.Screen name="Modal" component={Modal}options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }} />
      */}
    </Stack.Navigator>

      </NavigationContainer>
    
  )
}

export default NavigationScreen