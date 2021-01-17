import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree, ReactThreeFiber } from 'react-three-fiber';
import * as THREE from "three";
import CameraController from "./CameraController"

const Box = () => {
  const mesh = useRef({} as THREE.Mesh)
  useFrame(() => {
    mesh.current.rotation.x += 0.01
    mesh.current.rotation.z += 0.02
  })
  return (
    <mesh ref={mesh}>
      <boxGeometry args={[1, 1, 1]} />
      <meshPhongMaterial color="orange" />
    </mesh>
  )
}

const ThreeObject = () => {
  return (
    <Canvas>
      <CameraController />
      <ambientLight />
      <Box />
    </Canvas>
  )
}

export default ThreeObject
