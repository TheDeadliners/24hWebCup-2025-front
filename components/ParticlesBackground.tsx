// components/ParticlesBackground.tsx

'use client';

import { useEffect, useState, useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine, Container } from "tsparticles-engine";

interface ParticlesBackgroundProps {
    id: string;
    color?: string;
    linkColor?: string;
    particleCount?: number;
}

export default function ParticlesBackground({
                                                id,
                                                color = "#D2AFFF",
                                                linkColor = "#D2AFFF",
                                                particleCount = 50
                                            }: ParticlesBackgroundProps) {
    const [loaded, setLoaded] = useState(false);

    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
        setLoaded(true);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        // Particules chargées
    }, []);

    return (
        <Particles
            id={id}
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fullScreen: { enable: false },
                background: {
                    color: {
                        value: "transparent",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 150,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: color,
                    },
                    links: {
                        color: linkColor,
                        distance: 150,
                        enable: true,
                        opacity: 0.3,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 1.5,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: particleCount,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 3 },
                    },
                },
                detectRetina: true,
            }}
            style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                zIndex: 0,
                top: 0,
                left: 0,
            }}
        />
    );
}