import * as THREE from "three";

const scene = new THREE.scene();

const playerCar = Car();
scene.add(playerCar);

//set up lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const dirLight = new THREE.DirectionalLight(0xffffff, 0.6);
dirLight.position.set(100, -300, 400);
scene.add(dirLight);

//set up camera