import { StatusBar } from 'expo-status-bar';
import { Modal, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import HealthPage from './assets/Screens/HealthPage';
import StartPage from './assets/Screens/StartPage';
import HomePage from './assets/Screens/HomePage';
import NavigationScreen from './assets/Screens/NavigationScreen';
import 'react-native-gesture-handler';
import MenuPopup from './assets/Screens/MenuPopup';
import NavigationIcon from './assets/Screens/NavigationIcon';
import ChartPage from './assets/Screens/ChartPage';
import Model from './assets/Screens/Model';
import ActionMenu from './assets/Screens/ActionMenu';
import MenuBar from './assets/Screens/MenuBar';
import BatteryLevel from './assets/Screens/BatteryLevel';
import ChartPageTwo from './assets/Screens/ChartPageTwo';




export default function App() {
  return (
    <View style={styles.container}>
      {/* <HealthPage/> */}
      {/* <ActivityIndicator size={"large"}/> */}
      {/* <StartPage/> */}
      {/* <HomePage/> */}
      <NavigationScreen/>
      {/* <MenuPopup/> */}
      {/* <NavigationIcon/> */}
      {/* <MenuBar/> */}
      {/* <ChartPage/> */}
      {/* <Model/> */}
      {/* <ActionMenu/> */}
      {/* <BatteryLevel/> */}
     {/* <ChartPageTwo/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
