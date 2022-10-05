import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import CampoInteiroData from '../../interfaces/CampoInteiroData'
import styleDefault from './estilos'

const CampoInteiro: React.FC<CampoInteiroData> = (props: CampoInteiroData) => {
  
  const verificaInteiro = (valor: string, callback: (value: number | string)=> any) => {
    if (!valor.match(/^[0-9]*$/)) {
      return
    }
    valor = valor.replace(/^(0)(.+)/, '$2');

    callback(valor)
  }

  return (
    <TextInput 
        style={[styleDefault.campo, props.style]}
        keyboardType='number-pad'
        selectTextOnFocus
        value={props.valor.toString()}
        onChangeText={(value: string)=> verificaInteiro(value, props.acao)}    
    />
  )
}

export default CampoInteiro
