import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import { AwesomeTextInput } from 'react-native-awesome-text-input';

import Button from './components/Button';
import { COLORS } from './constants/styles';
import locales from './locales/hungarian';
import logo from './assets/logo.png';

const width = Dimensions.get('window').width;

export default function App() {
  const [text, setText] = useState('');
  const [outputText, setOutputText] = useState('');

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={logo}
      />
      <Text style={styles.text}>Üdv, {outputText} !</Text>

      <View style={styles.form}>
        <AwesomeTextInput
          defaultValue={text}
          label={locales.InputPlaceholder}
          onChangeText={text => setText(text)}
          customStyles={customStyles} />
        <Button
          text={locales.Button}
          onPress={() => {
            setOutputText(text);
            setText('');
          }}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 24,
    color: COLORS.blue,
    margin: 10
  },
  logo: {
    width: 100,
    height: 100,
    margin: 10
  },
  form: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const customStyles = {
  container: {
    borderWidth: 1,
    width: width / 2.3,
    borderColor: COLORS.blue,
    borderRadius: 100,
    margin: 10
  },
  title: {
    backgroundColor: COLORS.white,
    color: COLORS.blue
  }
};
