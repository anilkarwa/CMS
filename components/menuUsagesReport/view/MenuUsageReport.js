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
    const data1 = [
        {
            date: '12/10/2022',
            cardId: 'SV001122',
            name: 'Praveen Kumar',
            empCode: '22562',
            item: 'idly',
            quality: 2
        },
        {
            date: '12/10/2022',
            cardId: 'SV001122',
            name: 'Praveen Kumar',
            empCode: '22562',
            item: 'idly',
            quality: 2
        },
        {
            date: '12/10/2022',
            cardId: 'SV001122',
            name: 'Praveen Kumar',
            empCode: '22562',
            item: 'idly',
            quality: 2
        },
        {
            date: '12/10/2022',
            cardId: 'SV001122',
            name: 'Praveen Kumar',
            empCode: '22562',
            item: 'idly',
            quality: 2
        },
        {
            date: '12/10/2022',
            cardId: 'SV001122',
            name: 'Praveen Kumar',
            empCode: '22562',
            item: 'idly',
            quality: 2
        },
        {
            date: '12/10/2022',
            cardId: 'SV001122',
            name: 'Praveen Kumar',
            empCode: '22562',
            item: 'idly',
            quality: 2
        },
        
    ]

    const handleCheck = () => {
        setChecked(!checked)
        setChecked1(!checked1)
    }
    const item = ({ item }) => {
        return <View style={styles.rowDataHeader}>
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
                <Text style={styles.rowDataText}>{item.empCode}</Text>
            </View>
            <View style={styles.rowDataContent2}>
                <Text style={styles.rowDataText}>{item.item}</Text>
            </View>
            <View style={styles.rowDataContent3}>
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
            <ScrollView>
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
                        return <View style={styles.rowDataHeader1}>
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
                                <Text style={styles.rowWrapper1}>Emp Code</Text>
                            </View>
                            <View style={styles.rowContainer2}>
                                <Text style={styles.rowWrapper1}>Item</Text>
                            </View>
                            <View style={styles.rowContainer3}>
                                <Text style={styles.rowWrapper1}>Quantity</Text>
                            </View>
                        </View>
                        <FlatList
                            data={data1}
                            renderItem={item}
                        // horizontal={true}
                        />
                    </View>
                </ScrollView>
            </View>
            </ScrollView>
        </View>
    )
}

export default MenuUsageReport