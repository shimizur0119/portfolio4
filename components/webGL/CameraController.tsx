import { useEffect } from "react";
import * as THREE from "three";
import { useThree } from 'react-three-fiber';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { OrbitControls } from "@avatsaev/three-orbitcontrols-ts";

const CameraController = () => {
    const { camera, gl } = useThree();
    useEffect(() => {
        let controls = new OrbitControls(camera, gl.domElement);
        controls.autoRotate = true;
        controls.autoRotateSpeed = 1;
        return () => {
            controls.dispose();
        };
    }, [camera, gl]);
    return null;
};

export default CameraController