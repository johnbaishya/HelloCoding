import React from "react";
import { Button, ButtonProps, Text, useTheme } from "react-native-paper";
import loginScreenStyles from "../Styles/ScrrenStyles/loginScreenStyles";
import buttonStyles from "../Styles/ComponentStyles/buttonStyles";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { SIZES } from "../Constants/themeConstants";



export const LoginButton = (props:ButtonProps)=>{
    return(
        <Button
        {...props}
        style={loginScreenStyles.loginButton}
        mode="contained"
        disabled={props.disabled}
        loading={props.loading}
        onPress={props.onPress}>
            {props.children}
        </Button>
    );
};

export const FloatingButton = (props:TouchableOpacityProps)=>{
    const {colors} = useTheme();
    return(
        <TouchableOpacity
        activeOpacity={0.8}
        {...props}
        style={[buttonStyles.floatingButton,{backgroundColor:colors.primary}]}
        // mode="contained"
        disabled={props.disabled}
        // loading={props.loading}
        onPress={props.onPress}>
            {props.children}
        </TouchableOpacity>
    );
};

export const CustomButton = (props:TouchableOpacityProps)=>{
    const {style} = props;
    const {colors} = useTheme();
    return(
        <TouchableOpacity
            {...props}
            activeOpacity={0.8}
            style={{
                height:40,
                backgroundColor:colors.primary,
                paddingHorizontal:20,
                borderRadius:SIZES.radius,
                alignItems:"center",
                justifyContent:"center",
                alignContent:"center",
                ...style as object,
            }}
        >
            {props.children}
        </TouchableOpacity>
    );
};
