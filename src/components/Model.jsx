import { useRef } from 'react';
import * as THREE from 'three';
import { useGLTF, MeshTransmissionMaterial, useEnvironment } from '@react-three/drei';

export default function Model(props) {
  const meshRef = useRef();

  const { nodes, materials } = useGLTF('/Grand_Canyon_Glass.glb');

  const envMap = useEnvironment({ files: '/monochrome_studio_02_1k.hdr' });
  envMap.mapping = THREE.EquirectangularReflectionMapping;

  return (
    <group ref={meshRef} {...props} dispose={null}>
      <mesh geometry={nodes.Glass_Main.geometry}>
        <meshPhysicalMaterial
          envMap={envMap}
          thickness={0.2}
          roughness={0}
          transmission={1}
          ior={1.5}
          color="#ffffff"
          transparent
          opacity={1}
        // sheenRoughness={1}
        />
      </mesh>
      <mesh geometry={nodes.Glass_Base.geometry}>
        <MeshTransmissionMaterial
          envMap={envMap}
          backside
          thickness={0.8}
          roughness={0.1}
          transmission={1}
          ior={1.5}
          color="#000000"
        />
      </mesh>
    </group>
  );
}

useGLTF.preload('/Grand_Canyon_Glass.glb');
