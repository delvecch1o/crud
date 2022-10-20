import './ConversorTemperatura.css'
import React, { useState } from 'react';
import axios from 'axios';

function ConversorTemperatura(){

const [temperatureInput, setTemperature] = useState({
    celsius: '',
    fahrenheit: '',
    error_list:[],

});

const handleInput = (e) => {
    e.persist();
    setTemperature({ ...temperatureInput, [e.target.name]: e.target.value })
}

const converterTemperatura = (e) => {
    e.preventDefault()
    const data ={
        celsius: temperatureInput.celsius,
        fahrenheit: temperatureInput.fahrenheit,
        
    }

    axios.post('/api/temperatura', data).then(res => {
        setTemperature({
            ...temperatureInput,
            ...res.data,

        })
        console.log(res.data)
        if (res.data.status === 200) {
            
        } else if (res.data.status === 400) {

            setTemperature({ ...temperatureInput, error_list:res.data.errors });

        }

    });
    
    
}



return(
<div className="container">
    <form onSubmit={converterTemperatura}>
    <div className="celsiusfahrenheit">
        <label htmlFor="celsius">Celsius</label>
        <input type="number" name='celsius' onChange={handleInput} value={temperatureInput.celsius}  />
    </div>

    <div className="celsiusfahrenheit">
        <label htmlFor="fahrenheit">Fahrenheit</label>
        <input type="number" name='fahrenheit' onChange={handleInput} value={temperatureInput.fahrenheit}  />
    </div>

    <div className='container'>
        <input type="submit" value="Converter" />
    </div>
    </form>
</div>

 );
}

export default ConversorTemperatura;
