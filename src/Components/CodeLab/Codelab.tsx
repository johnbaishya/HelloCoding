import { View, useWindowDimensions } from 'react-native'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import React, { useEffect, useRef, useState } from 'react';
import HtmlEditor from './HtmlEditor';
import CssEditor from './CssEditor';
import JavascriptEditor from './JavascriptEditor';
import { CustomThemeProp } from '../../Types/themeTypes';
import { useTheme } from 'react-native-paper';
import Browser from './Browser';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';
import { setContentState } from '../../Redux/storeActions';


const renderScene = SceneMap({
    HTML: HtmlEditor,
    CSS: CssEditor,
    JS:JavascriptEditor,
    Browser:Browser,
  });

  const Tab   = createMaterialTopTabNavigator();
  

export default function Codelab() {
  const {CodeLabScreenIndex} = useSelector((state:RootState)=>state.content);
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const {colors}:CustomThemeProp = useTheme();

    
    const [routes,setRoutes] = useState([
      { key: 'HTML', title: 'HTML' },
      { key: 'CSS', title: 'CSS' },
      { key: 'JS', title: 'JS' },
      { key: 'Browser', title: 'Browser' },
    ]);

  return (
    <View style={{flex:1}}>
        {/* <Tab.Navigator removeClippedSubviews={true}>
          <Tab.Screen name="HTML" component={HtmlEditor} key={"html"} />
          <Tab.Screen name="CSS" component={CssEditor} key={"css"} />
        </Tab.Navigator> */}
       <TabView
          // lazy
          key={routes.length}
          renderTabBar={props => (
            <TabBar
            {...props}
            activeColor={colors.label}
            inactiveColor={colors.textLight}
            indicatorStyle={{ backgroundColor: colors.primary}}
            // labelStyle={{...FONTS.h6,...FONTS.fontTitle,textTransform:'capitalize',width:"100%"}}
            scrollEnabled={true}
            tabStyle={{width:100}}
            style={{ 
              backgroundColor: colors.card, 
              elevation : 0 ,
              borderBottomWidth: 1,
              shadowOpacity:0,
              borderBottomColor: colors.outline
            }}
            />
          )}
          navigationState={{ index:CodeLabScreenIndex, routes }}
          renderScene={renderScene}
          onIndexChange={(index)=>{setContentState({CodeLabScreenIndex:index})}}
          initialLayout={{ width: layout.width }}
          removeClippedSubviews={false}
          />
    </View>
  )
}