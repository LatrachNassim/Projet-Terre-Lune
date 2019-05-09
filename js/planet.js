// --- scene
const scene = new THREE.Scene();

// --- camera
const aspect = window.innerWidth / window.innerHeight;
const camera = new THREE.PerspectiveCamera(75, aspect, 1, 5000);
camera.position.set(0, 20, 50);
camera.rotateX(THREE.Math.degToRad(-40));
scene.add(camera);

// --- renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// --- lights
const sun = new THREE.PointLight(0xff0000, 1);
sun.position.set(30, 10, 10);
scene.add(sun);

const sun2 = new THREE.PointLight(0x0000ff, 1);
sun2.position.set(-30, 10, 20);
scene.add(sun2);

// --- plateau


const geometryEarth = new THREE.EarthGeometry( 32, 32, 32 );
const materialEarth = new THREE.MeshBasicMaterial( {color: 0xffff00} );
const earth = new THREE.Mesh( geometry, material );


const geometryMoon = new THREE.MoonGeometry( 25, 25, 25);
const materialMoon = new THREE.MeshBasicMaterial( {color: 0xffff00} );
const moon = new THREE.Mesh( geometry, material );



scene.add(earth, moon);

renderer.render(scene, camera);
