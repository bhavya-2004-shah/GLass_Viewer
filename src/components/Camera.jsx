import { PerspectiveCamera, OrbitControls } from '@react-three/drei';

export default function Camera() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0.1, 1]} fov={10} />
      <OrbitControls makeDefault enableDamping dampingFactor={0.05} />
    </>
  );
}
