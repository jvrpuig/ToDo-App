import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import Header from './Header';
import Body from './Body';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tareas: [],
      texto: '',
    };
  }

  establecerTexto = (value) => {
    this.setState({ texto: value });
  }

  agregarTarea = () => {
    this.setState({
      tareas: [...this.state.tareas,
        { texto: this.state.texto.toString(), key: Date.now().toString() }],
      texto: '',
    });
  }

  eliminarTarea = (id) => {
    const nuevasTareas = this.state.tareas.filter(tarea => tarea.key !== id.toString());
    this.setState({
      tareas: nuevasTareas,
    });
  }

  guardarEnTelefono = () => {
    AsyncStorage.setItem('@AppCursoUdemy:nombre', 'Javier')
      .then((valor) => {
        console.log(valor);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          texto={this.state.texto}
          cambiarTexto={this.establecerTexto}
          agregar={this.agregarTarea}
        />
        <Body tareas={this.state.tareas} eliminar={this.eliminarTarea} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
