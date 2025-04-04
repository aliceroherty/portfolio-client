import React from 'react'
import PropTypes from 'prop-types'
import { useFrame } from '@react-three/fiber'

const KeyboardAnimation = ({ mesh }) => {
    KeyboardAnimation.propTypes = {
        mesh: PropTypes.object.isRequired,
    }

    // useFrame is a hook from react-three-fiber that allows you to run code on each frame
    useFrame(() => {
        mesh.current.rotation.y += 0.005
    })
}

export default KeyboardAnimation