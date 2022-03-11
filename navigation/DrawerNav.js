import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CanteenUsagesScreen from '../components/canteenUsages/view/CanteenUsagesScreen';

const Drawer = createDrawerNavigator();

const DrawerNav = ()=>{
    return (
          <Drawer.Navigator initialRouteName={CanteenUsagesScreen}>
            <Drawer.Screen 
            name="CanteenUsagesScreen" 
            component={CanteenUsagesScreen} 
            />
          </Drawer.Navigator>
      );
}

export default DrawerNav;
