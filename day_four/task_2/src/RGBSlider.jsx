import React, { useState, useMemo } from "react";
import './index.css'

function RGBSlider({ label, value, onChange, trackColor }) {
    return (
        <label style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ width: 40 }}>{label}</span>
            <input
                type="range"
                min="0"
                max="255"
                value={value}
                onChange={(e) => onChange(Number(e.target.value))}
                style={{
                    flex: 1,
                    accentColor: trackColor, // modern browsers
                    background: `linear-gradient(90deg, ${trackColor} 0%, ${trackColor} 100%)`,
                }}
            />
            <output style={{ width: 40, textAlign: "right" }}>{value}</output>
        </label>
    );
}

export default function ColorDisplay() {
    const [r, setR] = useState(120);
    const [g, setG] = useState(180);
    const [b, setB] = useState(200);

    const rgbString = `rgb(${r}, ${g}, ${b})`;
    const hex = useMemo(() => {
        const toHex = (n) => n.toString(16).padStart(2, "0").toUpperCase();
        return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    }, [r, g, b]);

    return (
        <div style={{ fontFamily: "sans-serif", maxWidth: 420, margin: "0 auto" }}>
            <div
                style={{
                    height: 140,
                    borderRadius: 8,
                    marginBottom: 12,
                    background: rgbString,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: (r + g + b) / 3 > 150 ? "#000" : "#fff",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                }}
            >
                <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 18, fontWeight: 600 }}>{hex}</div>
                    <div style={{ fontSize: 12, opacity: 0.85 }}>{rgbString}</div>
                </div>
            </div>

            <div style={{ display: "grid", gap: 8 }}>
                <RGBSlider label="R" value={r} onChange={setR} trackColor={`rgb(${r},0,0)`} />
                <RGBSlider label="G" value={g} onChange={setG} trackColor={`rgb(0,${g},0)`} />
                <RGBSlider label="B" value={b} onChange={setB} trackColor={`rgb(0,0,${b})`} />
            </div>
        </div>
    );
}