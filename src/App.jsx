import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Lighting from './components/Lighting';
import Camera from './components/Camera';
import Model from './components/Model';
import './index.css';

function App() {
  return (
    <div className="canvas-container">
      <Canvas shadows>
        {/* Set a black background as requested */}
        <color attach="background" args={['#000000']} />
        
        <Camera />
        <Lighting />
        
        <Suspense fallback={null}>
          <Model position={[0, 0, 0]} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
