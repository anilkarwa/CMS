import { StyleSheet } from "react-native";
import { Size, Spacing, Typography } from "../../../utility/responsiveUi";

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    header:{
        height:Size.SIZE_60,
        backgroundColor:'#196d87',
        justifyContent:'center'
    },
    headerText:{
        textAlign:'center',
        color:'white',
        fontSize:Typography.FONT_SIZE_16,
        fontFamily:'Zen Kurenaido, sans-serif',
        fontWeight:'500'
    },
    body:{
        paddingVertical:Spacing.SCALE_10,
        marginTop:Spacing.SCALE_30
    },
    bodyHeaderText:{
        fontSize:Typography.FONT_SIZE_30,
        color:'#000',
        fontWeight:'500',
        textAlign:'center',
        fontFamily:'Zen Kurenaido, sans-serif'
    },
    bodyHeader:{
        backgroundColor:'#b2dcea',
        width:'100%'
    },
    calendarTxt:{
        color:'black',
        fontSize:Size.SIZE_15,
        paddingRight:Spacing.SCALE_10
    }
})