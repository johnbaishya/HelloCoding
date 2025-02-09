import { View, Text } from 'react-native'
import React from 'react';
import { WebView } from 'react-native-webview';
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';


export default function Browser() {
    const {html,css,js} = useSelector((state:RootState)=>state.content)
        const htmlContent = `
  <html>
    <head>
      <style>
      ${css}
      </style>
    </head>
    <body>
      ${html}

      <script>
       ${js}
      </script>
    </body>
  </html>
`;

return (
    <View style={{flex:1}}>
        <WebView
            source={{ html: htmlContent }}
            scalesPageToFit={false}
        />
    </View>
  )
}