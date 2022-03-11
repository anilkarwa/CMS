import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CanteenUsagesScreen from '../components/canteenUsages/view/CanteenUsagesScreen';
import MenuListScreen from '../components/menuList/view/MenuListScreen';
import MenuUsageReport from '../components/menuUsagesReport/view/MenuUsageReport';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator initialRouteName="CanteenUsagesScreen">
      {/* <Drawer.Screen
        name="CanteenUsagesScreen"
        component={CanteenUsagesScreen}
      /> */}
      <Drawer.Screen
        name="CanteenUsagesScreen"
        component={CanteenUsagesScreen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="MenuListScreen"
        component={MenuListScreen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="MenuUsageReport"
        component={MenuUsageReport}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
