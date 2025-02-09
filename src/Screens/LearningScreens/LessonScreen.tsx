import { ScrollView, View } from 'react-native'
import React from 'react'
import AppStyles from '../../Styles/appStyles'
import AppHeaders from '../../Components/Header/AppHeaders'
import { CustomThemeProp } from '../../Types/themeTypes'
import { Headline, Text, useTheme } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import Markdown from 'react-native-markdown-display';
import { CustomButton } from '../../Components/Button'
import { useSelector } from 'react-redux'
import { RootState } from '../../Redux/store'
import { getNextModule, isLastModuleInLevel, isNotLasitem, unlockNextModule } from '../../Utils/courseUtil'
import { setContentState } from '../../Redux/storeActions'
import { useNavigation } from '@react-navigation/native'

export default function LessonScreen() {
    const {colors}:CustomThemeProp = useTheme();
    const copy = `# h1 Heading 8-)
  ## h2 Heading
  ### h3 Heading
  #### h4 Heading
  ##### h5 Heading
  ###### h6 Heading
  Horizontal Rules

  Some text above
  ___

  Some text in the middle

  ---

  Some text below


Emphasis

  **This is bold text**

  __This is bold text__

  *This is italic text*

  _This is italic text_
   ~~Strikethrough~~


Blockquotes

  > Blockquotes can also be nested...
  >> ...by using additional greater-than signs right next to each other...
  > > > ...or with spaces between arrows.
+ Create a list by starting a line with \`+\`, \`-\`, or \`*\`
  + Sub-lists are made by indenting 2 spaces:
    - Marker character change forces new list start:
      * Ac tristique libero volutpat at
      + Facilisis in pretium nisl aliquet. This is a very long list item that will surely wrap onto the next line.
      - Nulla volutpat aliquam velit
  + Very easy!
   Ordered

  1. Lorem ipsum dolor sit amet
  2. Consectetur adipiscing elit. This is a very long list item that will surely wrap onto the next line.
  3. Integer molestie lorem at massa

  Start numbering with offset:

  57. foo
  58. barCode

  Inline \`code\`

  Indented code

      // Some comments
      line 1 of code
      line 2 of code
      line 3 of code


  Block code "fences"

  \`\`\`
  Sample text here...
  \`\`\`

  Syntax highlighting

  \`\`\` js
  var foo = function (bar) {
    return bar++;
  };

  console.log(foo(5));
  \`\`\`


Tables

  | Option | Description |
  | ------ | ----------- |
  | data   | path to data files to supply the data that will be passed into templates. |
  | engine | engine to be used for processing templates. Handlebars is the default. |
  | ext    | extension to be used for dest files. |

  Right aligned columns

  | Option | Description |
  | ------:| -----------:|
  | data   | path to data files to supply the data that will be passed into templates. |
  | engine | engine to be used for processing templates. Handlebars is the default. |
  | ext    | extension to be used for dest files. |

  Links

  [link text](https://www.google.com)

  [link with title](https://www.google.com "title text!")

  Autoconverted link https://www.google.com (enable linkify to see)


Images

  ![Minion](https://octodex.github.com/images/minion.png)
  ![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

  Like links, Images also have a footnote style syntax

  ![Alt text][id]

  With a reference later in the document defining the URL location:

  [id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"
Typographic Replacements

  Enable typographer option to see result.

  (c) (C) (r) (R) (tm) (TM) (p) (P) +-

  test.. test... test..... test?..... test!....

  !!!!!! ???? ,,  -- ---

  "Smartypants, double quotes" and 'single quotes'

`;

const {selectedModule} = useSelector((state:RootState)=>state.content);
const {name,description,type,content} = selectedModule;
const navigation = useNavigation();
  return (
    <View style={[AppStyles.container,{backgroundColor:colors.background}]}>
        <AppHeaders title={name?name:'Some module Title'}/>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          // contentContainerStyle={{flex:1,padding:10}}
          style={{padding:10}}
        >
          <Markdown style={{
            body:{color:colors.text, borderColor:colors.outline, marginTop:0},
            code_block:{backgroundColor:colors.surface},
            blockquote:{backgroundColor:colors.card},
            code_inline:{backgroundColor:colors.surface},
            fence:{backgroundColor:colors.surface},
            table:{borderColor:colors.outline, borderWidth:4},
            tr:{borderColor:colors.outline}
            }}
              
            >
            {content?content:copy}
          </Markdown>
        </ScrollView>
        <View style={{width:"100%",height:70, padding:5, backgroundColor:colors.card,borderTopColor:colors.outline, borderTopWidth:2}}>
            <CustomButton 
              onPress={()=>{
                unlockNextModule();
                const notLlastModule = !isLastModuleInLevel(selectedModule);
                if(notLlastModule){
                  setContentState({
                    selectedModule:getNextModule()
                  })
                }else{
                  navigation.navigate("BottomNavigation" as never);
                }
              }}
            >
              <Text variant='bodyLarge' style={{textAlign:"center"}}>Continue</Text>
            </CustomButton>
        </View>
    </View>
  )
}