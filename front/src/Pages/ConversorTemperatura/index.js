import { Container, Form, Button, Input } from './styles';
import React, { useState } from 'react';
import axios from 'axios';

function ConversorTemperatura() {

    const [temperatureInput, setTemperature] = useState({
        celsius: '',
        fahrenheit: '',
        kelvin: '',
        error_list: [],

    });

    const handleInput = (e) => {
        e.persist();
        setTemperature({ ...temperatureInput, [e.target.name]: e.target.value })
    }

    const converterTemperatura = (e) => {
        e.preventDefault()
        const data = {
            celsius: temperatureInput.celsius,
            fahrenheit: temperatureInput.fahrenheit,
            kelvin: temperatureInput.kelvin,

        }

        axios.post('/api/temperatura', data).then(res => {
            setTemperature({
                ...temperatureInput,
                ...res.data,

            })
            console.log(res.data)
            if (res.data.status === 200) {

            } else if (res.data.status === 400) {

                setTemperature({ ...temperatureInput, error_list: res.data.errors });

            }

        });
    }

    return (
        <Container>
            <Form onSubmit={converterTemperatura}>
                <h1>Conversão de graus celsius para fahrenheit e vice versa</h1>
                <Input
                    name='celsius'
                    placeholder='Celsius C°'
                    type="number"
                    onChange={handleInput}
                    value={temperatureInput.celsius}
                />
                <Input
                    name='fahrenheit'
                    placeholder='Fahrenheit F°'
                    type="number"
                    onChange={handleInput}
                    value={temperatureInput.fahrenheit}
                />
                <Button type="submit" value="Converter">Converter</Button>

            </Form>

            <Form onSubmit={converterTemperatura}>
                <h1>Conversão de graus celsius para kelvin e vice versa</h1>
                <Input
                    name='celsius'
                    placeholder='Celsius C°'
                    type="number"
                    onChange={handleInput}
                    value={temperatureInput.celsius}
                />

                <Input
                    name='kelvin'
                    placeholder='Kelvin  K°'
                    type="number"
                    onChange={handleInput}
                    value={temperatureInput.kelvin}
                />
                <Button type="submit" value="Converter">Converter</Button>

            </Form>

            <Form onSubmit={converterTemperatura}>
                <h1>Conversão de graus kelvin para fahrenheit e vice versa</h1>
                <Input
                    name='kelvin'
                    placeholder='Kelvin K°'
                    type="number"
                    onChange={handleInput}
                    value={temperatureInput.kelvin}
                />

                <Input
                    name='fahrenheit'
                    placeholder='Fahrenheit F°'
                    type="number"
                    onChange={handleInput}
                    value={temperatureInput.fahrenheit}
                />
                <Button type="submit" value="Converter">Converter</Button>

            </Form>

        </Container>

    );
}

export default ConversorTemperatura;

