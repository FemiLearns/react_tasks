import React, { useState } from 'react';

const ColorPicker = () => {
    const [color, setColor] = useState('#000000');

    const handleChange = (event) => {
        setColor(event.target.value);
    };

    return (
        <div>
            <input 
                type="color" 
                value={color} 
                onChange={handleChange} 
            />
            <p style={{ color: color }}>Selected Color: {color}</p>
        </div>
    );
};

export default ColorPicker;