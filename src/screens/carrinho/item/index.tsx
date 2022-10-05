import React, { useState } from 'react'
import { View, Text } from 'react-native'
import ServicosItem from '../../../interfaces/ServicosItem'
import style from './estilos'
import CampoInteiro from '../../../components/CampoInteiro'
import Botao from '../../../components/Botao'

const Item: React.FC<ServicosItem> = (item: ServicosItem)=> {
  const [quantidade, setQuantidade] = useState<number>(item.quantidade)
  const [total, setTotal] = useState<number>(item.preco * item.quantidade)

  const calculaTotal = (newQtd: number)=>{
      setTotal(newQtd * item.preco)
  }

  const calculaQtdTotal = (newQtd: number)=>{
    setQuantidade(newQtd)
    calculaTotal(newQtd)
  }
  
  return (
    <>
      <View style={style.informacao}>
        <Text style={style.nome}>{item.nome}</Text>
        <Text style={style.descricao}>{item.descricao}</Text>
        <Text style={style.preco}>{item.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Text>
      </View>
      <View style={style.carrinho}>
          <View>
            <View style={style.valor}>
              <Text style={style.descricao}>Quantidade:</Text>
              <CampoInteiro 
                valor={quantidade} 
                acao={calculaQtdTotal}
                style={{width: 50}}
                />
            </View>
            <View style={style.valor}>
              <Text style={style.descricao}>Total:</Text>
              <Text style={style.preco}>{total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Text>
            </View>
          </View>
          <Botao 
            value='Remover ao carrinho' action={()=> console.warn("Pressionou")} 
            isLittle={false} 
            isInverted={false}
          />
        </View>
      <View style={style.divisor}/>
    </>
  )
}

export default Item