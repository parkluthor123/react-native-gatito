import React from "react";
import { View, Text } from "react-native";
import Botao from "../Botao";
import estilos from "./estilos";
import style from './estilos'

const StatusCarrinho: React.FC<any> = (props: {total: number}) => {
    return(
        <View style={style.conteudo}>
            <View style={style.total}>
                <Text style={style.descricao}>Total do carrinho: </Text>
                <Text style={estilos.valor}>
                    {props.total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </Text>
            </View>
            <View style={style.botao}>
                <Botao value="Concluir pedido" isInverted />
            </View>
        </View>
    )
}

export default StatusCarrinho;