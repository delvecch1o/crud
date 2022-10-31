import { Container, Form, Button, Input, Select } from './styles';
import React, { useState } from 'react';
import axios from 'axios';

function ConversorTemperatura() {

const [inNumber, setInNumber] = useState(0)
const [fromTemperature, setFromTemperature] = useState('celsius');
const [toTemperature, setToTemperature] = useState('fahrenheit');
const [result, setResult] = useState();



const handleInNumber = (e) => {
    e.persist();
    setInNumber(e.target.value)
}

const handleSelectFromTemperature = (e) => {
    e.persist();
    setFromTemperature(e.target.value)
}

const handleSelectToTemperature = (e) => {
    e.persist();
    setToTemperature(e.target.value)
}



const converterTemperatura = (e) => {
    e.preventDefault()
    const data = {
        in: inNumber,
        from: fromTemperature ,
        to: toTemperature,
        

    }

    axios.post('/api/temperatura', data).then(res => {
        
        setResult(res.data.result)

        console.log(res.data)
        if (res.data.status === 200) {

        } else if (res.data.status === 400) {

            setInNumber({ ...inNumber, error_list: res.data.errors });

        }

    });
}

return (
    <Container>
    <Form onSubmit={converterTemperatura}>
        <h1>Conversor de Temperatura</h1>
        <Input
            name='in'
            placeholder='Digite o valor para a conversão'
            type="number"
            onChange={handleInNumber}
            value={inNumber}
        />

        <Select onChange={handleSelectFromTemperature} value={fromTemperature}>

            <option value='celsius'>Celsius</option>
            <option value='fahrenheit'>Fahrenheit</option>
            <option value='kelvin'>Kelvin</option>

        </Select>

        <Select onChange={handleSelectToTemperature} value={toTemperature}>

            <option value='celsius'>Celsius</option>
            <option value='fahrenheit'>Fahrenheit</option>
            <option value='kelvin'>Kelvin</option>


        </Select>

        <Button type="submit" value="Converter">Converter</Button>

        <Input
            name='result'
            placeholder='Temperatura Convertida'
            type="number"
            value={result}
        />

    </Form>

</Container>

);
}

export default ConversorTemperatura;