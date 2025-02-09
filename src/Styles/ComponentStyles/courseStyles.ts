import { StyleSheet } from "react-native";
import { SIZES } from "../../Constants/themeConstants";

const courseStyles = StyleSheet.create({
    courseListContainer:{
        marginHorizontal:10,
        justifyContent:"space-between",
        flexDirection:"column",
        gap:10,
        padding:0
    },
    courseContainer: {
        flex: 1,
        padding: 5,
        flexWrap: "wrap",
        borderRadius: SIZES.radius_md,
    },
    courseContent: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
        width: "100%",  // Ensures it stays inside the container,
        padding:10,
        borderRadius: SIZES.radius,
    },
    CourseLogoContainer:{
        height:40,
        aspectRatio:1,
        flex:1,
        padding:5,
        marginRight:10
    },
    courseLogo:{
        flex:1,
        aspectRatio:1,
    },
    CourseTitleContainer:{
        flex:5,
    },
    courseProgressContainer:{
        flex:2,
    },
})

export default courseStyles;