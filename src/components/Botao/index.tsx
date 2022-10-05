import React from "react"
import { TouchableOpacity, Text } from "react-native"
import styles from './estilos'

const Botao: React.FC<any> = (props: {isLittle: boolean, isInverted: boolean,value: string, action: ()=> void }) => {

    const defaultStyles = styles(props.isLittle, props.isInverted)
    return(
        <>
            <TouchableOpacity onPress={props.action} style={defaultStyles.botao}>
                <Text style={defaultStyles.valor}>{props.value}</Text>
            </TouchableOpacity>
        </>
    );
}

export default Botao;