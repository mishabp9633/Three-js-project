// Scene
const scene = new THREE.Scene();

// Red cube
// const geometry = new THREE.BoxGeometry()
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

//Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height);

camera.position.z = 3

scene.add(camera);


//Renderer  
const canvas = document.querySelector(".webgl")
console.log(canvas);

const renderer = new THREE.WebGLRenderer({
    // canvas
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)