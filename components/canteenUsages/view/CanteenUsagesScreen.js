import React, {useState} from 'react';
import {Text, TouchableOpacity, View, Alert, Image} from 'react-native';
import {TextInput} from '../../../UI';
import {Spacing} from '../../../utility/responsiveUi';
import styles from '../style/CanteenUsagesStyle';
import {
  getEmpByCardNo,
  addNewTranscation,
  getLocalTranscations,
} from '../../../Realm/dataSync';
import debounce from 'lodash.debounce';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CanteenUsagesScreen = ({navigation}) => {
  const [emp, setEmp] = useState({});
  const [search, setSearch] = useState('');
  const [searchText, setSearchText] = useState('');
  const [orderCount, setOrderCount] = useState(0);
  const [selectedMenu, setSelectedMenu] = useState([]);
  const [menuText, setMenuText] = useState('');
  const empCodeRef = React.useRef(null);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      showSelectedMenu();
      setOrderCount(0);
      setSearch('');
      setEmp({});
      setTimeout(() => {
        empCodeRef?.current?.focus();
      }, 1000);
    });
    return unsubscribe;
  }, [navigation]);

  React.useEffect(() => {
    if (searchText) {
      searchEmp(searchText);
    }
  }, [searchText]);

  const searchEmp = async val => {
    try {
      let empp = await getEmpByCardNo(val);
      if (!selectedMenu.length) {
        Alert.alert('Error', 'Please select menu in menu settings');
        return false;
      }
      if (empp && !empp.status) {
        Alert.alert('Error', 'Employee not found');
      } else {
        setEmp(empp.data[0]);
        for (let menu of selectedMenu) {
          let trns = {
            empId: empp.data[0].empId,
            empName: empp.data[0].empName,
            empCardNo: empp.data[0].empCardNo,
            empCode: empp.data[0].empCode,
            menuId: menu.menuId,
            itemName: menu.menuName,
            scanDateTime: new Date(),
          };
          await addNewTranscation(trns);
          setSearch('');
          setSearchText('');
          setTimeout(() => {
            empCodeRef?.current?.focus();
          }, 500);
        }
        let trnsList = await getLocalTranscations();
        let count = 0;
        for (let menuu of selectedMenu) {
          count += trnsList.data?.filter(
            e => e.empId === empp.data[0].empId && e.menuId === menuu.menuId,
          ).length;
        }
        setOrderCount(count);
      }
    } catch (ex) {
      console.log('ex=>', ex);
      Alert.alert('Error', 'Employee not found');
    }
  };

  const showSelectedMenu = async () => {
    let selectedMenuList = await AsyncStorage.getItem('@SELECTEDMENULIST');
    if (selectedMenuList) {
      selectedMenuList = JSON.parse(selectedMenuList);
      setSelectedMenu([...selectedMenuList]);
      let menu = '';
      for (let [index, val] of selectedMenuList.entries()) {
        menu += val.menuName;
        if (index < selectedMenuList.length - 1) {
          menu += ', ';
        }
      }
      setMenuText(menu);
      Alert.alert('Menu', menu);
    } else {
      setSelectedMenu([]);
      Alert.alert('Error', 'Please select menu in menu settings');
    }
  };

  const debounceData = React.useMemo(() => debounce(setSearchText, 1000), []);

  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <Text style={styles.headerText}>Company Name</Text>
      </View> */}
      <View style={styles.body}>
        <View style={styles.txtWrapper}>
          <Text style={styles.txt}>Scan / Tap / Employee Card</Text>
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            ref={empCodeRef}
            placeholder="Please enter Employee Card"
            label="Employee"
            autoFocus={true}
            value={search}
            onChangeText={text => {
              debounceData(text);
              setSearch(text);
            }}
          />
        </View>
        <View style={styles.detailsStyle}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'baseline',
              paddingBottom: Spacing.SCALE_20,
            }}>
            <Text style={styles.txt}>
              Code: <Text style={styles.txt1}>{emp.empCode}</Text>
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'baseline',
              paddingBottom: Spacing.SCALE_20,
            }}>
            <Text numberOfLines={1} style={styles.txt}>
              Name: <Text style={styles.txt1}>{emp.empName}</Text>
            </Text>
          </View>
          <View style={{flexDirection: 'row', paddingBottom: Spacing.SCALE_20}}>
            <Text style={styles.txt}>Photo:</Text>
            <Image
              source={{
                uri: `data:image/jpeg;base64,${emp.empImage}`,
              }}
              style={{height: 100, width: 100}}
            />
          </View>
        </View>
        <View style={styles.touchableStyle}>
          <Text style={[styles.txt2, {fontSize: 8}]}>{menuText}</Text>
        </View>
        <Text style={styles.txt3}>Total:</Text>
        <TouchableOpacity
          style={styles.touchableStyle}
          // onPress={()=>navigation.navigate('MenuListScreen')}
        >
          <Text style={styles.txt2}>{orderCount}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CanteenUsagesScreen;
