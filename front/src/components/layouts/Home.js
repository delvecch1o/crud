import React from "react";
import Navbar from "./Navbar";
import { Link } from 'react-router-dom';

function Home(){
    return(
        <div>
            <Navbar />
            <h1>Sistema de conversões numéricas</h1>
            <p>Escolha qual converão deseja realizar</p>

            <li className="nav-item">
                <Link className="nav-link active" to="/temperatura">Conversão de Temperatura</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active" to="/moeda">Conversor de Moedas</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active" to="/romano">Conversão de números romanos</Link>
            </li>

        </div>
    );
}

export default Home;