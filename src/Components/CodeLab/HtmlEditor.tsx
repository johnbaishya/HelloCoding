import { View } from 'react-native'
import React from 'react'
import { Text, TextInput } from 'react-native-paper';
import CodeEditor, { CodeEditorSyntaxStyles } from '@rivascva/react-native-code-editor';
import { setContentState } from '../../Redux/storeActions';
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';

export default function HtmlEditor() {
    const { html} = useSelector((state:RootState)=>state.content)
  return (
    <View style={{flex:1}}>
      <CodeEditor

            // initialValue={html}
            style={{
                fontSize: 17,
                // lineNumbersBackgroundColor:"red"
                inputLineHeight: 17,
                highlighterLineHeight: 17,
            }}
            language="htmlbars"
            syntaxStyle={CodeEditorSyntaxStyles.monokaiSublime}
            showLineNumbers
            
            onChange={(value)=>{
                    setContentState({html:value})
            }}
        />
    </View>
  )
}