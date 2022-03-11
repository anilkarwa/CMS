import React from 'react';
import { useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { TextInput } from '../../../UI';
import DatePicker from 'react-native-date-picker';
import { useState } from 'react/cjs/react.development';
import styles from '../style/MenuUsageReportStyle'

const MenuUsageReport = () => {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    // useEffect(()=>{
    // console.log("date",date)
    // },[date])
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
                <View style={{display:'flex',flexDirection:'row',paddingVertical:20,justifyContent:'center'}}>
                    <Text style={styles.calendarTxt}>
                        For The Day
                    </Text>
                    <View style={{width:'55%',borderColor:'#87b0c0',borderWidth:1,height:40}}>
                        
                    </View>
                    {/* <Button title="Open" onPress={() => setOpen(true)} /> */}
                    <DatePicker
                        modal
                        open={open}
                        date={date}
                        onConfirm={(date) => {
                            setOpen(false)
                            setDate(date)
                        }}
                        // onDateChange={setDate}
                        onCancel={() => {
                            setOpen(false)
                        }}
                    />
                </View>
            </View>
        </View>
    )
}

export default MenuUsageReport