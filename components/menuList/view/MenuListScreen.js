import React, {useState} from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';
import CheckBox from 'react-native-check-box';
import styles from '../style/MenuListStyle';

const MenuListScreen = () => {

  const handleCheck = index => {
    menuList[index].checked = !menuList[index].checked;
    setMenuList([...menuList]);
  };

  const [menuList, setMenuList] = useState([
    {
      id: 1,
      item: 'Coffee',
      checked: false,
    },
    {
      id: 2,
      item: 'idly',
      checked: false,
    },
    {
      id: 3,
      item: 'Dosa',
      checked: false,
    },
    {
      id: 4,
      item: 'Vada',
      checked: false,
    },
    {
      id: 5,
      item: 'Bun',
      checked: false,
    },
    {
      id: 6,
      item: 'Bread',
      checked: false,
    },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Company Name</Text>
      </View>
      <ScrollView style={styles.body}>
        <View style={styles.bodyHeader}>
          <Text style={styles.bodyHeaderText}>Menu List</Text>
        </View>
        <View style={styles.categoryWrapper}>
          <Text style={styles.categoryWrapperHeader}>Morning Break fast</Text>
          <FlatList
            data={menuList}
            renderItem={({item, index}) => (
              <View style={{flexDirection: 'row'}}>
                <CheckBox
                  onClick={() => handleCheck(index)}
                  isChecked={item.checked}
                  checkedCheckBoxColor="#196d87"
                />
                <Text style={styles.categoryListStyle}>{item.item}</Text>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default MenuListScreen;
