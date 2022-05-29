import React from 'react';
import {
  Text,
  StyleSheet,
  Platform,
  TextStyle,
  TouchableOpacity,
} from 'react-native';

interface AppTextParam {
  children: React.ReactNode;
  style?: TextStyle;
  numberOfLines?: number;
  onPress?: () => void;
  testID?: string;
}

export const AppText = ({
  children,
  style,
  numberOfLines,
  onPress,
  testID,
}: AppTextParam) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={!onPress}>
      <Text
        testID={testID}
        numberOfLines={numberOfLines}
        style={[styles.text, style]}>
        {children}
      </Text>
    </TouchableOpacity>
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
