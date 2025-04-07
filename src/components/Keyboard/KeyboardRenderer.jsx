import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import AnimatedModel from './AnimatedModel';

const KeyboardRenderer = (props) => {
    return null;
    // return (
    //     <Suspense fallback={null}>
    //         <Canvas
    //             style={{ zIndex: 0, position: 'absolute', top: 0, left: 0 }}
    //         >
    //             <AnimatedModel />
    //         </Canvas>
    //     </Suspense>
    // );
};

export default KeyboardRenderer;
