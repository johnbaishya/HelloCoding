import { StyleSheet } from "react-native";
import { SIZES } from "../../Constants/themeConstants";

const HomeScreenStyles = StyleSheet.create({
    levelBox:{
        width:"49%",
        // aspectRatio:1,
        padding:5,
        borderRadius:SIZES.radius_md,
        overflow:"hidden",
        // marginVertical:10,
    },
    levelBoxContent:{
        width:"100%",
        alignItems:"center",
        textAlign:"center",
        borderRadius:SIZES.radius,
        padding:5,
        overflow:"hidden"
    },
    levelTitleContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        width:"100%"
    },
    levelTitle2Container:{
        width:"100%",
        paddingBottom:5,
        marginBottom:5,
    },
    levelsContainer:{
        width:"100%",
    },
    homeheaderContainer:{
        height:"100%",
        width:"100%",
        padding:20,
        elevation:5,
        zIndex:1
    },
    homeheaderButtonsContainer:{
        width:"100%",
        flexDirection:"row",
    },
    courseHeading:{
        flexDirection:"row",
        alignItems:"center"
    },
    courseTitle:{
        flex:1,
    },
    courseProgress:{
        width:"20%",
        aspectRatio:1,
        justifyContent:"center"
    }
})

export default HomeScreenStyles;