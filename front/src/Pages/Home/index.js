import React from "react";
import Navbar from '../../components/Navbar/index'
import { Title, Paragrafo, ListItem, Anchor } from './styles'

function Home() {
    return (
        <div>
            <Navbar />

            <Title>Sistema de conversões numéricas</Title>
            <Paragrafo>Escolha qual conversão deseja realizar</Paragrafo>

            <ListItem><Anchor href="/temperatura">Conversão de Temperatura</Anchor></ListItem>
            <ListItem><Anchor href="/moeda">Conversor de Moedas</Anchor></ListItem>
            <ListItem><Anchor href="/romano">Conversão de números romanos</Anchor></ListItem>

        </div>

    )
}

export default Home;        