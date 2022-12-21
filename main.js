import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

import "./style.css";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const loader = new GLTFLoader();

//obj to select the asset
let obj;

//loading the asset
loader.load("assets/bike.gltf", function (gltf) {
  obj = gltf.scene;
  scene.add(gltf.scene);
});

//background color of the scene
scene.background = new THREE.Color(0x000000);

//light from the right
const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff);
hemiLight.position.set(0, 50, 0);
scene.add(hemiLight);

const dirLight = new THREE.DirectionalLight(0xff8282);
dirLight.position.set(100, 0, -100);
scene.add(dirLight);

//light from the left
const hemiLightleft = new THREE.HemisphereLight(0xffffff, 0xffffff);
hemiLightleft.position.set(0, 50, 0);
scene.add(hemiLightleft);

const dirLightleft = new THREE.DirectionalLight(0xecff75);
dirLightleft.position.set(-100, 0, -100);
scene.add(dirLightleft);

//position of camera
camera.position.set(0, 0.5, 3);

//animation
function animate() {
  requestAnimationFrame(animate);
  obj.rotation.y += 0.005;
  renderer.render(scene, camera);
}

animate();
