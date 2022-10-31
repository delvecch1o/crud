import React, { useState } from "react";
import { Container, Form, Button, Input, Select } from './styles';
import axios from "axios";

function ConversorNumerosRomanos() {


    const [fromNotacao, setFromNotacao] = useState('decimal');
    const [toNotacao, setToNotacao] = useState('romanos');
    const [notacaoInput, setNotacaoInput] = useState(0);
    const [result, setResult] = useState();

    const handleInput = (e) => {
        e.persist();
        setNotacaoInput(e.target.value)
        // setNotacaoInput({ ...notacaoInput, [e.target.name]: e.target.value })
    }

    const handleSelectFrom = (e) => {
        e.persist();
        setFromNotacao(e.target.value)
    }

    const handleSelectTo = (e) => {
        e.persist();
        setToNotacao(e.target.value)
    }

    const converterDecimalRomano = (e) => {
        e.preventDefault()
        const data = {
            in: notacaoInput,
            from: fromNotacao,
            to: toNotacao,

        }

        axios.post('/api/romanos', data).then(res => {
            setResult(res.data.result)

            console.log(res.data)

            if (res.data.status === 200) {

            } else if (res.data.status === 400) {

                setNotacaoInput({ ...notacaoInput, error_list: res.data.errors });

            }

        });
    }

    return (
        <Container>
            <Form onSubmit={converterDecimalRomano}>
                <h1>Conversor Decimal para Romanos</h1>
                <Input
                    name='decimal'
                    placeholder='Digite um valor de 0 a 3999'
                    type="number"
                    onChange={handleInput}
                    value={notacaoInput}
                />
                <Select onChange={handleSelectFrom} value={fromNotacao}>

                    <option value='decimal'>Decimal</option>
                    <option value='romanos'>Romanos</option>


                </Select>

                <Select onChange={handleSelectTo} value={toNotacao}>

                    <option value='decimal'>Decimal</option>
                    <option value='romanos'>Romanos</option>


                </Select>
                <Button type="submit" value="Converter">Converter</Button>

                <Input
                    name='result'
                    placeholder='Valor Convertido'
                    type="number"
                    value={result}
                />

            </Form>


        </Container>

    );
}

export default ConversorNumerosRomanos;