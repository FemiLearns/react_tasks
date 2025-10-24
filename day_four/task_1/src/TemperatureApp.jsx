import { useState } from "react";
import CelsiusInput from "./CelsiusInput";
import FahrenheitInput from "./FahrenheitInput";

function TemperatureApp() {
    const [temperature, setTemperature] = useState('');
    
    const [scale, setScale] = useState('celsius');

    function handleCelsiusChange(newTemp) {
        setTemperature(newTemp);
        setScale('celsius');
    }
    function handleFahrenheitChange(newTemp) {
        setTemperature(newTemp);
        setScale('fahrenheit');
    }   
    return (
        <>
            <CelsiusInput temperature={temperature} onTemperatureChange={handleCelsiusChange} />
            <FahrenheitInput temperature={temperature} onTemperatureChange={handleFahrenheitChange} />
            <p>Current scale: {scale}</p>
        </>
    );
}
export default TemperatureApp;

