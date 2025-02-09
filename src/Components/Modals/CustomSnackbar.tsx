import React from 'react'
import { Snackbar, Text, useTheme } from 'react-native-paper'
import { useSelector } from 'react-redux'
import { RootState } from '../../Redux/store'
import { setAppState } from '../../Redux/storeActions'
import { SnackbarType } from '../../Types/componentType'
import { CustomThemeProp } from '../../Types/themeTypes'

export default function CustomSnackbar() {
  const{colors}:CustomThemeProp = useTheme();
    const {snackbarType,snackbarMessage,showSnackbar} = useSelector((state:RootState)=>state.app);
   
   const getSnackbarColor = (success:string,error:string,normal:string)=>{
    let color = normal;
    switch (snackbarType) {
      case SnackbarType.success:
        color = success;
        break;
      case SnackbarType.error:
        color = error;
        break;
      default:
        color = normal;
        break;
    }
      return color;
    };
  return (
      <Snackbar
      duration={2000}
      style={{
        backgroundColor:getSnackbarColor(colors.successBackground,colors.dangerBackground,colors.onSurface),
        opacity:0.99, 
        borderWidth:1,
        borderColor:getSnackbarColor(colors.success,colors.danger,colors.outline),
        bottom:70

      }}
        visible={showSnackbar}
        onDismiss={()=>{
            setAppState({
                snackbarType:SnackbarType.default,
                snackbarMessage:"",
                showSnackbar:false,
            });
        }}
        >
          <Text style={{color:snackbarType===SnackbarType.default?colors.background:colors.text}}>

            {snackbarMessage}  
          </Text>
      </Snackbar>
  )
}