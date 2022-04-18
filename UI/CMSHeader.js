import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import { Size, Spacing, Typography } from '../utility/responsiveUi'

const CMSHeader = (props) => {
    const navigation = useNavigation()
    return (
        <View style={[styles.header, props?.headerStyle]}>
            <Icon name={'menu'} size={26} color={'white'} style={{ alignSelf: 'center', paddingLeft: 10 }}
                onPress={() => navigation.toggleDrawer()}
            />
            <Text style={styles.headerText}>{props.header}</Text>
        </View>
    )
}
export default CMSHeader

const styles = StyleSheet.create({
    header: {
        height: Size.SIZE_50,
        backgroundColor: '#196d87',
        // justifyContent: 'space-between',
        flexDirection:'row'
      },
      headerText: {
        color: 'white',
        fontSize: Typography.FONT_SIZE_20,
        fontFamily: 'Zen Kurenaido, sans-serif',
        fontWeight: '500',
        alignSelf:'center',
        marginLeft:Spacing.SCALE_10
      },
})