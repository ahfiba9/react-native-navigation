import React from 'react';
import { StyleSheet, SafeAreaView, View, ViewStyle } from 'react-native';

interface ScreenParams {
  children: React.ReactNode;
  style: ViewStyle;
}

function Screen({ children, style }: ScreenParams) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 20,
    flex: 1,
  },
  view: {
    flex: 1,
  },
});

export default Screen;
