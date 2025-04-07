import React, { forwardRef } from 'react';
import { Model } from './Model';

export const ForwardedModel = forwardRef((props, ref) => {
    return (
        <group ref={ref}>
            <Model {...props} />
        </group>
    );
});