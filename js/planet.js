
// --- scene
const scene = new THREE.Scene();

// --- camera
const aspect = window.innerWidth / window.innerHeight;
const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
camera.position.z = 4;
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


const geometryEarth = new THREE.SphereGeometry( 1, 40, 40 );
const materialEarth = new THREE.MeshBasicMaterial( { color: "#433f81" } );
const earth = new THREE.Mesh( geometryEarth, materialEarth );


const geometryMoon = new THREE.SphereGeometry( 0.3, 25, 25 );
const materialMoon = new THREE.MeshBasicMaterial( { color: "#ffff00" } );
const moon = new THREE.Mesh( geometryMoon, materialMoon );

moon.position.x += 2;



scene.add(earth, moon);

const render = function () {
    requestAnimationFrame( render );
  
    earth.rotation.x += 0.01;
    earth.rotation.y += 0.01;

    moon.rotation.x += -0.01;
    moon.rotation.y += -0.01;
    

   

  
    // Render the scene
    renderer.render(scene, camera);
  };
  
  render();

