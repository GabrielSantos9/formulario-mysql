import { useEffect, useRef } from "react";

const CONFIG = {
  transparent: true,
  shading: true,
  bloom: true,
  bloomIntensity: 0.4,
  bloomThreshold: 0.7,
  sunrays: false,
  densityDissipation: 3,
  velocityDissipation: 0.5,
  curl: 30,
  splatRadius: 0.2,
  splatForce: 3000,
  colorful: false,
  colorPalette: ["#8000ff"],
  hover: true,
};

function FluidBackground() {
  const containerRef = useRef(null);
  const simulationRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    let cancelled = false;
    let canvasInterno = null;

    const onPointerMove = (event) => {
      if (canvasInterno) {
        canvasInterno.dispatchEvent(
          new MouseEvent("mousemove", {
            clientX: event.clientX,
            clientY: event.clientY,
            bubbles: true,
          })
        );
      }
    };

    import("webgl-fluid-enhanced").then(({ default: WebGLFluidEnhanced }) => {
      if (cancelled || !containerRef.current) {
        return;
      }

      const simulation = new WebGLFluidEnhanced(containerRef.current);

      simulation.setConfig(CONFIG);
      simulation.start();

      simulationRef.current = simulation;

      canvasInterno = containerRef.current.querySelector("canvas");

      window.addEventListener("pointermove", onPointerMove, {
        passive: true,
      });
    });

    return () => {
      cancelled = true;

      window.removeEventListener("pointermove", onPointerMove);

      simulationRef.current?.stop();
      simulationRef.current = null;
    };
  }, []);

  return (
    <>
      <style>
        {`
          .fluid-bg-container {
            position: fixed !important;
            inset: 0 !important;
            width: 100vw !important;
            height: 100vh !important;
            z-index: 0 !important;
            pointer-events: none !important;
            overflow: hidden !important;
          }

          .fluid-bg-container canvas {
            width: 100% !important;
            height: 100% !important;
            display: block !important;
            pointer-events: none !important;
          }
        `}
      </style>

      <div
        ref={containerRef}
        className="fluid-bg-container"
      />
    </>
  );
}

export default FluidBackground;