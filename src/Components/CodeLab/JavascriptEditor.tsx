import { View, Text } from 'react-native'
import React from 'react'
import CodeEditor,{ CodeEditorSyntaxStyles } from '@rivascva/react-native-code-editor'
import { useSelector } from 'react-redux'
import { RootState } from '../../Redux/store'
import { setContentState } from '../../Redux/storeActions'

export default function JavascriptEditor() {
    const {js} = useSelector((state:RootState)=>state.content);
  return (
    <View style={{flex:1}}>
        <CodeEditor
            initialValue={js}
            style={{
              fontSize: 17,
              inputLineHeight: 17,
              highlighterLineHeight: 17,
            }}
            language="javascript"
            syntaxStyle={CodeEditorSyntaxStyles.vs2015}
            showLineNumbers
            onChange={(value)=>{
                   setContentState({js:value});
            }}
        />
    </View>
  )
}