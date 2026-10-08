import { useEffect, useState } from "react";

function Cursor() {
  const [posicao, setPosicao] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const moverCursor = (event) => {
      setPosicao({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("pointermove", moverCursor);

    return () => {
      window.removeEventListener("pointermove", moverCursor);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        left: posicao.x,
        top: posicao.y,
        width: "28px",
        height: "28px",
        transform: "translate(-50%, -50%)",
        borderRadius: "50%",
        border: "1px solid rgba(180, 150, 255, 0.85)",
        boxShadow: `
          0 0 6px rgba(150, 110, 255, 0.55),
          0 0 14px rgba(120, 80, 255, 0.25)
        `,
        pointerEvents: "none",
        zIndex: 99999,
      }}
    >
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: "8px",
          height: "8px",
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          background: "#ffffff",
          boxShadow: "0 0 8px rgba(255, 255, 255, 0.9)",
        }}
      />
    </div>
  );
}

export default Cursor;