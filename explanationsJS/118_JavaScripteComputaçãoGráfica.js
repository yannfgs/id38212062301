// JavaScript e Computação Gráfica

// Com WebGL e Three.js, JavaScript pode ser usado para criar gráficos 3D complexos no navegador.


// Exemplo básico usando Three.js
const cena = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometria = new THREE.BoxGeometry();
const materal = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cubo = new THREE.Mesh(geometria, material);

cena.add(cubo);
camera.position.z = 5;

function animar() {
    requestAnimationFrame(animar);
    cubo.rotation.x += 0.01;
    cubo.rotation.y += 0.01;
    renderer.render(cena, camera);
}

animar();