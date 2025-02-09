import { View, Text } from 'react-native'
import React from 'react'
import CodeEditor,{ CodeEditorSyntaxStyles } from '@rivascva/react-native-code-editor'
import { useSelector } from 'react-redux'
import { RootState } from '../../Redux/store'
import { setContentState } from '../../Redux/storeActions'

export default function CssEditor() {
    const { css} = useSelector((state:RootState)=>state.content)
  return (
    <View style={{flex:1}}>
      <CodeEditor
      initialValue={css}
      style={{
              fontSize: 17,
              inputLineHeight: 17,
              highlighterLineHeight: 17,
          }}
            language="css"
            syntaxStyle={CodeEditorSyntaxStyles.ocean}
            showLineNumbers
            onChange={(value)=>{
                    setContentState({css:value})
            }}
        />
    </View>
  )
}