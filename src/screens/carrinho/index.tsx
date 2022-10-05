import React from "react";
import { FlatList } from "react-native";
import Item from "./item";
import StatusCarrinho from "../../components/StatusCarrinho";

const servicos = [
    {
        id: 1,
        nome: "Banho",
        preco: 20,
        descricao: "Corte de cabelo masculino",
        quantidade: 1
    },
    {
        id: 2,
        nome: "Vacina V4",
        preco: 89.9,
        descricao: "Uma dose da vacina V4. Seu gato precisa de duas doses",
        quantidade: 2
    },
    {
        id: 3,
        nome: "Vacina antirrábica",
        preco: 99.9,
        descricao: "Uma dose da vacina antirrábica. Seu gato precisa de uma dose a cada ano",
        quantidade: 1
    }
]

const Carrinho: React.FC = () => {

    const total = servicos.reduce((soma, servico) => soma + (servico.preco * servico.quantidade), 0)
    return(
        <>
            <StatusCarrinho total={total}/>
            <FlatList
                data={servicos}
                renderItem={({item}) => (
                    <Item {...item}/>
                )}
                keyExtractor={item => item.id.toString()}
                removeClippedSubviews={false}
            />
        </>
    )
}

export default Carrinho;