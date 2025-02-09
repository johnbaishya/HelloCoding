import { ScrollView, View } from "react-native";
import { CustomThemeProp } from "../../Types/themeTypes";
import { useTheme } from "react-native-paper";
import levelStyles from "../../Styles/ScrrenStyles/HomeScreenStyles";
import LevelBox from "./LevelBox";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import useCourseData from "../../Hooks/useCourseData";
const LevelContainer = ()=>{
    const {colors}:CustomThemeProp = useTheme();
    // const {levels} = useSelector((state:RootState)=>state.content);
    const {levels} = useCourseData();
    return(
        <ScrollView style={[levelStyles.levelsContainer,{backgroundColor:colors.background,}]}>
            <View style={{flexDirection:'row', flexWrap:"wrap", gap:1,justifyContent:"center", paddingHorizontal:5}}>
            {
                levels.map((item)=>{
                    return(<LevelBox key={item.name} level={item.index} title={item.name} data={item} locked={!item.unlocked}/>)
                })
            }
            {/* <LevelBox progress={100} level={1} title="getting stated" />
            <LevelBox selected progress={55} level={2} title="variables"/>
            <LevelBox progress={10} level={3} title="data types"/>
            <LevelBox locked/>
            <LevelBox locked/>
            <LevelBox locked/>
            <LevelBox locked/>
            <LevelBox locked/> */}
            
            
            </View>
             {/* <FlatList
                data={Array.from({length:5})}
                renderItem={({item,index})=><LevelBox key={index}/>}
                numColumns={3}
            /> */}
        </ScrollView>
    )
}

export default LevelContainer;