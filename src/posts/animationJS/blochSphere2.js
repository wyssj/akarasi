import * as THREE from "./three.module.js"
import {OrbitControls} from "./OrbitControls.js";

var blochSphere = document.getElementById("blochSphere");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({canvas: blochSphere });
//renderer.setSize(window.innerWidth, window.innerHeight);
//document.body.appendChild(renderer.domElement);

var geometry = new THREE.SphereGeometry(1, 32, 16);
var material = new THREE.MeshBasicMaterial({color: "white"});
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);
material.color.set("green");

const controls = new OrbitControls(camera, renderer.domElement);

camera.position.z = 5;

const geometry2 = new THREE.RingGeometry( 2, 2.1, 32 );
const material2 = new THREE.MeshBasicMaterial( { color: 0xffff00, side: THREE.DoubleSide } );
const mesh = new THREE.Mesh( geometry2, material2 );
scene.add( mesh );

const dir = new THREE.Vector3( 1, 2, 0 );

//normalize the direction vector (convert to vector of length 1)
dir.normalize();

const origin = new THREE.Vector3( 0, 0, 0 );
const length = 3;
const hex = "white";

const arrowHelper = new THREE.ArrowHelper( dir, origin, length, hex );
scene.add( arrowHelper );

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
