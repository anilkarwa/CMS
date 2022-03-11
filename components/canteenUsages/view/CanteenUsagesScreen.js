import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native-paper';
import { TextInput } from '../../../UI';
import { Spacing } from '../../../utility/responsiveUi';
import styles from '../style/CanteenUsagesStyle'

const CanteenUsagesScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    Company Name
                </Text>
            </View>
            <View style={styles.body}>
                <View style={styles.bodyHeader}>
                    <Text style={styles.bodyHeaderText}>Canteen Usage</Text>
                </View>
                <View style={styles.txtWrapper}>
                    <Text style={styles.txt}>Scan / Tap / Employee Card :</Text>
                </View>
                <View style={styles.inputWrapper}>
                    <TextInput placeholder="Please enter Employee Card" label="Employee" outlineColor="#87b0c0" autoFocus={true} />
                </View>
                <View style={styles.detailsStyle}>
                    <View style={{flexDirection:'row',paddingBottom:Spacing.SCALE_20}}>
                        <Text style={styles.txt}>Code:</Text>
                        <Text style={styles.txt1}>SV009878</Text>
                    </View>
                    <View style={{flexDirection:'row',paddingBottom:Spacing.SCALE_20}}>
                        <Text style={styles.txt}>Name:</Text>
                        <Text style={styles.txt1}>R Rajesh Kumar</Text>
                    </View>
                    <View style={{flexDirection:'row',paddingBottom:Spacing.SCALE_20}}>
                        <Text style={styles.txt}>Photo:</Text>
                        <Text style={styles.txt1}>SV009878</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.touchableStyle} onPress={()=>navigation.navigate('MenuUsageReport')}>
                    <Text style={styles.txt2}>COFEE</Text>
                </TouchableOpacity>
                <Text style={styles.txt3}>Total:</Text>
                <TouchableOpacity style={styles.touchableStyle} onPress={()=>navigation.navigate('MenuListScreen')}>
                    <Text style={styles.txt2}>76</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CanteenUsagesScreen