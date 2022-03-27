import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CanteenUsagesScreen from '../components/canteenUsages/view/CanteenUsagesScreen';
import MenuListScreen from '../components/menuList/view/MenuListScreen';
import MenuUsageReport from '../components/menuUsagesReport/view/MenuUsageReport';
import Dashboard from '../components/Dashboard/Dashboard';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
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
