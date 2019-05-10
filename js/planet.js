
// --- scene
const scene = new THREE.Scene();

// --- camera
const aspect = window.innerWidth / window.innerHeight;
const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
camera.position.set(0, 0, 5);
scene.add(camera);

// --- renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setClearColor("#000000");
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


// --- lights
/*const sun = new THREE.PointLight(0xff0000, 1);
sun.position.set(30, 10, 10);
scene.add(sun);

const sun2 = new THREE.PointLight(0x0000ff, 1);
sun2.position.set(-30, 10, 20);
scene.add(sun2);*/

// --- plateau
// add controls for the camera
const controls = new THREE.OrbitControls(camera);
//texture de la Terre
const loaderEarth = new THREE.TextureLoader();

let earth;
let pivot = new THREE.Object3D();

loaderEarth.load(
  '../images/texture_earth-5400x2700(1).jpg',



  // onLoad callback
  function (texture) {
    // in this example we create the material when the texture is loaded
    //création de l'objet Terre
    const geometryEarth = new THREE.SphereGeometry(1.5, 80, 80);
    const materialEarth = new THREE.MeshBasicMaterial({
      map: texture
    });
    earth = new THREE.Mesh(geometryEarth, materialEarth);

    scene.add(earth);

  },
);


// Texture de la lune
const loaderMoon = new THREE.TextureLoader();

let moon;

loaderMoon.load(
  '../images/texture_moon.jpg',



  // onLoad callback
  function (texture) {
    // in this example we create the material when the texture is loaded
    // création de l'objet lune
    const geometryMoon = new THREE.SphereGeometry(0.5, 50, 50);
    const materialMoon = new THREE.MeshBasicMaterial({
      map: texture
    });
    moon = new THREE.Mesh(geometryMoon, materialMoon);
    moon.position.set(3.8, 0, 0);

    scene.add(moon);
  },

);

//Load background texture
const background = loaderEarth.load('../images/stars-1920x1080.jpg');
scene.background = background;






const render = function () {
  // rotation de la Terre et de la Lune
  if (earth && moon) {
    earth.rotation.y += 0.001;
    moon.rotation.y += -0.01;

    // Rotation de lune autour de la Terre

    earth.add(pivot);
    pivot.add(moon);

  }










  // Render the scene
  renderer.render(scene, camera);
  requestAnimationFrame(render);
};

render();



