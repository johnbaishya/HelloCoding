import React from 'react'
import { AnimatedCircularProgress, AnimatedCircularProgressProps } from 'react-native-circular-progress'
import { CustomThemeProp } from '../Types/themeTypes'
import { Text, useTheme } from 'react-native-paper'

export default function Progress(props:Partial<AnimatedCircularProgressProps>) {
    const {colors}:CustomThemeProp = useTheme();
    const {size = 80, fill = 50, width = 10, } = props;
  return (
    <AnimatedCircularProgress
                size={size}
                rotation={0}
                width={width}
                fill={fill}
                tintColor={colors.primary}
                backgroundColor={colors.secondary}
                // onAnimationComplete={}
                duration={0}
                {...props}
                >
                {
                    (fill) => (
                    <Text variant="bodyLarge">
                        {fill.toFixed(0)} %
                    </Text>
                    )
                }
    </AnimatedCircularProgress>
  )
}