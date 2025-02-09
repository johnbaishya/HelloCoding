import { TouchableOpacity, View } from "react-native";
import { Divider, Text, useTheme } from "react-native-paper";
import { CustomThemeProp } from "../../Types/themeTypes";
import levelStyles from "../../Styles/ScrrenStyles/HomeScreenStyles";
import Progress from "../Progress";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { Level } from "../../Types/contentTypes";
import { setContentState } from "../../Redux/storeActions";
import useCourseData from "../../Hooks/useCourseData";
import { isSelectedlevel } from "../../Utils/courseUtil";
 
type LevelBoxProps = {selected?:boolean,locked?:boolean,level?:number, title?:string,progress?:number,data?:Level}

 const LevelBox = (props:LevelBoxProps)=>{
    const {colors}:CustomThemeProp = useTheme();
    const {level=0,title=""} = props;
    const navigation = useNavigation();
    const {getLevelProgress} = useCourseData();
    const {percentage,total,completed} = getLevelProgress(props.data as Level)
    const selected = isSelectedlevel(props.data as Level);
    return(
        <TouchableOpacity 
            style={[levelStyles.levelBox,{backgroundColor:colors.background,opacity:props.locked?0.6:1}]}
            activeOpacity={0.7}
            disabled={props.locked}
            onPress={()=>{
                setContentState({selectedLevel:props.data})
                navigation.navigate("ModuleList" as never)
            }}
        >
            <View style={[levelStyles.levelBoxContent,{backgroundColor:colors.surface, borderColor:selected?colors.primary:colors.outline, borderWidth:selected?2:0.6,elevation:2}]}>
            <View style={{position:"absolute",height:"300%", width:"200%", backgroundColor:colors.primary, top:-10, opacity:selected?0.2:0}}/>
                <View style={[levelStyles.levelTitleContainer]}>
                    <Text variant="titleMedium">
                        Level {level}
                    </Text>
                    <Text variant="bodySmall" style={{color:colors.textLight}}>
                        {completed}/{total}
                    </Text>
                </View>
                <View style={[levelStyles.levelTitle2Container]}>
                    <Text variant="bodyMedium" style={{marginBottom:2, color:colors.textLight}}>
                        {title}
                    </Text>
                <Divider bold/>
                </View>
                {props.locked?
                <FontAwesomeIcon name="lock" color={colors.textLight} size={100}/>
                :<Progress size={100} width={15} fill={percentage}/>
                }
            </View>

        </TouchableOpacity>
    )
 }

 export default LevelBox;