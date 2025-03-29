import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div
      style={{
        position: "reletive",
        width: "100%",
        // height: "50vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "#fffff", 
            },
          },
          particles: {
            number: {
              value: 280,
              density: {
                enable: true,
                value_area:800,
              },
            },
            color: {
              value: ["#ff0000", "#00ff00", "#0000ff","#FFD700"], // RGB Colors
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 1,
              random: true,
            },
            size: {
              value: 3,
              random: true,
            },
            move: {
              enable: true,
              speed: 0.8,
              random: true,
              outModes: "out",
            },
            links: {
              enable: false,
            },
          },
          detectRetina: true,
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1, // Keep it behind the text
        }}
      />

      {/* Overlay Text with Gradient */}
      
    </div>
  );
};

export default ParticlesBackground;
