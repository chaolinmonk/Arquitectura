import React, { useState } from 'react';
import { COLORS } from './styles/colors';
import './styles/Button.css';

export default function CustomButton({
  habilitado = true,
  texto = "Botón custom",
  color,
  width = 'fit-content',
  height = 40,
}) {
  const [isDisabled, setIsDisabled] = useState(!habilitado);
  const [isHovered, setIsHovered] = useState(false);
  const { fill, border, secondary, text } = COLORS[color];

  return (
    <button
      style={{
        backgroundColor: isHovered ? fill : secondary, // Cambia el color de fondo al hover
        WebkitBoxShadow: isHovered
          ? `0 4px 8px ${fill}`
          : `inset 0 1px 6px ${fill}`,
        boxShadow: isHovered
          ? `0 4px 8px ${fill}`
          : `inset 0 1px 10px ${fill}`,
        padding: "10px 20px",
        border: `solid 1px ${border}`,
        borderRadius: "5px",
        cursor: isDisabled ? "not-allowed" : "pointer",
        color: text,
        width: `${width}`,
        height: height,
        transition: "all 0.3s ease",
      }}
      disabled={isDisabled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {texto}
    </button>
  );
}
