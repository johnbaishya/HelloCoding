import { StyleSheet } from "react-native";

const appHeaderStyles = StyleSheet.create({
    headerContainer:{
        width:"100%",
        height:60,
        flexDirection:"row",
        borderBottomWidth:1,
        paddingHorizontal:10,
        alignItems:'center',
    },
    headerLefticon:{
        marginRight:10,
    }
});

export default appHeaderStyles;