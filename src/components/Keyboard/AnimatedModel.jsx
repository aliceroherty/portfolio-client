import React, { useState, useEffect } from 'react';
import { motion, MotionConfig } from 'motion/react';
import { ForwardedModel } from './ForwardedModel';

// Create a motion-enabled version of the wrapped Model component
const MotionModel = motion(ForwardedModel);

const AnimatedModel = (props) => {
    const [position, setPosition] = useState([2.25, 0.5, 0]);

    // Tailwind breakpoints
    const sizes = {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
    };

    useEffect(() => {
        positionMesh();
        window.addEventListener('resize', positionMesh);
        return () => window.removeEventListener('resize', positionMesh);
    }, []);

    const positionMesh = () => {
        let newPosition = [];
        if (window.matchMedia(`screen and (min-width: ${sizes.xl})`).matches) {
            newPosition = [2.25, 1.15, 0];
        } else if (
            window.matchMedia(`screen and (min-width: ${sizes.lg})`).matches
        ) {
            newPosition = [0, -0.6, 0];
        } else {
            newPosition = [0, -1, -3]; // Moved smaller screen version back further
        }

        setPosition((prev) => {
            // Only update state if it has actually changed
            if (
                prev[0] === newPosition[0] &&
                prev[1] === newPosition[1] &&
                prev[2] === newPosition[2]
            ) {
                return prev;
            }
            return newPosition;
        });
    };

    // Animation variants
    const modelAnimation = {
        initial: { rotateX: Math.PI / 2, y: position[1] },
        animate: {
            rotateX: Math.PI / 2,
            y: [position[1] - 0.1, position[1] + 0.1],
            rotateZ: [-0.15, 0, 0.1, 0],
            transition: {
                y: {
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 2,
                    ease: "easeInOut"
                },
                rotateZ: {
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut",
                    times: [0, 0.25, 0.75, 1]
                }
            }
        }
    };

    return (
        <MotionConfig reducedMotion="user">
            <ambientLight intensity={0.7} />
            <directionalLight intensity={1.2} position={[0, 0, 25]} />
            <MotionModel
                initial="initial"
                animate="animate"
                variants={modelAnimation}
                position={position}
                scale={0.7}
            />
        </MotionConfig>
    );
};

export default AnimatedModel;
