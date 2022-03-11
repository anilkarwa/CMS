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
        paddingHorizontal:Spacing.SCALE_10,
        paddingVertical:Spacing.SCALE_10,
        marginTop:Spacing.SCALE_30
    },
    bodyHeaderText:{
        fontSize:Typography.FONT_SIZE_28,
        color:'#000',
        fontWeight:'500',
        textAlign:'center',
        fontFamily:'Zen Kurenaido, sans-serif'
    },
    input:{
        paddingTop:Spacing.SCALE_30
    },
    btnWrapper:{
        alignItems:'center',
        height:Spacing.SCALE_36,
        marginTop:Spacing.SCALE_30
    },
    btn:{
        backgroundColor:'#196d87'
    }
})