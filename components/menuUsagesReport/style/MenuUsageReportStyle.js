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
        paddingRight:Spacing.SCALE_10,
        fontWeight:'500'
    },
    calendarTxtContainer:{ 
        display: 'flex', 
        flexDirection: 'row', 
        paddingVertical: Spacing.SCALE_20, 
        justifyContent: 'center' ,
        alignItems:'center'
    },
    touchableHelightStyle:{ 
        width: '55%', 
        borderColor: '#87b0c0', 
        borderWidth: 1, 
        height: Size.SIZE_40, 
        flexDirection: 'row', 
        justifyContent: 'space-between' 
    },
    img:{ 
        width: 20, 
        height: 20, 
        tintColor: 'black', 
        marginTop: 7, 
        marginRight: 5 
    },
    checkboxContainer:{ 
        flexDirection: 'row', 
        paddingLeft: Spacing.SCALE_10 
    },
    tableHeaderContainer:{
        justifyContent:'center',
        alignItems:'center',
        borderColor:'#ddd',
        borderWidth:1,
        marginHorizontal:Spacing.SCALE_18,
        flexDirection:'row',
        marginTop:Spacing.SCALE_20,
        width:'90%'
    },
    tableHeaderContainer1:{
        // justifyContent:'center',
        // alignItems:'center',
        borderColor:'#ddd',
        borderWidth:1,
        marginHorizontal:Spacing.SCALE_18,
        flexDirection:'row',
        marginTop:Spacing.SCALE_20,
    },
    rowContainer:{ 
        borderColor:'#ddd',
        borderRightWidth:1,
        width:'30%' 
    },
    rowContainer1:{ 
        borderColor:'#ddd',
        width:'30%' ,
        
    },
    rowContainer2:{ 
        borderColor:'#ddd',
        borderRightWidth:1,
        width:Size.SIZE_80 
    },
    rowContainer3:{ 
        borderColor:'#ddd',
        width:Size.SIZE_80 ,
        borderRightWidth:1
    },
    rowWrapper:{
        fontSize:Typography.FONT_SIZE_16,
        textAlign:'center',
        fontWeight:'500',
        color:'#196d87'
    },
    rowWrapper1:{
        fontSize:Typography.FONT_SIZE_16,
        textAlign:'center',
        fontWeight:'500',
        color:'#196d87',
        padding:Spacing.SCALE_10
    },
    rowDataHeader:{ 
        // justifyContent: 'center', 
        // alignItems: 'center', 
        borderColor: '#ddd', 
        borderWidth: 1, 
        marginHorizontal: Spacing.SCALE_18,
        flexDirection:'row' 
    },
    rowDataHeader1:{ 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderColor: '#ddd', 
        borderWidth: 1, 
        marginHorizontal: Spacing.SCALE_18,
        flexDirection:'row' 
    },
    rowDataContent:{ 
        borderColor: '#ddd', 
        borderRightWidth: 1, 
        width: '30%' 
    },
    rowDataContent1:{ 
        borderColor: '#ddd', 
        width: '30%' 
    },
    rowDataContent2:{ 
        borderColor: '#ddd', 
        borderRightWidth: 1, 
        width: Size.SIZE_80 
    },
    rowDataContent3:{ 
        borderColor: '#ddd', 
        width: Size.SIZE_80,
        borderRightWidth: 1, 
    },
    rowDataText:{ 
        fontSize: Typography.FONT_SIZE_16, 
        textAlign: 'center', 
        fontWeight: '500', 
        color: 'black',
        padding:Spacing.SCALE_5
    }
})