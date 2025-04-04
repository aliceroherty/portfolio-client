import React, { useRef, useState, useEffect, Suspense } from 'react'
import { Model } from './Model'
import { Canvas } from '@react-three/fiber'
import KeyboardAnimation from './KeyboardAnimation'

const KeyboardRenderer = (props) => {
	const [position, setPosition] = useState([2.25, 0.5, 0])

	// Tailwind breakpoints
	const sizes = {
		sm: '640px',
		md: '768px',
		lg: '1024px',
		xl: '1280px',
		'2xl': '1536px',
	}

	const mesh = useRef()

    useEffect(() => {
        positionMesh();
        window.addEventListener('resize', positionMesh);

        return () => {
            window.removeEventListener('resize', positionMesh);
        };
    }, []);

    const positionMesh = () => {
        let newPosition = []
		if (window.matchMedia(`screen and (min-width: ${sizes.xl})`).matches) {
			newPosition = [2.25, 0.5, 0]
		} else if (
			window.matchMedia(`screen and (min-width: ${sizes.lg})`).matches
		) {
			newPosition = [0, -0.6, 0]
		} else {
			newPosition = [0, -1, -3]
        }

        setPosition((prev) => {
            // Only update state if it has actually changed
            if (
                prev[0] === newPosition[0] &&
                prev[1] === newPosition[1] &&
                prev[2] === newPosition[2]
            ) {
                return prev
            }
            return newPosition
        });
	}

    return (
        <Suspense fallback={null}>
            <Canvas
                style={{ zIndex: 0, position: 'absolute', top: 0, left: 0 }}
            >
                <Model
                    position={position}
                    setMesh={(ref) => (mesh.current = ref)}
                    rotation={[0, 0, 0]}
                    scale={0.7}
                />
                <KeyboardAnimation mesh={mesh} />
                <ambientLight intensity={0.7} />
                <directionalLight intensity={1.2} position={[0, 0, 25]} />
            </Canvas>
        </Suspense>
    );
}

export default KeyboardRenderer