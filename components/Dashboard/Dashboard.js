import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo'
import SyncData from '../SyncData';
import CMSHeader from '../../UI/CMSHeader';

const Dashboard = props => {
  const navigation = useNavigation();
  const [openSync, setOpenSync] = useState(false);

  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <Icon name={'menu'} size={26} color={'#5D6273'} style={{alignSelf:'center',paddingLeft:10}} 
        onPress={()=>navigation.toggleDrawer()}
        />
        <Text style={styles.headerText}>CMS</Text>
      </View> */}
      <CMSHeader header={'Home'}/>
      <View style={styles.syncContainer}>
        <Button
          icon={'sync'}
          dark
          mode="contained"
          style={styles.syncBtn}
          onPress={() => setOpenSync(true)}>
          Sync Data
        </Button>
      </View>
      <View style={styles.btns}>
        <Button
          dark
          icon={'pencil'}
          mode="contained"
          style={styles.btn}
          onPress={() => navigation.navigate('CanteenUsagesScreen')}>
          Cateen Usage
        </Button>
        <Button
          dark
          mode="contained"
          icon={'file'}
          style={styles.btn}
          onPress={() => navigation.navigate('MenuUsageReport')}>
          Menu Usage Report
        </Button>
      </View>

      <SyncData open={openSync} handleClose={() => setOpenSync(false)} />
    </View>
  );
};

export default Dashboard;
