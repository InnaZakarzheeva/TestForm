import React from 'react'
import { View, StyleSheet, ViewProps, DimensionValue, ViewStyle } from 'react-native'
import Svg, { Defs, Rect, LinearGradient, Stop } from 'react-native-svg'

type LinearGradientProps = { fromColor: string, toColor: string, children?: any, height?: DimensionValue, style?: ViewStyle } & ViewProps

function LinearGradientComponent({ children, fromColor, toColor, height = 46, style, ...props }: LinearGradientProps) {
    const gradientUniqueId = `grad${fromColor}+${toColor}`.replace(/[^a-zA-Z0-9 ]/g, '')
    return <>
        <View style={[{ ...StyleSheet.absoluteFillObject, height, zIndex: -1, top: 0, left: 0 }, style]} {...props}>
            <Svg height='100%' width="100%" style={StyleSheet.absoluteFillObject}>
                <Defs>
                    <LinearGradient id={gradientUniqueId} x1="0%" y1="0%" x2="0%" y2="100%">
                        <Stop offset="0" stopColor={fromColor} stopOpacity={1} />
                        <Stop offset="1" stopColor={toColor} stopOpacity={1} />
                    </LinearGradient>
                </Defs>
                <Rect width="100%" height="100%" fill={`url(#${gradientUniqueId})`} />
            </Svg>
        </View>
        {children}
    </>
};

export default LinearGradientComponent