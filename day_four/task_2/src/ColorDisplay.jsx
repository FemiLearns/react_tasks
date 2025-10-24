import ColorPicker from "./ColorPicker";
import RGBSlider from "./RGBSlider";
import React, { useState } from "react";

const ColorDisplay = () => {
    const [rgbValues, setRgbValues] = useState({ r: 0, g: 0, b: 0 });

    const handleColorChange = (newRgb) => {
        setRgbValues(newRgb);
    };

    return (
        <div className="container" >
            <ColorPicker onColorChange={handleColorChange} />
            <RGBSlider rgbValues={rgbValues} />
            <div style={{ backgroundColor: `rgb(${rgbValues.r}, ${rgbValues.g}, ${rgbValues.b})` }}>
                Current Color
            </div>
        </div>
    );
};

export default ColorDisplay;