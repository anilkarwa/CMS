import React, {useState, useEffect} from 'react';
import {FlatList, Text, View, Alert} from 'react-native';
import CheckBox from 'react-native-check-box';
import styles from '../style/MenuListStyle';
import {getMenuList} from '../../../Realm/dataSync';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MenuListScreen = ({navigation}) => {
  const [menuList, setMenuList] = useState([]);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getMenuSettings();
    });

    return unsubscribe;
  }, [navigation]);

  const handleCheck = async index => {
    menuList[index].checked = !menuList[index].checked;
    setMenuList([...menuList]);
    await AsyncStorage.setItem(
      '@SELECTEDMENULIST',
      menuList.length ? JSON.stringify(menuList.filter(e => e.checked)) : null,
    );
  };

  const getMenuSettings = async () => {
    try {
      let selectedMenuList = await AsyncStorage.getItem('@SELECTEDMENULIST');
      if (selectedMenuList) {
        selectedMenuList = JSON.parse(selectedMenuList);
      }
      let menu = await getMenuList();
      if (menu && !menu.status) {
        setMenuList([]);
        Alert.alert('Error', 'Menu List not found');
      } else {
        let found = 0;
        let menuItems = menu.data.map(e => {
          let index = selectedMenuList?.findIndex(m => m.menuId === e.menuId);
          if (index > -1) {
            found += 1;
          }
          return {
            ...e,
            checked: index > -1,
          };
        });
        if (found !== selectedMenuList?.length) {
          await AsyncStorage.removeItem('@SELECTEDMENULIST');
          setMenuList([...menu.data]);
        } else {
          setMenuList([...menuItems]);
        }
      }
    } catch (ex) {
      console.log('ex=>', ex);
      Alert.alert('Error', 'Menu List not found');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.categoryWrapper}>
        <Text style={styles.categoryWrapperHeader}>Menu</Text>
        <FlatList
          data={menuList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: 10,
                paddingVertical: 5,
                alignItems: 'center',
              }}>
              <CheckBox
                onClick={() => handleCheck(index)}
                isChecked={item.checked}
                checkedCheckBoxColor="#196d87"
              />
              <Text style={styles.categoryListStyle}>{item.menuName}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default MenuListScreen;
