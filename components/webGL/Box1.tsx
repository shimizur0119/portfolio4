import * as THREE from "three";
import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree, ReactThreeFiber } from 'react-three-fiber';
import { useDispatch, useSelector } from "react-redux"
import { StoreType } from "../../stores"
import { setOrangeCount, changeBoxStatus } from "../../stores/indexReducer"

const Box1 = (props: any) => {
    const id: string = props.id
    const [hovered, setHover] = useState(false)
    const boxStatus = useSelector((state: StoreType) => state.index.boxStatuses.filter(e => e.id == id)[0].status)
    const dispatch = useDispatch()
    useEffect(() => {
        console.log("test")
    }, [])
    const onclick = () => {
        dispatch(changeBoxStatus({ id: id, status: !boxStatus }))
    }
    const mesh = useRef({} as THREE.Mesh)
    useFrame(() => {
        mesh.current.rotation.x += 0.01
        mesh.current.rotation.z += 0.02
    })
    // return null
    return (
        <mesh
            position={props.position}
            ref={mesh}
            scale={boxStatus ? [1.5, 1.5, 1.5] : [1, 1, 1]}
            onPointerDown={onclick}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
        >
            <boxGeometry args={[1, 1, 1]} />
            <meshPhongMaterial color={boxStatus ? "orange" : (hovered ? "blue" : "green")} />
        </mesh>
    )
}
export default Box1
