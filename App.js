/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

class App extends Component {
  constructor() {
    super();

    this.state = {
      contador: 0,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.contador < 5;
  }

  componentDidMount() {
    console.log('chamando componentDidMount');
  }

  exibirMensagem() {
    if (this.state.contador > 0) {
      return <Text>Número maior que 0</Text>;
    }
  }

  render() {
    console.log('chamando render');
    return (
      <View style={styles.container}>
        <View style={styles.containerContador}>
          <Text style={styles.contadorText}>{this.state.contador}</Text>
        </View>
        {this.exibirMensagem()}
        <TouchableOpacity
          onPress={() => this.setState({contador: this.state.contador + 1})}
          style={styles.botaoContador}>
          <Text style={styles.botaoContadorText}>Contar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'space-around'},
  containerContador: {
    backgroundColor: '#e9ebf0',
    paddingHorizontal: 30,
  },
  contadorText: {fontSize: 80},
  botaoContador: {backgroundColor: '#649dfa', padding: 10, borderRadius: 10},
  botaoContadorText: {fontSize: 30, color: 'white'},
});

export default App;
