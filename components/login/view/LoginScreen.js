import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useState} from 'react';
import {Text, View, Alert} from 'react-native';
import {Button} from 'react-native-paper';
import {TextInput} from '../../../UI';
import userData from '../../../utility/responsiveUi/constants';
import styles from '../style/LoginStyle';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const btnHandler = () => {
    if (userName === '' || password === '') {
      Alert('Please fill the required fields');
      return;
    }
    if (userName) {
      userData.map(item => {
        if (item.username === userName && item.password === password) {
          setPassword('');
          setUserName('');
          navigation.push('Home');
          return;
        }
      });
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
