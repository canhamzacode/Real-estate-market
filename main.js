import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

import './style.css'

const scene = new THREE.Scene();

const loader = new GLTFLoader();

loader.load(
	// resource URL
	'./dabs.glb',
	// called when the resource is loaded
	function ( gltf ) {
    console.log(gltf)
    
    const root = gltf.scene;

    root.scale.set(0.01, 0.01, 0.01)

		scene.add(root);

		gltf.animations; // Array<THREE.AnimationClip>
		gltf.scene; // THREE.Group
		gltf.scenes; // Array<THREE.Group>
		gltf.cameras; // Array<THREE.Camera>
		gltf.asset; // Object

	},
	// called while loading is progressing
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	}
);


// const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );

// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );


const sizes = {width: window.innerWidth,
                height: window.innerHeight}


const light = new THREE.DirectionalLight(0xffffff, 1)
light.position.set(2, 2, 5)
scene.add(light)


const camera = new THREE.PerspectiveCamera( 75, sizes.width / sizes.height, 0.1, 1000 );
camera.position.set(0,1,2)
camera.position.z = 5;
scene.add(camera)


const canvas = document.querySelector(".webgl")

const renderer = new THREE.WebGLRenderer({canvas});

renderer.setSize( sizes.width, sizes.height );

window.addEventListener("resize", ()=> {

  sizes.width = window.innerWidth
  sizes.height = window.innerHeight

  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()
  renderer.setSize( sizes.width, sizes.height);
})


const loop = () => {
  Mesh.position += 0.1
  renderer.render(scene, camera)
  window.requestAnimationFrame(loop)
}

loop()