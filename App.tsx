import React, { Component } from 'react';
import { Button, NativeSyntheticEvent, NativeTouchEvent, Text, TextInput, TextInputChangeEventData, View } from 'react-native';

import styles from './App.styles';

class App extends Component<{}, { text: string }> {
  constructor(props: any) {
    super(props);

    this.state = {
      text: ''
    }
  }
  private handleClick = (e: NativeSyntheticEvent<NativeTouchEvent>) => {

  }

  private handleChange = (e: any) => {
    const { value = '' } = e.target;

    this.setState(
      (state) => ({
        ...state,
        text: value
      })
    );
  }

  render() {
    const { text } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
        <TextInput
          style={styles.input}
          onChange={this.handleChange}
        />
        <Button
          title="Action"
          onPress={this.handleClick}
        />
      </View>
    );
  }
}

export default App;
