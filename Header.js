import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TextInput,
} from 'react-native';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.texto}
          onChangeText={this.props.cambiarTexto}
          placeholder="Escribe aquí tu texto..."
          onSubmitEditing={this.props.agregar}
          value={this.props.texto}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    backgroundColor: '#00FF00',
  },
  texto: {
    paddingHorizontal: 16,
    fontSize: 24,
  },
});

export default Header;
