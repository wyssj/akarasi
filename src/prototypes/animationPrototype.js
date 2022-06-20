import * as THREE from "../posts/animationJS/three.module.js"
import {OrbitControls} from "../posts/animationJS/OrbitControls.js";
import GUI from 'https://cdn.jsdelivr.net/npm/lil-gui@0.16/+esm';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
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

    renderer.render(scene, camera);
}

window.addEventListener('click',function () {
    material.color.set("#" + ((1<<24)*Math.random() | 0).toString(16));
});

animate();
var axesHelper = new THREE.AxesHelper( 5 );
scene.add( axesHelper );


const dir = new THREE.Vector3( 1, 2, 0 );

//normalize the direction vector (convert to vector of length 1)
dir.normalize();
const origin = new THREE.Vector3( 0, 0, 0 );
const length = 3;
const hex = "black";
const arrowHelper = new THREE.ArrowHelper( dir, origin, length, hex );
scene.add( arrowHelper );

const gui = new GUI();

gui.add( arrowHelper.rotation, 'x', 0, 1 );
gui.add( arrowHelper.rotation, 'y', 0, 100, 10 );
gui.add(arrowHelper.rotation,'z',0,20,0.5);


