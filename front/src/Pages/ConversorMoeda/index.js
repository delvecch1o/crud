import React, { useState } from "react";
import { Container, Form, Button, Input, Select } from './styles';
import axios from 'axios';

function ConversorMoeda(props) {
    const [fromCurrency, setFromCurrency] = useState('BRL')
    const [toCurrency, setToCurrency] = useState('USD');
    const [currencyInput, setCurrencyInput] = useState(0);
    const [result, setResult] = useState();

    const handleInput = (e) => {
        e.persist();
        setCurrencyInput(e.target.value)
    }

    const handleSelectFrom = (e) => {
        e.persist();
        setFromCurrency(e.target.value)
    }

    const handleSelectTo = (e) => {
        e.persist();
        setToCurrency(e.target.value)
    }

    const converterMoeda = (e) => {
        e.preventDefault()
        const data = {
            in: currencyInput,
            from: fromCurrency,
            to: toCurrency,


        }

        axios.post('/api/moedas', data).then(res => {

            setResult(res.data.result)

            console.log(res.data)
            if (res.data.status === 200) {

            } else if (res.data.status === 400) {

                setCurrencyInput({ ...currencyInput, error_list: res.data.errors });

            }

        });
    }


    return (

        <Container>
            <Form onSubmit={converterMoeda}>
                <h1>Conversor de Moedas</h1>
                <Input
                    name='in'
                    placeholder='Digite o valor para a conversão'
                    type="number"
                    onChange={handleInput}
                    value={currencyInput}
                />

                <Select onChange={handleSelectFrom} value={fromCurrency}>

                    <option value='USD'>USD</option>
                    <option value='EUR'>EUR</option>
                    <option value='BRL'>BRL</option>

                </Select>

                <Select onChange={handleSelectTo} value={toCurrency}>

                    <option value='USD'>USD</option>
                    <option value='EUR'>EUR</option>
                    <option value='BRL'>BRL</option>


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

export default ConversorMoeda
