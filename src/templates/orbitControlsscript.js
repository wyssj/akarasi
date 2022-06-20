import * as THREE from "../utils/three.module.js"
import {OrbitControls} from "../utils/OrbitControls.js";


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({color: "white"});
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);
material.color.set("green");

camera.position.z = 5;

const controls = new OrbitControls(camera, renderer.domElement);

function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

window.addEventListener('click',function () {
    material.color.set("#" + ((1<<24)*Math.random() | 0).toString(16));
});

animate();
var axesHelper = new THREE.AxesHelper( 5 );
scene.add( axesHelper );