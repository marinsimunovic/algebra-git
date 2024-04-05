// Slider.tsx
import React from "react";

interface SliderProps {
  value: number;
  onChange: (value: number) => void;
}

const Slider: React.FC<SliderProps> = ({ value, onChange }) => {
  return (
    <div className="slider-container">
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        className="slider"
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  );
};

export default Slider;
