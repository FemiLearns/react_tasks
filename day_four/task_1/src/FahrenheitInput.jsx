import { useState } from 'react';
function FaherenheitInput() {
    const [temperature, setTemperature] = useState('');

    function handleChange(e) {
        setTemperature(e.target.value);
    }
    return (
        <div>
            <label>Temperature in Fahrenheit</label>
            <input
                type="number"
                value={temperature}
                onChange={handleChange}
                placeholder="Enter temperature in Fahrenheit"
            />
        </div>
    );
}
export default FaherenheitInput;