import React from 'react';
import { Text, View, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';

import { COLORS } from '../constants/styles';

const width = Dimensions.get('window').width;

const Button = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.btnContainer}>
        <Text style={styles.btnText}> {text} </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: COLORS.blue,
    paddingVertical: 8,
    width: width / 2.3,
    borderRadius: 5
  },
  btnText: {
    color: COLORS.white,
    fontSize: 16,
    textTransform: 'uppercase',
    textAlign: 'center'
  }
});

export default Button;
