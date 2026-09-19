import styled from "styled-components";
import FormularioComponent from "../components/Formulario/Formulario.js";
import { useEffect, useRef } from "react";

const FundoInterativo = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background: #101010;

  canvas {
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    z-index: 0;
  }
`;

const Conteudo = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  min-height: 100vh;
`;

function Home() {
  const canvasRef = useRef(null);
  const fundoRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const fundo = fundoRef.current;

    if (!canvas) {
      return;
    }

    const contexto = canvas.getContext("2d");

    let largura;
    let altura;
    let animacao;

    const mouse = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    const centroCampo = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    const quantidadeParticulas = 900;

    const particulas = [];

    const ajustarCanvas = () => {
      const proporcao = Math.min(window.devicePixelRatio || 1, 2);

      largura = window.innerWidth;
      altura = window.innerHeight;

      canvas.width = largura * proporcao;
      canvas.height = altura * proporcao;

      canvas.style.width = `${largura}px`;
      canvas.style.height = `${altura}px`;

      contexto.setTransform(proporcao, 0, 0, proporcao, 0, 0);
    };

    const criarParticulas = () => {
      particulas.length = 0;

      const centroX = centroCampo.x;
      const centroY = centroCampo.y;
      const raioX = largura * 0.42;
      const raioY = altura * 0.42;

      for (let i = 0; i < quantidadeParticulas; i++) {
        const angulo = Math.random() * Math.PI * 2;
        const distancia = 0.55 + Math.random() * 0.45;
        const x = centroX + Math.cos(angulo) * raioX * distancia;
        const y = centroY + Math.sin(angulo) * raioY * distancia;

        particulas.push({
          x,
          y,

          velocidadeX: 0,
          velocidadeY: 0,

          tamanho: 0.7 + Math.random() * 1.8,

          opacidade: 0.15 + Math.random() * 0.65,

          angulo,

          velocidadeOrbital: 0.0002 + Math.random() * 0.0005,

          raioX: raioX * distancia,
          raioY: raioY * distancia,
        });
      }
    };

    const movimentarMouse = (evento) => {
      mouse.x = evento.clientX;
      mouse.y = evento.clientY;
    };

    const sairMouse = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const animar = () => {
      contexto.clearRect(0, 0, largura, altura);

      centroCampo.x += (mouse.x - centroCampo.x) * 0.025;

      centroCampo.y += (mouse.y - centroCampo.y) * 0.025;

      particulas.forEach((particula) => {
        // Movimento orbital natural
        particula.angulo += particula.velocidadeOrbital;

        const alvoX =
          centroCampo.x + Math.cos(particula.angulo) * particula.raioX;

        const alvoY =
          centroCampo.y + Math.sin(particula.angulo) * particula.raioY;
        // Movimento em direção ao alvo
        particula.velocidadeX += (alvoX - particula.x) * 0.0008;

        particula.velocidadeY += (alvoY - particula.y) * 0.0008;

        // Interação com o mouse
        const distanciaX = particula.x - mouse.x;

        const distanciaY = particula.y - mouse.y;

        const distancia = Math.sqrt(
          distanciaX * distanciaX + distanciaY * distanciaY,
        );

        const raioMouse = 150;

        if (distancia < raioMouse && distancia > 0) {
          const intensidade = 1 - distancia / raioMouse;

          particula.velocidadeX += (distanciaX / distancia) * intensidade * 1.2;

          particula.velocidadeY += (distanciaY / distancia) * intensidade * 1.2;
        }

        // Amortecimento
        particula.velocidadeX *= 0.94;
        particula.velocidadeY *= 0.94;

        particula.x += particula.velocidadeX;

        particula.y += particula.velocidadeY;

        // Direção da partícula
        const velocidade = Math.sqrt(
          particula.velocidadeX * particula.velocidadeX +
            particula.velocidadeY * particula.velocidadeY,
        );

        const comprimento = particula.tamanho + velocidade * 3;

        const anguloMovimento = Math.atan2(
          particula.velocidadeY,
          particula.velocidadeX,
        );

        const inicioX = particula.x - Math.cos(anguloMovimento) * comprimento;

        const inicioY = particula.y - Math.sin(anguloMovimento) * comprimento;

        contexto.beginPath();

        contexto.moveTo(inicioX, inicioY);

        contexto.lineTo(particula.x, particula.y);

        contexto.strokeStyle = `rgba(
        70,
        130,
        255,
        ${particula.opacidade}
      )`;

        contexto.lineWidth = particula.tamanho;

        contexto.lineCap = "round";

        contexto.stroke();
      });

      animacao = requestAnimationFrame(animar);
    };

    ajustarCanvas();
    criarParticulas();

    window.addEventListener("resize", ajustarCanvas);

    fundo.addEventListener("mousemove", movimentarMouse);
    fundo.addEventListener("mouseleave", sairMouse);

    animar();

    return () => {
      fundo.removeEventListener("mousemove", movimentarMouse);
      fundo.removeEventListener("mouseleave", sairMouse);
      cancelAnimationFrame(animacao);

      window.removeEventListener("resize", ajustarCanvas);
    };
  }, []);

  return (
    <FundoInterativo ref={fundoRef}>
      <canvas ref={canvasRef} />
      <Conteudo>
        <FormularioComponent />
      </Conteudo>
    </FundoInterativo>
  );
}

export default Home;
