import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CanteenUsagesScreen from '../components/canteenUsages/view/CanteenUsagesScreen';
import MenuListScreen from '../components/menuList/view/MenuListScreen';
import MenuUsageReport from '../components/menuUsagesReport/view/MenuUsageReport';
import Dashboard from '../components/Dashboard/Dashboard';
import { createStackNavigator } from '@react-navigation/stack';

const Drawer = createDrawerNavigator();
// const DashboardStack = createStackNavigator()
// const CanteenUsagesStack = createStackNavigator()

const DrawerNav = () => {
  // const DashboardStackScreen = ({navigation})=>(
  //   <DashboardStack.Navigator
  //   screenOptions={{
  //     headerStyle:{
  //       backgroundColor:'#196d87'
  //     },
  //     headerTintColor:'white',
  //     headerTitleStyle:{
  //       fontWeight:'500'
  //     }
  //   }}
  //   >
  //     <DashboardStack.Screen name="Dashboard"  component={Dashboard}
  //     options={{
  //       title:'Home'
  //     }}
  //     />
  //   </DashboardStack.Navigator>)

// const CanteenUsagesStackScreen = ({navigation})=>(
//   <CanteenUsagesStack.Navigator
//   screenOptions={{
//     headerStyle:{
//       backgroundColor:'#196d87'
//     },
//     headerTintColor:'white',
//     headerTitleStyle:{
//       fontWeight:'500'
//     }
//   }}
//   >
//     <CanteenUsagesStack.Screen name="CanteenUsagesScreen"  component={CanteenUsagesScreen}
//     options={{
//       title:'Canteen Usage'
//     }}
//     />
//   </CanteenUsagesStack.Navigator>)
  return (
    <Drawer.Navigator initialRouteName="Dashboard">
      <Drawer.Screen
        name="Dashboard"
        component={Dashboard}
        options={{title: 'Home'}}
      />
      <Drawer.Screen
        name="CanteenUsagesScreen"
        component={CanteenUsagesScreen}
        options={{title: 'Canteen Usage'}}
      />
      <Drawer.Screen
        name="MenuUsageReport"
        component={MenuUsageReport}
        options={{title: 'Menu Usage Report'}}
      />
      <Drawer.Screen
        name="MenuListScreen"
        component={MenuListScreen}
        options={{title: 'Menu Settings'}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
