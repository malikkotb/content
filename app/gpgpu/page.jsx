"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import vertexShader from "./shaders/vertex.glsl";
import fragmentShader from "./shaders/fragment.glsl";

// basic three.js template scene with orbit controls
export default function Page() {
  // parent div
  const mountRef = useRef(null);

  useEffect(() => {
    // scene
    const scene = new THREE.Scene();

    // renderer
    const renderer = new THREE.WebGLRenderer({
      // to make scene have transparent background
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // geometry
    const geometry = new THREE.PlaneGeometry(1, 1);
    // best way to add shaders is to override the basic material
    // and add custom uniforms and shaders
    let material = new THREE.MeshNormalMaterial();

    material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
      },
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
    });
    // mesh
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // camera
    const camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.01,
      10
    );
    camera.position.z = 1;

    // orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;

    // setup resize
    const setupResize = () => {
      // resize renderer
      window.addEventListener("resize", () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
      });

      // resize camera
      window.addEventListener("resize", () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
      });
    };

    // animate/ render method
    const animate = function () {
      requestAnimationFrame(animate);

      renderer.render(scene, camera);
      controls.update();
    };

    animate();

    setupResize();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className='w-full bg-[#ccc] overflow-clip' ref={mountRef} />
  );
}
