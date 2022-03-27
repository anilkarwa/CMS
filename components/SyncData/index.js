/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Alert, ActivityIndicator} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNetInfo} from '@react-native-community/netinfo';
import {
  getAllEmployees,
  getAllMenu,
  syncPendingTranscations,
} from '../../Realm/dataSync';
import Modal from 'react-native-modal';
import {Button} from 'react-native-paper';

function SyncDataModal(props) {
  const netInfo = useNetInfo();
  const [employeeFetchStatus, setEmployeeStatus] = useState('pending');
  const [menuFetchStatus, setMenuStatus] = useState('pending');
  const [transcationStatus, setTranscationStatus] = useState('pending');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (props.open) {
      startSyncProcess();
    }
  }, [props.open]);

  const startSyncProcess = async () => {
    try {
      if (!netInfo.isConnected) {
        Alert('No internet connection!');
        props.handleClose();
        return;
      }
      setLoading(true);
      await syncTranscations();
      await SyncEmployee();
      await SyncMenu();
      setLoading(false);
    } catch (error) {
      setLoading(false);
      Alert('Error in sync, Please try again!');
    }
  };

  const SyncEmployee = async () => {
    try {
      let empInfo = await getAllEmployees();
      if (!empInfo || !empInfo.status) {
        throw new Error('Error saving employees info');
      }
      console.log('done SyncEmployee');
      setEmployeeStatus('success');
    } catch (err) {
      console.log('error=>', err);
      setEmployeeStatus('error');
    }
  };

  const SyncMenu = async () => {
    try {
      let menuInfo = await getAllMenu();
      if (!menuInfo || !menuInfo.status) {
        throw new Error('Error saving menu info');
      }
      console.log('done SyncMenu');
      setMenuStatus('success');
    } catch (err) {
      console.log('error=>', err);
      setMenuStatus('error');
    }
  };

  const syncTranscations = async () => {
    try {
      let trns = await syncPendingTranscations();
      if (!trns || !trns.status) {
        throw new Error('Error saving transcations');
      }
      setTranscationStatus('success');
    } catch (err) {
      console.log('error=>', err);
      setTranscationStatus('error');
    }
  };

  const RenderItemIcon = prop => {
    const {state} = prop;
    if (state === 'pending') {
      return <Icons name={'help'} size={16} color={'#5D6273'} />;
    }
    if (state === 'success') {
      return (
        <Icons name={'check-circle-outline'} size={16} color={'#31C290'} />
      );
    }
    if (state === 'error') {
      return <Icons name={'close'} size={16} color={'#DF5C57'} />;
    }
    return <ActivityIndicator size={12} color={'#31C290'} />;
  };

  return (
    <View>
      <Modal isVisible={props.open}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerTxt}>Sync Data</Text>
          </View>
          <View style={{marginTop: 20}}>
          <View style={styles.itemContainer}>
              <RenderItemIcon state={transcationStatus} />
              <View style={styles.syncItem}>
                <Text>Transcations</Text>
              </View>
            </View>
            <View style={styles.itemContainer}>
              <RenderItemIcon state={employeeFetchStatus} />
              <View style={styles.syncItem}>
                <Text>Employees</Text>
              </View>
            </View>
            <View style={styles.itemContainer}>
              <RenderItemIcon state={menuFetchStatus} />
              <View style={styles.syncItem}>
                <Text>Menu</Text>
              </View>
            </View>
          </View>
          <Button
            disabled={loading}
            dark
            mode="contained"
            style={styles.closeBtn}
            onPress={props.handleClose}>
            Close
          </Button>
        </View>
      </Modal>
    </View>
  );
}

export default SyncDataModal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
  },
  headerTxt: {
    fontSize: 18,
  },
  closeBtn: {
    marginTop: 50,
    maxWidth: 100,
    alignSelf: 'center',
    backgroundColor: '#2c7993',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  syncItem: {
    marginLeft: 10,
  },
});
