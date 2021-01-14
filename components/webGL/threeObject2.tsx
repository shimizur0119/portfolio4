import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree, ReactThreeFiber } from 'react-three-fiber';
import { OrbitControls } from "three-orbitcontrols-ts";
import * as THREE from "three";

const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);
    // controls.minDistance = 10;
    // controls.maxDistance = 10;
    return () => { controls.dispose(); };
  }, [camera, gl]);
  return null;
};

const Box = (props: ReactThreeFiber.MeshProps) => {
  const mesh = useRef({} as THREE.Mesh)
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  useFrame(() => {
    mesh.current.rotation.x += 0.01
    mesh.current.rotation.z += 0.02
  })
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={() => { setActive(!active) }}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshPhongMaterial color={active ? (hovered ? "red" : "orange") : (hovered ? "blue" : "green")} />
    </mesh>
  )
}

const App = () => {
  return (
    <Canvas>
      <CameraController />
      <ambientLight />
      <spotLight intensity={0.3} position={[5, 10, 100]} />
      <Box position={[2, 0, 0]} />
      <Box position={[0, 2, 0]} />
      <Box position={[0, 0, 2]} />
      <Box position={[-2, 0, 0]} />
      <Box position={[0, -2, 0]} />
      <Box position={[0, 0, -2]} />
      <Box position={[4, 0, 0]} />
      <Box position={[0, 4, 0]} />
      <Box position={[0, 0, 4]} />
      <Box position={[-4, 0, 0]} />
      <Box position={[0, -4, 0]} />
      <Box position={[0, 0, -4]} />
    </Canvas>
  );
};

export default App;