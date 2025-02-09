import { StyleSheet } from "react-native";
import { SIZES } from "../../Constants/themeConstants";

const moduleStyles = StyleSheet.create({
    moduleListContainer:{
        padding:10,
        gap:10,
        flex:1,
        flexDirection:"column",
        // justifyContent:"center",
        // backgroundColor:"red"
    },
    moduleBox:{
        width:"100%",
        padding:10,
        flexDirection:"row",
        borderRadius:SIZES.radius,
        minHeight:60,
        overflow:"hidden",
        elevation:5
    },
    moduleBoxTitle:{
        flex:1,
        marginLeft:10
    }
});
export default moduleStyles;