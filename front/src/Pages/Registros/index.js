import axios from "axios";
import React, { useState, useEffect } from "react";
import { Table } from "./styles";

function Registros() {

    const [registrosCoins, setRegistrosCoins] = useState([]);
    const [registrosTemperatures, setRegistrosTemperatures] = useState([]);

    const getRegistros = () => {
        axios.get('/api/registros')
            .then(res => {
                setRegistrosCoins(res.data.registrosMoedas)
                setRegistrosTemperatures(res.data.registrosTemperaturas)

                console.log(res.data)
            })

    }

    useEffect(() => {
        getRegistros();
    }, [])

    return (
        <div>
            <h1>Listar</h1>
            <Table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Valor R$</th>
                        <th>De</th>
                        <th>Para</th>
                        <th>Valor Convertido</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.values(registrosCoins).map(conversao => (
                        <tr>
                            <td>{conversao.user_id}</td>
                            <td>{conversao.in}</td>
                            <td>{conversao.from}</td>
                            <td>{conversao.to}</td>
                            <td>{conversao.result}</td>

                        </tr>
                    ))}
                </tbody>
            </Table>

            <Table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Temperatura</th>
                        <th>De</th>
                        <th>Para</th>
                        <th>Resultado</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.values(registrosTemperatures).map(conversao => (
                        <tr>
                            <td>{conversao.user_id}</td>
                            <td>{conversao.in}</td>
                            <td>{conversao.from}</td>
                            <td>{conversao.to}</td>
                            <td>{conversao.result}</td>

                        </tr>
                    ))}
                </tbody>
            </Table>

        </div>


    )
}

export default Registros