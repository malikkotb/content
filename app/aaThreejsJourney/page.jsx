"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Page() {
  // ## First Scene
  // We need 4 elements to get started:
  // - A scene that will contain objects
  // - Some objects
  // - A camera
  // - A renderer

  const canvasRef = useRef(null); // we can use this to access the canvas element
  useEffect(() => {
    // scene
    const scene = new THREE.Scene();

    // geometry
    const geometry = new THREE.BoxGeometry(1, 1, 1); // the shape of the object
    // material
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 }); // the color of the object
    // mesh
    const mesh = new THREE.Mesh(geometry, material); // combines geometry (shape) with material (appearance)
    scene.add(mesh);

    // camera
    // PerspectiveCamera simulates human eye vision with perspective

    // Parameters:
    // 1. Field of View (75 degrees) - How wide the camera can see
    // 2. Aspect Ratio - Matches the browser window dimensions
    // 3. Near plane (0.1) - Closest objects camera will render
    // 4. Far plane (1000) - Furthest objects camera will render

    const sizes = {
      width: 800, // can also be window.innerWidth
      height: 600, // can also be window.innerHeight
    };

    const camera = new THREE.PerspectiveCamera(
      75, // usually this is smaller (like 35, which would be zoomed in)
      sizes.width / sizes.height
      //   0.1,
      //   1000
    );
    camera.position.z = 5; // otherwise it would be at the origin (0,0,0) and we would be inside the object and wont see anything
    scene.add(camera); // optional, but it's good to have it

    // renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
    });

    renderer.setSize(sizes.width, sizes.height);

    renderer.render(scene, camera);

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    requestAnimationFrame(animate);
  }, []);

  return (
    <div>
      <h1>Welcome to the 3D Water Drop Mouse Hover Page</h1>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}
