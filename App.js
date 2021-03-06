import React from 'react';
import { StyleSheet, Text, View, Button, AsyncStorage } from 'react-native';
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

  componentDidMount(){
    this.recuperarDelTelefono();
  }

  establecerTexto = value => {
    this.setState({ texto: value });
  };

  agregarTarea = () => {
    this.setState({
      tareas: [
        ...this.state.tareas,
        { texto: this.state.texto.toString(), key: Date.now().toString() },
      ],
      texto: '',
    });
    
  };

  eliminarTarea = id => {
    const nuevasTareas = this.state.tareas.filter(
      tarea => tarea.key !== id.toString()
    );
    this.setState({
      tareas: nuevasTareas,
    });
  };

  guardarEnTelefono = () => {
    AsyncStorage.setItem('@AppCursoUdemy:arrayUno', JSON.stringify([{key:1,texto:'uno'},
    {key:2,texto:'dos'}]))
    .then((valor) => {
      console.log(valor);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  recuperarDelTelefono = () => {
    AsyncStorage.getItem('@AppCursoUdemy:arrayUno')
    .then((valor) => {
      console.log(valor);
      console.log(JSON.parse(valor));
    })
    .catch((error) => {
      console.log(error);
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
        <Button 
          title='guardar'
          onPress={()=> {this.guardarEnTelefono();}}
        />
        <Button 
          title='recuperar'
          onPress={()=> {this.recuperarDelTelefono();}}
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
})