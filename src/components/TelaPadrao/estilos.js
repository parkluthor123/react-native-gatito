import { StyleSheet } from "react-native";
import { cores } from "../../estilos";

const style = StyleSheet.create({
    ajusteTela:{
        flex: 1,
        backgroundColor: cores.roxo,
    },

    ajusteTelaBaixo:{
        flex: 0,
        backgroundColor: cores.laranja,
    }
})

export default style;