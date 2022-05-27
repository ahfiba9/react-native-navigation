import React from 'react';
import { Text, StyleSheet, Platform, TextProps, TextStyle } from "react-native";

interface AppTextParam {
  children: React.ReactNode;
  style?: TextStyle;
  numberOfLines?: number;
}

export const AppText = ({ children, style, numberOfLines }: AppTextParam) => {
  return (
    <Text numberOfLines={numberOfLines} style={[styles.text, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    color: 'black',
  },
});

export default AppText;
