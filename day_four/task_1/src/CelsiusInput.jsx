import { useState } from "react";
import TemperatureApp from "./TemperatureApp";

function CelsiusInput(){
    
    function  handleChange (e) {
        setTemperature(e.target.value);
    }
    return (
        <div>
            <TemperatureApp temperature= {temperature} onTemperatureChange={handleChange} />
            <label>Temperature in Celsius</label>
            <input
                type="number"
                value={temperature}
                onChange={handleChange}
                placeholder="Enter temperature in Celsius"
            /> 
            

        </div>
    );
}
export default CelsiusInput;
