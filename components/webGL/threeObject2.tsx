import { Canvas, useFrame } from 'react-three-fiber';
import CameraController from "./CameraController"
import Box1 from "./Box1"
import { ReactReduxContext } from "react-redux"
import { forwardContext } from "../usefull/forwardContext"

const WrappedCanvas = forwardContext(ReactReduxContext)(Canvas);

const Move = () => {
  useFrame(({ clock, camera }) => {
    camera.position.x += Math.sin(clock.getElapsedTime()) * 0.02
    camera.position.y += Math.sin(clock.getElapsedTime()) * 0.02
  })
  return null
}

const IndexWebGL = () => {
  return (
    <WrappedCanvas>
      <Move />
      <CameraController />
      <ambientLight />
      <spotLight intensity={0.3} position={[5, 10, 100]} />
      <Box1 id="1" position={[2, 0, 0]} />
      <Box1 id="2" position={[0, 2, 0]} />
      <Box1 id="3" position={[0, 0, 2]} />
      <Box1 id="4" position={[-2, 0, 0]} />
      <Box1 id="5" position={[0, -2, 0]} />
      <Box1 id="6" position={[0, 0, -2]} />
      <Box1 id="7" position={[4, 0, 0]} />
      <Box1 id="8" position={[0, 4, 0]} />
      <Box1 id="9" position={[0, 0, 4]} />
      <Box1 id="10" position={[-4, 0, 0]} />
      <Box1 id="11" position={[0, -4, 0]} />
      <Box1 id="12" position={[0, 0, -4]} />
    </WrappedCanvas>
  );
};

export default IndexWebGL;