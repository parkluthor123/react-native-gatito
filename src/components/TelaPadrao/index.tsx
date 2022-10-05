import React from "react";
import { SafeAreaView, KeyboardAvoidingView, StatusBar, Platform, KeyboardAvoidingViewProps } from "react-native";
import defaultStyle, { cores } from '../../estilos'
import telaPadraoStyle from './estilos'

const TelaPadrao: React.FC<KeyboardAvoidingViewProps> = ({children}: KeyboardAvoidingViewProps) => {
    return(
        <>
            <SafeAreaView style={telaPadraoStyle.ajusteTela}>
                <StatusBar backgroundColor={cores.roxo}/>
                <KeyboardAvoidingView 
                    behavior={Platform.OS == "ios" ? "padding" : "height"}
                    style={defaultStyle.preencher}
                    >
                    {children}
                </KeyboardAvoidingView>
            </SafeAreaView>
            <SafeAreaView style={telaPadraoStyle.ajusteTelaBaixo}/>
        </>
    )
}

export default TelaPadrao;