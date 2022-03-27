import React, {useState, useEffect} from 'react';
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
  Alert,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import styles from '../style/MenuUsageReportStyle';
import {getLocalTranscations} from '../../../Realm/dataSync';
import moment from 'moment';
import {sortBy} from 'lodash';

const MenuUsageReport = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [localTranscations, setLocalTranscations] = useState([]);
  const [filteredTranscations, setFilteredTranscations] = useState([]);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      loadTranscations();
    });

    return unsubscribe;
  }, [navigation]);

  const loadTranscations = async () => {
    try {
      let trns = await getLocalTranscations();
      if (trns && !trns.status) {
        Alert.alert('Error', 'Could not load transcations');
      } else {
        setLocalTranscations([...trns.data]);
      }
    } catch (ex) {
      Alert.alert('Error', 'Could not load transcations');
    }
  };

  const filterTranscations = (datee = null) => {
    try {
      let trns = [];
      let localTranscationsTemp = datee
        ? localTranscations.filter(e => moment(datee).isSame(e.scanDateTime, 'day'))
        : localTranscations;
      for (let localTrn of localTranscationsTemp) {
        let index = trns.findIndex(
          e =>
            e.empId === localTrn.empId &&
            e.menuId === localTrn.menuId &&
            moment(e.scanDateTime).isSame(localTrn.scanDateTime, 'day'));
        if (index > -1) {
          trns[index].quality += 1;
        } else {
          let trn = {
            date: moment(localTrn.scanDateTime).format('DD/MM/YYYY'),
            cardId: localTrn.empCardNo,
            name: localTrn.empName,
            item: localTrn.itemName,
            quality: 1,
            ...localTrn,
          };
          trns.push(trn);
        }
      }
      trns = sortBy(trns, 'date');
      setFilteredTranscations([...trns]);
    } catch (ex) {
      console.log('err->', ex);
    }
  };

  useEffect(() => {
    if (localTranscations.length) {
      filterTranscations();
    }
  }, [localTranscations]);

  const item = ({item}) => {
    return (
      <View style={styles.rowDataHeader}>
        <View style={styles.rowDataContent2}>
          <Text style={styles.rowDataText}>{item.date}</Text>
        </View>
        <View style={styles.rowDataContent2}>
          <Text style={styles.rowDataText}>{item.cardId}</Text>
        </View>
        <View style={styles.rowDataContent2}>
          <Text style={styles.rowDataText}>{item.name}</Text>
        </View>
        <View style={styles.rowDataContent2}>
          <Text style={styles.rowDataText}>{item.item}</Text>
        </View>
        <View style={styles.rowDataContent3}>
          <Text style={styles.rowDataText}>{item.quality}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <Text style={styles.headerText}>Company Name</Text>
      </View> */}
      <ScrollView>
        <View style={styles.body}>
          <View style={styles.calendarTxtContainer}>
            <Text style={styles.calendarTxt}>For The Day</Text>
            <Pressable
              style={styles.touchableHelightStyle}
              onPress={() => setOpen(true)}>
              <>
                <Text
                  style={{
                    alignSelf: 'center',
                  }}>{`${date?.getDate()}/${date?.getMonth(
                  'mm',
                )}/${date?.getFullYear('yyyy')}`}</Text>
                <Image
                  source={require('../../../utility/responsiveUi/assets/images/calender.png')}
                  style={styles.img}
                />
              </>
            </Pressable>
            <DatePicker
              modal
              mode="date"
              open={open}
              date={date}
              onConfirm={date => {
                setOpen(false);
                setDate(date);
                filterTranscations(date);
              }}
              onDateChange={setDate}
              onCancel={() => {
                setOpen(false);
              }}
            />
          </View>
          {/* <View style={styles.checkboxContainer}>
            <CheckBox
              style={{flex: 1, padding: 10}}
              onClick={handleCheck}
              isChecked={checked}
              rightText={'Summary'}
              checkedCheckBoxColor="#196d87"
              rightTextStyle={{color: 'black', fontWeight: '600', fontSize: 16}}
            />
            <CheckBox
              style={{flex: 1, padding: 10}}
              onClick={handleCheck}
              isChecked={checked1}
              rightText={'Detailed'}
              checkedCheckBoxColor="#196d87"
              rightTextStyle={{color: 'black', fontWeight: '600', fontSize: 16}}
            />
          </View> */}
          {/* <TouchableHighlight
            style={{
              width: Size.SIZE_80,
              height: Size.SIZE_40,
              backgroundColor: '#196d87',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: Spacing.SCALE_20,
              borderRadius: 4,
            }}>
            <>
              <Text
                style={{
                  color: 'white',
                  fontWeight: '500',
                  fontSize: Typography.FONT_SIZE_14,
                  paddingHorizontal: Spacing.SCALE_5,
                }}>
                View
              </Text>
            </>
          </TouchableHighlight> */}
          {/* <View style={styles.tableHeaderContainer}>
            <View style={styles.rowContainer}>
              <Text style={styles.rowWrapper}>Date</Text>
            </View>
            <View style={styles.rowContainer}>
              <Text style={styles.rowWrapper}>Item Name</Text>
            </View>
            <View style={styles.rowContainer1}>
              <Text style={styles.rowWrapper}>Quality</Text>
            </View>
          </View>
          {data?.map(data => {
            return (
              <View style={styles.rowDataHeader1}>
                <View style={styles.rowDataContent}>
                  <Text style={styles.rowDataText}>{data.date}</Text>
                </View>
                <View style={styles.rowDataContent}>
                  <Text style={styles.rowDataText}>{data.itemName}</Text>
                </View>
                <View style={styles.rowDataContent1}>
                  <Text style={styles.rowDataText}>{data.quality}</Text>
                </View>
              </View>
            );
          })} */}
          <ScrollView horizontal={true}>
            <View>
              <View style={styles.tableHeaderContainer1}>
                <View style={styles.rowContainer2}>
                  <Text style={styles.rowWrapper1}>Date</Text>
                </View>
                <View style={styles.rowContainer2}>
                  <Text style={styles.rowWrapper1}>Card ID</Text>
                </View>
                <View style={styles.rowContainer2}>
                  <Text style={styles.rowWrapper1}>Name</Text>
                </View>
                <View style={styles.rowContainer2}>
                  <Text style={styles.rowWrapper1}>Item</Text>
                </View>
                <View style={styles.rowContainer3}>
                  <Text style={styles.rowWrapper1}>Quantity</Text>
                </View>
              </View>
              <FlatList
                data={filteredTranscations}
                renderItem={item}
                // horizontal={true}
              />
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default MenuUsageReport;
