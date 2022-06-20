import * as THREE from "../utils/three.module.js"
import {OrbitControls} from "../utils/OrbitControls.js";
import GUI from 'https://cdn.jsdelivr.net/npm/lil-gui@0.16/+esm';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const radius = 10;

const geometry = new THREE.SphereGeometry(radius, 32, 16);
const material = new THREE.MeshBasicMaterial({color: "white", wireframe: true});
const sphere = new THREE.Mesh(geometry, material);
material.color.set("green");
scene.add(sphere);


// const geometry2 = new THREE.RingGeometry( 10, 10.1, 200 );
// const material2 = new THREE.MeshBasicMaterial( { color: "grey", side: THREE.DoubleSide } );
// const mesh = new THREE.Mesh( geometry2, material2 );
// scene.add( mesh );
// mesh.rotation.set(0, 3.141592653589793,3.141592653589793)
//
// const geometry3 = new THREE.RingGeometry( 10, 10.1, 200 );
// const material3 = new THREE.MeshBasicMaterial( { color: "grey", side: THREE.DoubleSide } );
// const mesh2 = new THREE.Mesh( geometry3, material3 );
// scene.add( mesh2 );
// mesh.rotation.set(Math.PI/2, Math.PI,Math.PI)

camera.position.set(6,6,18);

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


const dir = new THREE.Vector3( 1, 0, 0 );

//normalize the direction vector (convert to vector of length 1)
dir.normalize();
const origin = new THREE.Vector3( 0, 0, 0 );
const hex = "red";
const arrowHelper = new THREE.ArrowHelper( dir, origin, radius, hex );
scene.add( arrowHelper );
arrowHelper.rotation.set(euler.x, euler.y, euler.z);

const gui = new GUI();

gui.add( arrowHelper.rotation, 'x', 0, 2*Math.PI );
gui.add( arrowHelper.rotation, 'y', 0, 2*Math.PI);
gui.add(arrowHelper.rotation,'z',0,2*Math.PI);


