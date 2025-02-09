import { StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";

const buttonStyles = StyleSheet.create({
    floatingButton:{
        width: 60,  
        height: 60,   
        borderRadius: 30,            
        backgroundColor: '#ee6e73',                                    
        position: 'absolute',                                          
        bottom: 20,                                                    
        right: 20,
        alignItems:"center",
        justifyContent:"center",
        }
});

export default buttonStyles;