// App.js
import React, { useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Line } from "@react-three/drei";
import "./styles.css";
import Grid from "./Grid";

// Main App component
export default function App() {
  return (
    <div className="App">
      {/* <h1>Hello CodeSandbox</h1>
      <hf2>Start editing to see some magic happen!</h2> */}
      <Canvas>
        <SetupCamera />
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 10, 0]} intensity={1} />
        <group rotation={[Math.PI / 180, Math.PI / 180, 0]}>
          <Grid size={70} divisions={8} />
        </group>
        <OrbitControlsComponent />
      </Canvas>
    </div>
  );
}

const OrbitControlsComponent = () => {
  return (
    <OrbitControls
      enablePan={false}
      enableZoom={true}
      maxPolarAngle={Math.PI / 2} // Locking rotation on the x-axis
      minPolarAngle={-Math.PI / 1} // Locking rotation on the x-axis
    />
  );
};

// Component to set up and configure the camera
const SetupCamera = () => {
  const { camera, size } = useThree();

  useEffect(() => {
    const aspect = size.width / size.height;
    camera.left = -10 * aspect;
    camera.right = 10 * aspect;
    camera.top = 10;
    camera.bottom = -10;
    camera.near = 0.1;
    camera.far = 100;
    camera.position.set(10, 10, 10); // Position the camera
    camera.lookAt(0, 0, 0); // Look at the center of the scene
    camera.updateProjectionMatrix();
  }, [camera, size]);

  return null;
};
