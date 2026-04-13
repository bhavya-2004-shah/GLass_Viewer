import { Environment } from '@react-three/drei';

export default function Lighting() {
  return (
    <>
      <Environment files="/monochrome_studio_02_1k.hdr" environmentRotation={[0, Math.PI / 6, 0]} environmentIntensity={2} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      <spotLight position={[0, 5, 0]} intensity={2} angle={0.5} penumbra={1} castShadow />
    </>
  );
}
