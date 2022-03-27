import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useState} from 'react';
import {Text, View, Alert} from 'react-native';
import {Button} from 'react-native-paper';
import {TextInput} from '../../../UI';
import styles from '../style/LoginStyle';
import {userLogin} from '../../../Services';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const btnHandler = async () => {
    try {
      if (userName === '' || password === '') {
        Alert.alert('Error', 'Please fill the required fields.');
        return;
      }
      let response = await userLogin(userName, password);
      if (response.data && response.data === 'Success') {
        await AsyncStorage.setItem('@LOGGEDIN', 'true');
        setPassword('');
        setUserName('');
        navigation.push('Home');
        return;
      } else {
        Alert.alert('Error', 'Invalid login details.');
      }
    } catch (ex) {
      Alert.alert('Error', 'Invalid login details.');
    }
  };

  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <Text style={styles.headerText}>Company Name</Text>
      </View> */}
      <View style={styles.body}>
        <Text style={styles.bodyHeaderText}>LOGIN</Text>
        <View>
          <TextInput
            placeholder="Enter username"
            label="Userame"
            outlineColor="#87b0c0"
            value={userName}
            onChangeText={data => setUserName(data)}
          />
        </View>
        <View style={styles.input}>
          <TextInput
            placeholder="Enter password"
            label="Password"
            outlineColor="#87b0c0"
            value={password}
            secureTextEntry={true}
            onChangeText={data => setPassword(data)}
          />
        </View>
        <View style={styles.btnWrapper}>
          <Button mode="contained" style={styles.btn} onPress={btnHandler}>
            LOGIN
          </Button>
        </View>
      </View>
    </View>
  );
};
export default LoginScreen;
