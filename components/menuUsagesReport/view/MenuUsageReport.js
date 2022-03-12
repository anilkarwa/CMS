import React from 'react';
import { useEffect } from 'react';
import { Button, FlatList, Image, Pressable, ScrollView, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { TextInput } from '../../../UI';
import DatePicker from 'react-native-date-picker';
import { useState } from 'react/cjs/react.development';
import CheckBox from 'react-native-check-box'
// import Icon from 'react-native-vector-icons/Entypo'
import styles from '../style/MenuUsageReportStyle'
import { Size, Spacing, Typography } from '../../../utility/responsiveUi';

const MenuUsageReport = () => {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [checked, setChecked] = useState(false);
    const [checked1, setChecked1] = useState(true);

    const data = [
        {
            date: '12/10/2022',
            itemName: 'idly',
            quality: 2
        },
        {
            date: '12/10/2022',
            itemName: 'sandwitch',
            quality: 2
        }
    ]

    const handleCheck = () => {
        setChecked(!checked)
        setChecked1(!checked1)
    }
    const item = ({ item }) => {
        return <View style={styles.rowDataHeader}>
            <View style={styles.rowDataContent}>
                <Text style={styles.rowDataText}>{item.date}</Text>
            </View>
            <View style={styles.rowDataContent}>
                <Text style={styles.rowDataText}>{item.itemName}</Text>
            </View>
            <View style={styles.rowDataContent1}>
                <Text style={styles.rowDataText}>{item.quality}</Text>
            </View>
        </View>
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    Company Name
                </Text>
            </View>
            <View style={styles.body}>
                <View style={styles.bodyHeader}>
                    <Text style={styles.bodyHeaderText}>MENU USAGE REPORT</Text>
                </View>
                <View style={styles.calendarTxtContainer}>
                    <Text style={styles.calendarTxt}>
                        For The Day
                    </Text>
                    <Pressable style={styles.touchableHelightStyle} onPress={() => setOpen(true)}>
                        <>
                            <Text style={{ alignSelf: 'center' }}>{`${date?.getDate()}/${date?.getMonth('mm')}/${date?.getFullYear('yyyy')}`}</Text>
                            <Image source={require('../../../utility/responsiveUi/assets/images/calender.png')} style={styles.img} />
                        </>
                    </Pressable>
                    <DatePicker
                        modal
                        mode="date"
                        open={open}
                        date={date}
                        onConfirm={(date) => {
                            setOpen(false)
                            setDate(date)
                        }}
                        onDateChange={setDate}
                        onCancel={() => {
                            setOpen(false)
                        }}
                    />
                </View>
                <View style={styles.checkboxContainer}>
                    <CheckBox
                        style={{ flex: 1, padding: 10 }}
                        onClick={handleCheck}
                        isChecked={checked}
                        rightText={"Summary"}
                        checkedCheckBoxColor="#196d87"
                        rightTextStyle={{ color: 'black', fontWeight: '600', fontSize: 16 }}
                    />
                    <CheckBox
                        style={{ flex: 1, padding: 10 }}
                        onClick={handleCheck}
                        isChecked={checked1}
                        rightText={"Detailed"}
                        checkedCheckBoxColor="#196d87"
                        rightTextStyle={{ color: 'black', fontWeight: '600', fontSize: 16 }}
                    />
                </View>
                <TouchableHighlight style={{
                    width: Size.SIZE_80,
                    height: Size.SIZE_40, backgroundColor: '#196d87',
                    flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
                    marginHorizontal: Spacing.SCALE_20, borderRadius: 4
                }}
                >
                    <>
                        {/* <Icon name="eye" size={30} color="white" /> */}
                        <Text style={{ color: 'white', fontWeight: '500', fontSize: Typography.FONT_SIZE_14, paddingHorizontal: Spacing.SCALE_5 }}>View</Text>
                    </>
                </TouchableHighlight>
                <View style={styles.tableHeaderContainer}>
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
                {
                    data?.map((data) => {
                        return <View style={styles.rowDataHeader}>
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
                    })
                }
                <View style={styles.tableHeaderContainer}>
                    <View style={styles.rowContainer}>
                        <Text style={styles.rowWrapper}>Date</Text>
                    </View>
                    <View style={styles.rowContainer}>
                        <Text style={styles.rowWrapper}>Card ID</Text>
                    </View>
                    <View style={styles.rowContainer1}>
                        <Text style={styles.rowWrapper}>Name</Text>
                    </View>
                    {/* <View style={styles.rowContainer1}>
                        <Text style={styles.rowWrapper}>Emp Code</Text>
                    </View>
                    <View style={styles.rowContainer1}>
                        <Text style={styles.rowWrapper}>Item</Text>
                    </View>
                    <View style={styles.rowContainer1}>
                        <Text style={styles.rowWrapper}>Quantity</Text>
                    </View> */}
                </View>
                <FlatList
                    data={data}
                    renderItem={item}
                // horizontal={true}
                />
            </View>
        </View>
    )
}

export default MenuUsageReport